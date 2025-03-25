
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Checkout from "./pages/Checkout";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import NewToFirefighting from "./pages/NewToFirefighting";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-to-firefighting" element={<NewToFirefighting />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
