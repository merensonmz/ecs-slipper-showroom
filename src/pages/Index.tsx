import Hero from "@/components/sections/Hero";
import WhyECS from "@/components/sections/WhyECS";
import Collection from "@/components/sections/Collection";
import Process from "@/components/sections/Process";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhyECS />
      <Collection />
      <Process />
      <Craftsmanship />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
