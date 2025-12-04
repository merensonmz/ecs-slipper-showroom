import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to most countries worldwide. Shipping times vary depending on location, but typically take 5-15 business days. We work with reliable logistics partners to ensure your order arrives safely.",
  },
  {
    question: "Can we add our own logo?",
    answer: "Absolutely. We offer custom branding options including embroidered logos, printed designs, and custom labels. Our design team will work with you to ensure your brand looks perfect on every pair.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity starts at 100 pairs for standard models. For custom designs with branding, the MOQ is typically 200-300 pairs. We're flexible for new partnerships – just ask!",
  },
  {
    question: "What materials do you use?",
    answer: "We use a variety of premium materials including soft cotton terry, plush velvet, natural wool blends, and breathable microfiber. All materials are carefully selected for comfort, durability, and easy care.",
  },
  {
    question: "How long does production take?",
    answer: "Standard orders typically take 2-3 weeks to produce. Custom orders with branding usually require 3-4 weeks. Rush orders may be available – please contact us to discuss your timeline.",
  },
  {
    question: "Do you offer samples?",
    answer: "Yes, we provide samples for serious buyers. Sample packs typically include 3-5 different models so you can evaluate quality, fit, and materials before placing a bulk order.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers (T/T), PayPal for smaller orders, and can discuss letter of credit for large orders. Payment terms are typically 30% deposit with balance before shipping.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding gradient-warm">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with ECS.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
