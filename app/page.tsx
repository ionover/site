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
  const sectionWidth = {
    wide: "mx-auto w-full max-w-[1500px]",
    medium: "mx-auto w-full max-w-[1320px]",
    narrow: "mx-auto w-full max-w-[1120px]",
  } as const;

  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="w-full px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        <main className="flex-1 space-y-6">
          <div className={sectionWidth.wide}>
            <Hero />
          </div>
          <div className={sectionWidth.wide}>
            <Services />
          </div>
          <div className={sectionWidth.wide}>
            <Cars />
          </div>
          <div className={sectionWidth.wide}>
            <Pricing />
          </div>
          <div className={sectionWidth.medium}>
            <TripOptions />
          </div>
          <div className={sectionWidth.medium}>
            <HowToOrder />
          </div>
          <div className={sectionWidth.medium}>
            <Testimonials />
          </div>
          <div className={sectionWidth.narrow}>
            <Faq />
          </div>
          <div className={sectionWidth.narrow}>
            <Contacts />
          </div>
        </main>

        <div className={`${sectionWidth.medium} mt-6`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
