import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./sections/Footer";
import WhatsAppFloating from "./WhatsAppFloating";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Layout;
