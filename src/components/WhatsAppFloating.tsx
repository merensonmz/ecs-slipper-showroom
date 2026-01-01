import { MessageCircle } from "lucide-react";

const whatsappNumber = "+90 533 668 84 12";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

const WhatsAppFloating = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-hover transition-transform hover:-translate-y-0.5"
    aria-label="WhatsApp ile iletişime geç"
  >
    <MessageCircle className="h-5 w-5" />
    WhatsApp
  </a>
);

export default WhatsAppFloating;
