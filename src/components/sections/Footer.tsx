import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-padding py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-display">ECS Slippers</h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Premium indoor slippers handcrafted in Türkiye. Designed for homes, hotels, 
              and brands who care about quality and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#collection" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Collection
              </a>
              <a href="#process" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                How We Work
              </a>
              <a href="#contact" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@ecs-slippers.com" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@ecs-slippers.com
              </a>
              <a 
                href="tel:+905550000000" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +90 555 000 00 00
              </a>
              <a 
                href="https://wa.me/905550000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} ECS Slippers. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Handcrafted with care in Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
