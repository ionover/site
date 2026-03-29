import { Contacts } from "@/components/contacts";
import { Cars } from "@/components/cars";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TripOptions } from "@/components/trip-options";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        <main className="flex-1 space-y-6">
          <Hero />
          <Services />
          <Cars />
          <Pricing />
          <TripOptions />
          <HowToOrder />
          <Testimonials />
          <Faq />
          <Contacts />
        </main>

        <Footer />
      </div>
    </div>
  );
}
