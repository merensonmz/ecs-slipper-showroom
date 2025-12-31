import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/hooks/useTranslation";

const questionKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"] as const;

const FAQ = () => {
  const { t, isRTL } = useTranslation();

  const faqs = questionKeys.map((key) => ({
    question: t(`faq.questions.${key}.q`),
    answer: t(`faq.questions.${key}.a`),
  }));

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`max-w-3xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("faq.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("faq.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("faq.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${isRTL ? "text-right" : ""}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 shadow-card"
                >
                  <AccordionTrigger
                    className={`${isRTL ? "text-right" : "text-left"} font-display font-semibold py-5 hover:no-underline`}
                  >
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
            {t("faq.cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {t("faq.cta.desc")}
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">{t("faq.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FAQ;
