import { Button } from "@/components/ui/button";
import slipperHotel from "@/assets/slipper-hotel.jpg";
import slipperCloud from "@/assets/slipper-cloud.jpg";
import slipperKids from "@/assets/slipper-kids.jpg";
import slipperPremium from "@/assets/slipper-premium.jpg";
import slipperNatural from "@/assets/slipper-natural.jpg";
import slipperSummer from "@/assets/slipper-summer.jpg";

const products = [
  {
    name: "Cloud Home Slipper",
    description: "Ultra-soft plush slipper perfect for lazy mornings and cozy evenings at home.",
    tags: ["Unisex", "Home Use", "Best Seller"],
    image: slipperCloud,
  },
  {
    name: "Hotel Classic",
    description: "Professional-grade slipper designed for hotels, spas, and hospitality businesses.",
    tags: ["Hotel & Spa", "Bulk Orders", "Custom Logo Available"],
    image: slipperHotel,
  },
  {
    name: "Kids Cozy",
    description: "Fun and colorful slippers designed specifically for little feet. Safe and comfortable.",
    tags: ["Kids", "Anti-Slip", "Washable"],
    image: slipperKids,
  },
  {
    name: "Premium Velvet",
    description: "Luxurious velvet finish for premium hospitality and upscale retail markets.",
    tags: ["Premium", "Custom Branding", "Gift Ready"],
    image: slipperPremium,
  },
  {
    name: "Natural Wool",
    description: "Sustainable wool-blend slipper for eco-conscious customers who love natural materials.",
    tags: ["Eco-Friendly", "Unisex", "All Season"],
    image: slipperNatural,
  },
  {
    name: "Summer Breeze",
    description: "Lightweight open-toe design perfect for warmer climates and summer collections.",
    tags: ["Open Toe", "Breathable", "Lightweight"],
    image: slipperSummer,
  },
];

const Collection = () => {
  return (
    <section id="collection" className="section-padding gradient-warm">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            Our <span className="text-primary">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our range of premium slippers designed for every need and occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-2 hover:bg-primary/5">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
