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
    <div className="min-h-screen w-full overflow-hidden bg-white">
      <Header />

      <div className="w-full">
        <main className="flex-1">
          <Hero />
          <Services />
          <Cars />
          <TripOptions />
          <Testimonials />
          <Faq />
          <Pricing />
          <HowToOrder />
          <Contacts />
        </main>

        <Footer />
      </div>
    </div>
  );
}
