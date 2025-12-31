import { Leaf, Recycle, Clock, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const initiativeConfig = [
  { key: "waste", icon: Recycle },
  { key: "durable", icon: Clock },
  { key: "improvement", icon: TrendingUp },
  { key: "sourcing", icon: Leaf },
] as const;

const statKeys = ["waste", "recycled", "packaging"] as const;

const Sustainability = () => {
  const { t, isRTL, translations } = useTranslation();

  const initiatives = initiativeConfig.map(({ key, icon }) => ({
    icon,
    title: t(`sustainability.initiatives.${key}.title`),
    description: t(`sustainability.initiatives.${key}.desc`),
  }));

  const stats = statKeys.map((key) => ({
    value: translations.sustainability.stats[key].value,
    label: t(`sustainability.stats.${key}.label`),
  }));

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`max-w-3xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("sustainability.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("sustainability.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("sustainability.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
            {initiatives.map((item, index) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${isRTL ? "ml-auto" : ""}`}>
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Note */}
      <section className="section-padding gradient-warm">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              {t("sustainability.journey.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("sustainability.journey.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("sustainability.journey.p2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("sustainability.journey.p3")}
            </p>
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`animate-slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
                <p className="text-4xl md:text-5xl font-display text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
