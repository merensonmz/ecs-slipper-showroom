import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t, isRTL } = useTranslation();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-padding">
        <div className={`grid md:grid-cols-4 gap-12 md:gap-8 ${isRTL ? "text-right" : ""}`}>
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-semibold">
              Blueflex
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/models" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.slipperModels")}
                </Link>
              </li>
              <li>
                <Link to="/customization" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.customization")}
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.industries")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/factory" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.ourFactory")}
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.sustainability")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("footer.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:info@blueflex-slippers.com" className="hover:text-primary-foreground transition-colors">
                  info@blueflex-slippers.com
                </a>
              </li>
              <li>
                <a href="tel:+905336688412" className="hover:text-primary-foreground transition-colors">
                  +90 533 668 84 12
                </a>
              </li>
              <li>Industrial Zone, Gaziantep, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">
              {t("footer.getQuote")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
