import { Package, Palette, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "Choose Your Model",
    description: "Browse our collection and select the perfect slipper style for your needs.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Pick Colors & Logo",
    description: "Customize with your preferred colors and add your brand logo if needed.",
  },
  {
    icon: Factory,
    number: "03",
    title: "We Manufacture",
    description: "Our skilled craftspeople bring your order to life in our Türkiye workshop.",
  },
  {
    icon: Truck,
    number: "04",
    title: "We Ship Worldwide",
    description: "Fast and reliable delivery to your doorstep, wherever you are.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process from concept to delivery. Perfect for B2B and wholesale customers.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center group">
                {/* Step circle */}
                <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6">
                  <div className="absolute inset-0 bg-card rounded-full border-2 border-border group-hover:border-primary/30 transition-colors shadow-card" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary mb-1" />
                    <span className="text-xs font-medium text-muted-foreground">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-lg font-display mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-card border border-border/50 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a hotel chain looking for quality guest slippers, a retailer building your product line, 
            or a brand wanting custom footwear – we're here to help. Our team will guide you through every step, 
            from sampling to bulk production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
