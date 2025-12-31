import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory as FactoryIcon, Shield, Zap, BarChart3 } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const capabilityConfig = [
  { key: "capacity", icon: BarChart3 },
  { key: "quality", icon: Shield },
  { key: "lean", icon: Zap },
  { key: "consistent", icon: FactoryIcon },
] as const;

const processKeys = ["s1", "s2", "s3", "s4", "s5"] as const;

const Factory = () => {
  const { t, isRTL } = useTranslation();

  const capabilities = capabilityConfig.map(({ key, icon }) => ({
    icon,
    title: t(`factory.capabilities.${key}.title`),
    description: t(`factory.capabilities.${key}.desc`),
  }));

  const steps = processKeys.map((key, index) => ({
    step: `${index + 1}`.padStart(2, "0"),
    title: t(`factory.steps.${key}.title`),
    description: t(`factory.steps.${key}.desc`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Blueflex manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="container-wide section-padding relative z-10">
          <div className={`max-w-2xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("factory.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("factory.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("factory.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              {t("factory.capabilitiesTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("factory.capabilitiesDesc")}
            </p>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${isRTL ? "ml-auto" : ""}`}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section-padding gradient-warm">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              {t("factory.processTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("factory.processDesc")}
            </p>
          </div>
          <div className={`grid md:grid-cols-5 gap-6 ${isRTL ? "text-right" : ""}`}>
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`relative animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-display font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-8 ${isRTL ? "right-[60%]" : "left-[60%]"} w-[80%] h-0.5 bg-border`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            {t("factory.cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {t("factory.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">{t("factory.cta.schedule")}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/models">{t("factory.cta.viewProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Factory;
