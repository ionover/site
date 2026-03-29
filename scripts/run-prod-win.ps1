param(
  [int]$Port = 3000,
  [Alias("Host")]
  [string]$HostName = "localhost"
)

$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Path $PSScriptRoot -Parent
Set-Location -Path $rootDir

$nodePath = "C:\Program Files\nodejs\node.exe"
$npmPath = "C:\Program Files\nodejs\npm.cmd"

if (-not (Get-Command node -ErrorAction SilentlyContinue) -and (Test-Path -LiteralPath $nodePath)) {
  $env:Path = "C:\Program Files\nodejs;$env:Path"
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue) -and (Test-Path -LiteralPath $npmPath)) {
  $env:Path = "C:\Program Files\nodejs;$env:Path"
}

$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
  Write-Error "Node.js was not found in PATH. Install Node.js LTS and reopen terminal."
  exit 1
}

$npmCmd = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npmCmd) {
  Write-Error "npm was not found in PATH. Reinstall Node.js LTS and reopen terminal."
  exit 1
}

if (-not (Test-Path -LiteralPath "node_modules")) {
  Write-Error "node_modules was not found. Run: npm ci (or npm install)."
  exit 1
}

$npmExe = $npmCmd.Source

Write-Host "Building production bundle..."
& $npmExe run build
if ($LASTEXITCODE -ne 0) {
  Write-Error "Build failed."
  exit $LASTEXITCODE
}

if (Test-Path -LiteralPath "out") {
  Write-Host "Detected static export in ./out"
  Write-Host "Starting static server on http://$HostName`:$Port"
  Write-Host "Press Ctrl+C to stop."

  $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
  if ($pythonCmd) {
    & $pythonCmd.Source -m http.server $Port --bind $HostName --directory out
    exit $LASTEXITCODE
  }

  $pyCmd = Get-Command py -ErrorAction SilentlyContinue
  if ($pyCmd) {
    & $pyCmd.Source -3 -m http.server $Port --bind $HostName --directory out
    exit $LASTEXITCODE
  }

  & $npmExe exec --yes serve@latest out -- --listen "tcp://$HostName`:$Port"
  exit $LASTEXITCODE
}

Write-Host "Starting Next.js production server on http://$HostName`:$Port"
Write-Host "Press Ctrl+C to stop."
& $npmExe run start -- --hostname $HostName --port $Port
exit $LASTEXITCODE
