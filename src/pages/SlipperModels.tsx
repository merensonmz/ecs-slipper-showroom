import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import winterWomen from "@/assets/WinterWomen.jpg";
import merdaneWinter from "@/assets/MerdaneWinter.jpg";
import montaMan from "@/assets/MontaMan.jpg";
import montaMan2 from "@/assets/MontaMan2.jpg";
import montaMan3 from "@/assets/MontaMan3.jpg";
import montaMan4 from "@/assets/MontaMan4.jpg";
import summerMan from "@/assets/SummerMan.jpg";
import summerMan2 from "@/assets/SummerMan2.jpg";
import summerWomen from "@/assets/SummerWomen.jpg";
import summerWomen2 from "@/assets/SummerWomen2.jpg";
import summerWomen3 from "@/assets/SummerWomen3.jpg";
import summerWomen4 from "@/assets/SummerWomen4.jpg";
import summerWomen5 from "@/assets/SummerWomen5.jpg";
import summerWomen6 from "@/assets/SummerWomen6.jpg";
import summerWomen7 from "@/assets/SummerWomen7.jpg";
import summerWomen8 from "@/assets/SummerWomen8.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const filterConfig = ["all", "home", "plain", "beach", "sabo", "women", "kids", "eva"] as const;
type FilterKey = (typeof filterConfig)[number];
type CategoryKey = Exclude<FilterKey, "all">;

type ModelConfigItem = {
  key: string;
  image: string;
  categories: CategoryKey[];
  tags: string[];
  specs: { upper: string; sole: string; sizes: string };
};
const modelConfig: readonly ModelConfigItem[] = [
  {
    key: "winterCozyWomen",
    image: winterWomen,
    categories: ["home", "women"],
    tags: ["home", "womenFocus", "warmLining"],
    specs: { upper: "softFleece", sole: "polyurethane", sizes: "36-41 EU" },
  },
  {
    key: "merdaneWinter",
    image: merdaneWinter,
    categories: ["home", "eva"],
    tags: ["evaSole", "warmLining"],
    specs: { upper: "softPlush", sole: "evaAntiSlip", sizes: "40-45 EU" },
  },
  {
    key: "montaMan",
    image: montaMan,
    categories: ["sabo", "eva"],
    tags: ["saboStyle", "evaSole", "lightweight"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "40-45 EU" },
  },
  {
    key: "montaMan2",
    image: montaMan2,
    categories: ["sabo", "eva"],
    tags: ["saboStyle", "evaSole", "lightweight"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "40-45 EU" },
  },
  {
    key: "montaMan3",
    image: montaMan3,
    categories: ["sabo", "eva"],
    tags: ["saboStyle", "evaSole", "lightweight"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "40-45 EU" },
  },
  {
    key: "montaMan4",
    image: montaMan4,
    categories: ["sabo", "eva"],
    tags: ["saboStyle", "evaSole", "lightweight"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "40-45 EU" },
  },
  {
    key: "summerMan",
    image: summerMan,
    categories: ["beach", "plain", "eva"],
    tags: ["lightweight", "evaSole", "breathable"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "39-44 EU" },
  },
  {
    key: "summerMan2",
    image: summerMan2,
    categories: ["beach", "plain", "eva"],
    tags: ["lightweight", "evaSole", "breathable"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "39-44 EU" },
  },
  {
    key: "summerWomen",
    image: summerWomen,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen2",
    image: summerWomen2,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen3",
    image: summerWomen3,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen4",
    image: summerWomen4,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen5",
    image: summerWomen5,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen6",
    image: summerWomen6,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen7",
    image: summerWomen7,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
  {
    key: "summerWomen8",
    image: summerWomen8,
    categories: ["beach", "plain", "women", "eva"],
    tags: ["womenFocus", "lightweight", "breathable", "evaSole"],
    specs: { upper: "microfiber", sole: "evaAntiSlip", sizes: "36-40 EU" },
  },
];

const SlipperModels = () => {
  const { t, isRTL } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filters = filterConfig.map((key) => ({
    key,
    label: t(`models.filters.${key}`),
  }));

  const models = modelConfig.map((model) => ({
    ...model,
    name: t(`models.products.${model.key}.name`),
    description: t(`models.products.${model.key}.desc`),
    tags: model.tags.map((tag) => t(`models.tags.${tag}`)),
    specs: {
      upper: t(`models.materials.${model.specs.upper}`),
      sole: t(`models.materials.${model.specs.sole}`),
      sizes: model.specs.sizes,
    },
    categories: model.categories,
  }));

  const filteredModels =
    activeFilter === "all"
      ? models
      : models.filter((model) => model.categories.includes(activeFilter));

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`max-w-3xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("models.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("models.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("models.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Filters */}
          <div className={`flex flex-wrap gap-2 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
            {filteredModels.map((model, index) => (
              <div
                key={model.key}
                className={`group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${(index % 5) + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{model.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {model.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Specs */}
                  <div className="border-t border-border pt-4 mt-4 space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">{t("models.specs.upper")}:</span>{" "}
                      {model.specs.upper}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">{t("models.specs.sole")}:</span>{" "}
                      {model.specs.sole}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">{t("models.specs.sizes")}:</span>{" "}
                      {model.specs.sizes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 ${isRTL ? "text-right" : ""}`}>
            <p className="text-muted-foreground mb-4">
              {t("models.cta.text")}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">{t("models.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlipperModels;
