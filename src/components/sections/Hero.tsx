import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-slipper.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-sand overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 md:top-8 md:right-12 z-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button className="font-medium text-foreground hover:text-primary transition-colors">EN</button>
          <span>/</span>
          <button className="hover:text-primary transition-colors">TR</button>
        </div>
      </div>

      <div className="container-wide section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Handcrafted in Türkiye
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight">
                ECS – Everyday<br />
                <span className="text-primary">Cozy Slippers</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Minimal design, maximum comfort. Designed for homes, hotels and brands who care about quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#collection">View Collection</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Contact for Wholesale</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-slide-in-right">
            <div className="relative aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-sand/50 to-transparent rounded-3xl" />
              <img
                src={heroImage}
                alt="Premium ECS cozy indoor slipper in warm beige color"
                className="w-full h-full object-cover rounded-3xl shadow-elevated animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
