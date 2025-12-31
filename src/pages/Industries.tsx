import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hotel, Sparkles, HeartPulse, Gift, ShoppingBag } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const sectorConfig = [
  { key: "hotels", icon: Hotel },
  { key: "spas", icon: Sparkles },
  { key: "hospitals", icon: HeartPulse },
  { key: "corporate", icon: Gift },
  { key: "ecommerce", icon: ShoppingBag },
] as const;

const Industries = () => {
  const { t, isRTL } = useTranslation();

  const sectors = sectorConfig.map(({ key, icon }) => ({
    icon,
    title: t(`industries.sectors.${key}.title`),
    description: t(`industries.sectors.${key}.desc`),
    features: ["f1", "f2", "f3"].map((featureKey) =>
      t(`industries.sectors.${key}.features.${featureKey}`)
    ),
  }));

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`max-w-3xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("industries.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("industries.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("industries.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
            {sectors.map((sector, index) => (
              <div
                key={sector.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${(index % 5) + 1}`}
                style={{ opacity: 0 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${isRTL ? "ml-auto" : ""}`}>
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{sector.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-2">
                  {sector.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-10 rounded-2xl gradient-warm">
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              {t("industries.cta.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              {t("industries.cta.desc")}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">{t("industries.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
