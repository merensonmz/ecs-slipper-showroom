import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import slipperCloud from "@/assets/slipper-cloud.jpg";
import slipperHotel from "@/assets/slipper-hotel.jpg";
import slipperKids from "@/assets/slipper-kids.jpg";
import slipperPremium from "@/assets/slipper-premium.jpg";
import slipperNatural from "@/assets/slipper-natural.jpg";
import slipperSummer from "@/assets/slipper-summer.jpg";

const filters = ["All", "Home", "Hotel", "Kids", "Promotional"];

const models = [
  {
    id: 1,
    name: "Home Comfort",
    image: slipperCloud,
    description: "Our bestselling home slipper with memory foam insole. Perfect for everyday indoor use with maximum comfort and durability.",
    tags: ["Unisex", "Home", "Best Seller"],
    category: "Home",
    specs: {
      upper: "Soft fleece",
      sole: "EVA anti-slip",
      sizes: "36-46 EU",
    },
  },
  {
    id: 2,
    name: "Hotel Classic",
    image: slipperHotel,
    description: "Elegant open-toe design for hotels and hospitality. Lightweight, disposable-friendly, and available in bulk quantities.",
    tags: ["Hotel & Spa", "Custom Logo Available"],
    category: "Hotel",
    specs: {
      upper: "Terry cloth",
      sole: "Non-woven anti-slip",
      sizes: "One size / S-M-L",
    },
  },
  {
    id: 3,
    name: "Spa & Wellness",
    image: slipperNatural,
    description: "Premium closed-toe slipper for spa and wellness centers. Soft, absorbent, and designed for a luxurious guest experience.",
    tags: ["Hotel & Spa", "Premium"],
    category: "Hotel",
    specs: {
      upper: "Waffle cotton",
      sole: "Rubber anti-slip",
      sizes: "36-44 EU",
    },
  },
  {
    id: 4,
    name: "Kids Cozy",
    image: slipperKids,
    description: "Fun and colorful slippers for children. Safe, soft materials with extra grip for active little feet.",
    tags: ["Kids", "Safe Materials"],
    category: "Kids",
    specs: {
      upper: "Soft plush",
      sole: "TPR anti-slip",
      sizes: "22-34 EU",
    },
  },
  {
    id: 5,
    name: "Corporate Gift",
    image: slipperPremium,
    description: "High-quality slippers perfect for corporate gifts and promotional campaigns. Fully customizable with your branding.",
    tags: ["Promotional", "Custom Logo Available"],
    category: "Promotional",
    specs: {
      upper: "Velour",
      sole: "EVA anti-slip",
      sizes: "36-46 EU",
    },
  },
  {
    id: 6,
    name: "Travel Lite",
    image: slipperSummer,
    description: "Compact foldable slippers ideal for travel kits, airlines, and hospitality welcome packages.",
    tags: ["Hotel & Spa", "Lightweight"],
    category: "Hotel",
    specs: {
      upper: "Microfiber",
      sole: "TPE foldable",
      sizes: "S-M-L-XL",
    },
  },
];

const SlipperModels = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredModels = activeFilter === "All" 
    ? models 
    : models.filter(m => m.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Slipper Models
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our range of indoor slippers designed for homes, hotels, spas, and promotional use. 
              All models are manufactured in our facility with consistent quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredModels.map((model, index) => (
              <div
                key={model.id}
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
                    <p><span className="font-medium text-foreground">Upper:</span> {model.specs.upper}</p>
                    <p><span className="font-medium text-foreground">Sole:</span> {model.specs.sole}</p>
                    <p><span className="font-medium text-foreground">Sizes:</span> {model.specs.sizes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Need a custom model or have specific requirements?
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlipperModels;
