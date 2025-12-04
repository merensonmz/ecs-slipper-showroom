import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hotel, Sparkles, HeartPulse, Gift, ShoppingBag } from "lucide-react";

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description: "We supply thousands of hotels with comfortable guest slippers. From budget-friendly disposable options to premium reusable designs, we offer bulk quantities with reliable delivery schedules.",
    features: ["Bulk pricing", "Custom branding", "Multiple quality tiers"],
  },
  {
    icon: Sparkles,
    title: "Spas & Wellness Centers",
    description: "Our spa slippers combine comfort with hygiene. Available in absorbent materials like waffle cotton and terry cloth, designed to enhance the guest wellness experience.",
    features: ["Absorbent materials", "Elegant designs", "Matching robes available"],
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Clinics",
    description: "We produce hygienic, easy-to-clean slippers for healthcare facilities. Anti-slip soles and disposable options ensure patient safety and infection control compliance.",
    features: ["Hygienic materials", "Anti-slip certified", "Easy disposal"],
  },
  {
    icon: Gift,
    title: "Corporate Gifts & Promotion",
    description: "Turn slippers into memorable branded gifts. We manufacture promotional slippers with your logo for trade shows, employee gifts, and client appreciation packages.",
    features: ["Full customization", "Gift packaging", "Small MOQ available"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Retail Brands",
    description: "We partner with brands who want to launch their own slipper line. White-label production with your branding, from design consultation to finished product ready for sale.",
    features: ["White-label production", "Private labeling", "Consistent quality"],
  },
];

const Industries = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Our Partners
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blueflex works as a factory partner for businesses across multiple sectors. 
              We understand the specific needs of each industry and adapt our production accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${(index % 5) + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature) => (
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
              Don't see your industry?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We work with businesses of all types. If you need indoor slippers manufactured 
              at scale, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
