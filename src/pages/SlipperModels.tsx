import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import type { Language } from "@/i18n/translations";

const BUCKET = "slipper-images";

type Category = {
  id: string;
  name_tr: string | null;
  name_en: string | null;
  name_ar: string | null;
  slug: string;
};

type Tag = {
  id: string;
  name_tr: string | null;
  name_en: string | null;
  name_ar: string | null;
  slug: string;
};

type Slipper = {
  id: string;
  name_tr: string;
  name_en: string | null;
  name_ar: string | null;
  desc_tr: string | null;
  desc_en: string | null;
  desc_ar: string | null;
  image_path: string | null;
  image_url: string | null;
  sizes: string | null;
  upper_tr: string | null;
  upper_en: string | null;
  upper_ar: string | null;
  sole_tr: string | null;
  sole_en: string | null;
  sole_ar: string | null;
  slipper_categories: { categories: Category }[];
  slipper_tags: { tags: Tag }[];
};

const pickLocalized = (
  item: Record<string, string | null | undefined>,
  field: string,
  language: Language
) => {
  return (
    item[`${field}_${language}`] ??
    item[`${field}_tr`] ??
    item[`${field}_en`] ??
    ""
  );
};

const getImageUrl = (path: string | null, url: string | null) => {
  if (url) return url;
  if (!path) return "";
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
};

const SlipperModels = () => {
  const { t, isRTL, language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
      .from("categories")
      .select("id,name_tr,name_en,name_ar,slug")
      .order("created_at", { ascending: true });
    if (error) throw error;
    return data ?? [];
  };

  const fetchSlippers = async (): Promise<Slipper[]> => {
    const { data, error } = await supabase
      .from("slippers")
      .select(
        "id,name_tr,name_en,name_ar,desc_tr,desc_en,desc_ar,image_path,image_url,sizes,upper_tr,upper_en,upper_ar,sole_tr,sole_en,sole_ar,slipper_categories(categories(id,name_tr,name_en,name_ar,slug)),slipper_tags(tags(id,name_tr,name_en,name_ar,slug))"
      )
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  };

  const {
    data: categories = [],
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: slippers = [],
    isLoading: slippersLoading,
  } = useQuery({
    queryKey: ["slippers"],
    queryFn: fetchSlippers,
  });

  const filters = useMemo(() => {
    const base = [{ key: "all", label: t("models.filters.all") }];
    const dynamic = categories.map((category) => ({
      key: category.slug,
      label: pickLocalized(category, "name", language) || category.slug,
    }));
    return [...base, ...dynamic];
  }, [categories, language, t]);

  const mappedSlippers = useMemo(() => {
    return slippers.map((slipper) => {
      const categorySlugs = slipper.slipper_categories.map(
        (item) => item.categories.slug
      );
      const tagLabels = slipper.slipper_tags.map((item) =>
        pickLocalized(item.tags, "name", language)
      );
      return {
        ...slipper,
        name: pickLocalized(slipper, "name", language),
        description: pickLocalized(slipper, "desc", language),
        upperLabel: pickLocalized(slipper, "upper", language),
        soleLabel: pickLocalized(slipper, "sole", language),
        tagLabels,
        categorySlugs,
        image: getImageUrl(slipper.image_path, slipper.image_url),
      };
    });
  }, [language, slippers]);

  const filteredModels =
    activeFilter === "all"
      ? mappedSlippers
      : mappedSlippers.filter((model) =>
          model.categorySlugs.includes(activeFilter)
        );

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
          {categoriesLoading || slippersLoading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : filteredModels.length === 0 ? (
            <p className="text-muted-foreground">No models yet.</p>
          ) : (
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${isRTL ? "text-right" : ""}`}>
              {filteredModels.map((model, index) => (
                <div
                  key={model.id}
                  className={`group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${
                    (index % 5) + 1
                  }`}
                  style={{ opacity: 0 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    {model.image ? (
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {model.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {model.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {model.tagLabels.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* Specs */}
                    <div className="border-t border-border pt-4 mt-4 space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">
                          {t("models.specs.upper")}:
                        </span>{" "}
                        {model.upperLabel}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          {t("models.specs.sole")}:
                        </span>{" "}
                        {model.soleLabel}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          {t("models.specs.sizes")}:
                        </span>{" "}
                        {model.sizes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

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
