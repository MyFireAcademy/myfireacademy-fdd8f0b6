
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Checkout from "./pages/Checkout";
import ProfileSetup from "./pages/ProfileSetup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import NewToFirefighting from "./pages/NewToFirefighting";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import SubscriptionPage from "./pages/SubscriptionPage";
import StripeProvider from "./providers/StripeProvider";
import { checkUserSubscription } from "@/utils/paymentVerification";
import { useAuth } from "@/contexts/AuthContext";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient();

// Protected route component that checks for subscription
const ProtectedQuizRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const [hasAccess, setHasAccess] = React.useState<boolean | null>(null);
  
  React.useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        setHasAccess(false);
        return;
      }
      
      const hasSubscription = await checkUserSubscription(user.id);
      setHasAccess(hasSubscription);
    };
    
    if (!loading) {
      checkAccess();
    }
  }, [user, loading]);
  
  if (loading || hasAccess === null) {
    // Show loading state
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600"></div>
    </div>;
  }
  
  if (!hasAccess) {
    // Redirect to subscription page
    return <Navigate to="/subscription" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <StripeProvider>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* Protected Quiz route */}
                  <Route path="/quiz" element={
                    <ProtectedQuizRoute>
                      <Quiz />
                    </ProtectedQuizRoute>
                  } />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/profile-setup" element={<ProfileSetup />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/subscription" element={<SubscriptionPage />} />
                  <Route path="/new-to-firefighting" element={<NewToFirefighting />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </StripeProvider>
            </TooltipProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
