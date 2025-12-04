import { Check } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const benefits = [
  "Small MOQ options for startups and boutiques",
  "Consistent sizing across all batches",
  "Quality-testing on every single batch",
];

const Craftsmanship = () => {
  return (
    <section className="section-padding gradient-sand">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={workshopImage}
                alt="ECS workshop craftspeople making slippers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
                From Our Workshop to Your Customers
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              ECS is a small, family-run factory based in Türkiye. We've been crafting slippers for over a decade, 
              focusing on what matters most: comfort, quality control, and building long-term partnerships with 
              businesses who share our values.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We're not a faceless manufacturer – we're a team of dedicated craftspeople who take pride in every 
              pair we make. When you work with ECS, you get a partner who genuinely cares about your success.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
