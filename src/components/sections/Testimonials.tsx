import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our hotel guests love ECS slippers – soft, durable and stylish. We've been ordering for 3 years now.",
    author: "Boutique Hotel Group",
    location: "Istanbul, Türkiye",
  },
  {
    quote: "The custom branding options are fantastic. Our spa clients always ask where we get our slippers.",
    author: "Wellness Retreat",
    location: "Barcelona, Spain",
  },
  {
    quote: "Reliable quality and great communication. ECS is our go-to supplier for all our retail slipper needs.",
    author: "Home Goods Retailer",
    location: "London, UK",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            What Our <span className="text-primary">Partners</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by hotels, retailers, and brands around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-hover transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {["Hotels", "Spas", "Retailers", "Brands"].map((partner) => (
              <div
                key={partner}
                className="text-xl md:text-2xl font-display text-muted-foreground"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
