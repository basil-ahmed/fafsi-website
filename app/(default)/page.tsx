export const metadata = {
  title: "Home - FAFSI",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import MortgageRatesWidget from "@/components/mortgagerateswidget";
import MortgageCalculatorWidget from "@/components/mortgagecalculatorwidget";
import MortgageNewsWidget from "@/components/mortgagenewswidget";
import About from "@/components/about";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      {/* Mortgage Tools Section */}
      <section id="tools" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Mortgage Tools</h2>
          <p className="text-gray-700 mb-8">
            Stay informed with the latest rates and calculate your mortgage with ease.
          </p>
          {/* Tools Section with Side-by-Side Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex-shrink-0">
              <MortgageRatesWidget />
            </div>
            <div className="flex-shrink-0">
              <MortgageCalculatorWidget />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Mortgage and Real Estate News</h2>
          <p className="text-gray-700 mb-8">
            Get the latest updates on the housing market, mortgage rates, and real estate trends.
          </p>
          <div className="mx-auto">
            <MortgageNewsWidget />
          </div>
        </div>
      </section>
      <About />
      <LargeTestimonial />
      <Cta />
      {/* <Banner /> */}
    </>
  );
}
