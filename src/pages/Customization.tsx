import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Shirt, Tag, Package } from "lucide-react";
import slipperPremium from "@/assets/slipper-premium.jpg";

const customizationOptions = [
  {
    icon: Shirt,
    title: "Choose Your Model",
    description: "Start with one of our proven slipper designs. We have models optimized for home use, hotels, spas, and more. Each model can be modified to fit your needs.",
  },
  {
    icon: Palette,
    title: "Pick Colors & Materials",
    description: "Select from our range of fabrics and colors, or request custom options. We work with fleece, terry cloth, velour, microfiber, and more.",
  },
  {
    icon: Tag,
    title: "Add Your Logo",
    description: "Your brand on every pair. We offer embroidery, woven labels, printed tags, and debossing. Multiple placement options available.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "From simple poly bags to branded boxes, we can package your slippers exactly how you want them delivered to your customers.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Initial Inquiry",
    description: "Tell us what you need—quantities, timeline, and any specific requirements.",
  },
  {
    number: "2",
    title: "Sample Development",
    description: "We create samples based on your specs. You review and approve before bulk production.",
  },
  {
    number: "3",
    title: "Production",
    description: "Once approved, we manufacture your order with consistent quality checks.",
  },
  {
    number: "4",
    title: "Delivery",
    description: "Finished products are packaged and shipped to your location worldwide.",
  },
];

const Customization = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                Make It Yours
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
                Customization Options
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a hotel chain, retail brand, or promotional company, 
                we can customize our slippers to match your brand identity. As a factory, 
                we have the flexibility to produce both small test runs and large orders.
              </p>
            </div>
            <div className="relative">
              <img
                src={slipperPremium}
                alt="Customized slipper with branding"
                className="w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {customizationOptions.map((option, index) => (
              <div
                key={option.title}
                className={`p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding gradient-warm">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From your initial idea to finished products at your door.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`text-center p-6 animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-display font-bold">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Note */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl bg-card border border-border/50 shadow-card">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Flexible Minimum Orders
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We understand not every project is huge. While our standard MOQ is 500 pairs 
              for custom orders, we can discuss smaller quantities for sample runs or 
              pilot programs. Let's talk about what works for you.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customization;
