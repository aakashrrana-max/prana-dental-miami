import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import Index from "./pages/Index";
import AllOnX from "./pages/AllOnX";
import DentalImplants from "./pages/DentalImplants";
import Veneers from "./pages/Veneers";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogImplantsPainful from "./pages/BlogImplantsPainful";
import BlogAllOn4Cost from "./pages/BlogAllOn4Cost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="pb-14 md:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/all-on-x" element={<AllOnX />} />
              <Route path="/dental-implants" element={<DentalImplants />} />
              <Route path="/veneers" element={<Veneers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/are-dental-implants-painful" element={<BlogImplantsPainful />} />
              <Route path="/blog/all-on-4-cost-miami" element={<BlogAllOn4Cost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFAB />
          <StickyMobileCTA />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
