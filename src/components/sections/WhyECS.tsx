import { Wind, Shield, Palette, Heart } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Soft & Breathable",
    description: "Premium materials that keep your feet comfortable all day long, in any season.",
  },
  {
    icon: Shield,
    title: "Durable Anti-Slip",
    description: "Engineered soles that provide safety on any surface without compromising comfort.",
  },
  {
    icon: Palette,
    title: "Customizable Design",
    description: "Choose from endless colors, patterns, and add your brand logo for a personalized touch.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every pair is handcrafted in our Türkiye workshop with attention to detail.",
  },
];

const WhyECS = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            Why Choose <span className="text-primary">ECS</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe comfort should never be compromised. Here's what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-hover transition-all duration-300 animate-slide-up opacity-0 stagger-${index + 1}`}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyECS;
