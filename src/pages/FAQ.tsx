import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are Blueflex slippers handmade?",
    answer: "No. We are a factory that uses modern manufacturing methods combined with trained staff to produce consistent, high-quality slippers at scale. This allows us to maintain quality while handling large orders efficiently.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our standard MOQ is 500 pairs for custom orders. For stock items without customization, we can accommodate smaller quantities. For sample orders or pilot programs, please contact us to discuss options.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. We work with reliable freight partners for both air and sea shipping. Delivery times and costs depend on your location and order size—we'll provide a quote with your order confirmation.",
  },
  {
    question: "Can we add our own logo?",
    answer: "Absolutely. We offer several branding options including embroidery, woven labels, printed tags, and debossing. We can place your logo on the slipper upper, insole, or packaging. Our team will help you choose the best option for your design.",
  },
  {
    question: "What are your standard lead times?",
    answer: "Typical production time is 3-4 weeks for orders up to 5,000 pairs. Larger orders or complex customizations may take 5-6 weeks. Sample development usually takes 1-2 weeks. We'll provide exact timelines with your quote.",
  },
  {
    question: "Do you produce for other brands (white-label)?",
    answer: "Yes, we work with many brands as their manufacturing partner. Your products will be made to your specifications and branded entirely as your own. We keep all client information confidential.",
  },
  {
    question: "Which sizes do you offer?",
    answer: "We produce EU sizes 22-46, covering children through adult. For hotel and spa products, we also offer one-size-fits-most options and S/M/L/XL sizing. Custom size ranges can be discussed for specific orders.",
  },
  {
    question: "Can you send sample products?",
    answer: "Yes, we can send samples from our existing range or create custom samples based on your requirements. Stock samples are typically free (you pay shipping). Custom samples have a development fee that's credited toward your bulk order.",
  },
  {
    question: "What materials do you use?",
    answer: "We work with a variety of materials including fleece, terry cloth, velour, microfiber, waffle cotton, and more. Sole options include EVA, TPR, rubber, and non-woven materials. We can recommend the best materials for your use case.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our form or email. Tell us about your project—what type of slippers you need, approximate quantities, and any customization requirements. We'll get back to you within 1-2 business days with questions and a preliminary quote.",
  },
];

const FAQ = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Common Questions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about working with Blueflex. 
              Can't find what you're looking for? Get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 shadow-card"
                >
                  <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-warm">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our team is happy to answer any questions about our products, 
            processes, or how we can help with your project.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FAQ;
