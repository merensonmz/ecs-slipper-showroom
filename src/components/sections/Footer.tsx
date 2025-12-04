import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-semibold">
              Blueflex
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Modern slipper manufacturing facility in Türkiye. 
              Quality indoor slippers for homes, hotels, and brands worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/models" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Slipper Models
                </Link>
              </li>
              <li>
                <Link to="/customization" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Customization
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/factory" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Factory
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:info@blueflex-slippers.com" className="hover:text-primary-foreground transition-colors">
                  info@blueflex-slippers.com
                </a>
              </li>
              <li>
                <a href="tel:+905550000000" className="hover:text-primary-foreground transition-colors">
                  +90 555 000 00 00
                </a>
              </li>
              <li>Industrial Zone, Denizli, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Blueflex Slippers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
