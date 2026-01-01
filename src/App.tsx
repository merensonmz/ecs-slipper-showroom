import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import SlipperModels from "./pages/SlipperModels";
import Industries from "./pages/Industries";
import Factory from "./pages/Factory";
import Customization from "./pages/Customization";
import Sustainability from "./pages/Sustainability";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout><Home /></Layout>} path="/" />
            <Route element={<Layout><SlipperModels /></Layout>} path="/models" />
            <Route element={<Layout><Industries /></Layout>} path="/industries" />
            <Route element={<Layout><Factory /></Layout>} path="/factory" />
            <Route element={<Layout><Customization /></Layout>} path="/customization" />
            <Route element={<Layout><Sustainability /></Layout>} path="/sustainability" />
            <Route element={<Layout><FAQ /></Layout>} path="/faq" />
            <Route element={<Layout><Contact /></Layout>} path="/contact" />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
