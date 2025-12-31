import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const interestKeys = ["hotel", "retail", "corporate", "other"] as const;

const Contact = () => {
  const { toast } = useToast();
  const { t, isRTL } = useTranslation();
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
      title: t("contact.toast.title"),
      description: t("contact.toast.desc"),
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedInterests([]);
  };

  const addressLines = t("contact.info.address").split("\n");
  const whatsappNumber = "+90 533 668 84 12";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <>
      {/* Header */}
      <section className="section-padding gradient-sand">
        <div className="container-wide">
          <div className={`max-w-3xl ${isRTL ? "text-right" : ""}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {t("contact.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("contact.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-3 gap-12 ${isRTL ? "text-right" : ""}`}>
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t("contact.form.placeholders.name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.form.company")} *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder={t("contact.form.placeholders.company")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("contact.form.placeholders.email")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t("contact.form.placeholders.phone")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">{t("contact.form.country")} *</Label>
                  <Input
                    id="country"
                    name="country"
                    required
                    placeholder={t("contact.form.placeholders.country")}
                  />
                </div>

                <div className="space-y-3">
                  <Label>{t("contact.form.interests")}</Label>
                  <div className="flex flex-wrap gap-4">
                    {interestKeys.map((id) => (
                      <div key={id} className="flex items-center gap-2">
                        <Checkbox
                          id={id}
                          checked={selectedInterests.includes(id)}
                          onCheckedChange={() => toggleInterest(id)}
                        />
                        <Label
                          htmlFor={id}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t(`contact.interests.${id}`)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t("contact.form.placeholders.message")}
                    rows={5}
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  {t("contact.form.languageNote")}
                </p>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                <h3 className="font-display font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.info.email")}</p>
                      <a
                        href="mailto:info@blueflex-slippers.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ali@ecsimportexport.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.info.phone")}</p>
                      <a
                        href="tel:+905336688412"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +90 533 668 84 12
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.info.whatsapp")}</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.info.location")}</p>
                      <p className="text-muted-foreground">
                        {addressLines.map((line, idx) => (
                          <span key={idx} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="font-display font-semibold mb-2">
                  {t("contact.responseTime.title")}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("contact.responseTime.desc")}
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  {t("contact.mapPlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
