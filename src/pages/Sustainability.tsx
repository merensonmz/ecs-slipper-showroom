import { Leaf, Recycle, Clock, TrendingUp } from "lucide-react";

const initiatives = [
  {
    icon: Recycle,
    title: "Reduced Material Waste",
    description: "We optimize our cutting patterns and processes to minimize fabric waste. Leftover materials are collected and recycled where possible.",
  },
  {
    icon: Clock,
    title: "Durable Products",
    description: "Long-lasting slippers mean fewer replacements and less waste. We design for durability, not planned obsolescence.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We regularly review our manufacturing processes to find ways to reduce energy use, water consumption, and overall environmental impact.",
  },
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    description: "We work with suppliers who share our commitment to responsible practices. We're gradually increasing our use of recycled and eco-friendly materials.",
  },
];

const Sustainability = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Our Approach
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Sustainability
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a manufacturing business, and we're honest about our impact. 
              We're not perfect, but we're committed to doing better. Here's what 
              we're working on.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {initiatives.map((item, index) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
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
              A Note on Our Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're not going to pretend we're saving the planet. Manufacturing has 
              an environmental footprint, and we acknowledge that.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What we can promise is transparency and steady progress. We track our 
              resource usage, look for opportunities to improve, and choose better 
              options when they make sense for our business and customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If sustainability is a priority for your brand, we're happy to discuss 
              eco-friendly material options and packaging solutions for your orders.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up stagger-1" style={{ opacity: 0 }}>
              <p className="text-4xl md:text-5xl font-display text-primary mb-2">15%</p>
              <p className="text-muted-foreground">Waste reduction since 2022</p>
            </div>
            <div className="animate-slide-up stagger-2" style={{ opacity: 0 }}>
              <p className="text-4xl md:text-5xl font-display text-primary mb-2">30%</p>
              <p className="text-muted-foreground">Of materials from recycled sources</p>
            </div>
            <div className="animate-slide-up stagger-3" style={{ opacity: 0 }}>
              <p className="text-4xl md:text-5xl font-display text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Recyclable packaging available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
