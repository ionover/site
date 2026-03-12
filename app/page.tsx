import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
      <Header />

      <main className="mt-6 flex-1 space-y-6">
        <Hero />
        <Services />
        <HowToOrder />
        <Pricing />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}
