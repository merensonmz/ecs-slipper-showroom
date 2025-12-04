import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory as FactoryIcon, Shield, Zap, BarChart3 } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const capabilities = [
  {
    icon: BarChart3,
    title: "Production Capacity",
    description: "50,000+ pairs per month with room to scale. We can handle orders from 500 to 50,000 pairs per run.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Every batch goes through multi-stage inspection. We check materials, stitching, sizing, and finish before shipping.",
  },
  {
    icon: Zap,
    title: "Lean Processes",
    description: "Modern machinery and trained teams ensure efficient production with minimal waste and fast turnaround.",
  },
  {
    icon: FactoryIcon,
    title: "Consistent Output",
    description: "Standardized processes mean every pair matches the sample. No surprises, just reliable quality.",
  },
];

const productionSteps = [
  {
    step: "01",
    title: "Material Sourcing",
    description: "We source quality fabrics, foams, and soles from trusted suppliers.",
  },
  {
    step: "02",
    title: "Cutting & Stitching",
    description: "Precision cutting machines and skilled operators create the upper components.",
  },
  {
    step: "03",
    title: "Assembly & Gluing",
    description: "Uppers are attached to insoles and outsoles using industrial adhesives.",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Each pair is inspected for defects, sizing accuracy, and finish quality.",
  },
  {
    step: "05",
    title: "Packaging & Shipment",
    description: "Products are packed per your specs and shipped to your location.",
  },
];

const Factory = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Blueflex manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="container-wide section-padding relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Behind the Scenes
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Modern Slipper Manufacturing Facility
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our factory in Türkiye combines modern machinery with skilled workers 
              to produce consistent, high-quality slippers at scale. We're not a craft 
              workshop—we're a manufacturing partner built for volume.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Our Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes Blueflex a reliable manufacturing partner for your slipper needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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

      {/* Production Process */}
      <section className="section-padding gradient-warm">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Production Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From raw materials to finished product—here's how we manufacture your slippers.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {productionSteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-display font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < productionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Want to see our facility?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We welcome factory visits from serious partners. Get in touch to schedule 
            a tour or request production samples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/models">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Factory;
