import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const interests = [
  { id: "hotel", label: "Hotel slippers" },
  { id: "retail", label: "Retail brand" },
  { id: "corporate", label: "Corporate gifts" },
  { id: "other", label: "Other" },
];

const Contact = () => {
  const { toast } = useToast();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 1-2 business days.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedInterests([]);
  };

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Let's build your slipper line together.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your project, and we'll get back to you with 
              options and a preliminary quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    required
                    placeholder="Your country"
                  />
                </div>

                <div className="space-y-3">
                  <Label>What are you interested in?</Label>
                  <div className="flex flex-wrap gap-4">
                    {interests.map((interest) => (
                      <div key={interest.id} className="flex items-center gap-2">
                        <Checkbox
                          id={interest.id}
                          checked={selectedInterests.includes(interest.id)}
                          onCheckedChange={() => toggleInterest(interest.id)}
                        />
                        <Label
                          htmlFor={interest.id}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project, quantities, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  You can write in English or Turkish.
                </p>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                <h3 className="font-display font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@blueflex-slippers.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@blueflex-slippers.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <a
                        href="tel:+905550000000"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +90 555 000 00 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Factory Location</p>
                      <p className="text-muted-foreground">
                        Industrial Zone, Gaziantep<br />
                        Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="font-display font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 1-2 business days. For urgent 
                  inquiries, feel free to reach us via WhatsApp.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
