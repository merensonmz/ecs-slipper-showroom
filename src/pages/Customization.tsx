import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Shirt, Tag, Package } from "lucide-react";
import slipperPremium from "@/assets/slipper-premium.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const optionConfig = [
  { key: "model", icon: Shirt },
  { key: "colors", icon: Palette },
  { key: "logo", icon: Tag },
  { key: "packaging", icon: Package },
] as const;

const processKeys = ["p1", "p2", "p3", "p4"] as const;

const Customization = () => {
  const { t, isRTL } = useTranslation();

  const options = optionConfig.map(({ key, icon }) => ({
    icon,
    title: t(`customization.options.${key}.title`),
    description: t(`customization.options.${key}.desc`),
  }));

  const steps = processKeys.map((key, index) => ({
    number: `${index + 1}`,
    title: t(`customization.process.${key}.title`),
    description: t(`customization.process.${key}.desc`),
  }));

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "text-right" : ""}`}>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                {t("customization.badge")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
                {t("customization.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("customization.desc")}
              </p>
            </div>
            <div className="relative">
              <img
                src={slipperPremium}
                alt="Customized slipper with branding"
                className="w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
            {options.map((option, index) => (
              <div
                key={option.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${isRTL ? "ml-auto" : ""}`}>
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding gradient-warm">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">{t("customization.howItWorks")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("customization.howItWorksDesc")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`text-center p-6 animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-display font-bold">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Note */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl bg-card border border-border/50 shadow-card">
            <h3 className="text-2xl font-display font-semibold mb-4">
              {t("customization.moq.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("customization.moq.desc")}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">{t("customization.moq.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customization;
