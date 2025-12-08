import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Ruler, Package, Globe } from "lucide-react";
import heroImage from "@/assets/hero-slipper.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const Home = () => {
  const { t, isRTL } = useTranslation();

  const highlights = [
    {
      icon: Factory,
      title: t("home.highlights.industrial.title"),
      description: t("home.highlights.industrial.desc"),
    },
    {
      icon: Ruler,
      title: t("home.highlights.sizing.title"),
      description: t("home.highlights.sizing.desc"),
    },
    {
      icon: Package,
      title: t("home.highlights.moq.title"),
      description: t("home.highlights.moq.desc"),
    },
    {
      icon: Globe,
      title: t("home.highlights.shipping.title"),
      description: t("home.highlights.shipping.desc"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-sand overflow-hidden">
        <div className="container-wide section-padding w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-8 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
            {/* Text Content */}
            <div className={`${isRTL ? "lg:col-start-2 text-right" : "order-2 lg:order-1"} space-y-8 animate-slide-in-left`}>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {t("home.badge")}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight">
                  {t("home.headline1")}<br />
                  <span className="text-primary">{t("home.headline2")}</span>,
                  <br />{t("home.headline3")}
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                {t("home.subheadline")}
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/models">{t("home.exploreModels")}</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">{t("home.contactWholesale")}</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`${isRTL ? "lg:col-start-1 lg:row-start-1" : "order-1 lg:order-2"} relative animate-slide-in-right`}>
              <div className="relative aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-sand/50 to-transparent rounded-3xl" />
                <img
                  src={heroImage}
                  alt="Premium Blueflex indoor slipper"
                  className="w-full h-full object-cover rounded-3xl shadow-elevated"
                />
              </div>
              <div className={`absolute -bottom-4 ${isRTL ? "-right-4" : "-left-4"} w-24 h-24 bg-primary/10 rounded-full blur-2xl`} />
              <div className={`absolute -top-8 ${isRTL ? "-left-8" : "-right-8"} w-32 h-32 bg-accent/10 rounded-full blur-3xl`} />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${index + 1} ${isRTL ? "text-right" : ""}`}
                style={{ opacity: 0 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${isRTL ? "mr-auto" : ""}`}>
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

      {/* CTA Section */}
      <section className="section-padding gradient-warm">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            {t("home.cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("home.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/models">{t("home.cta.viewModels")}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/factory">{t("home.cta.seeFactory")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
