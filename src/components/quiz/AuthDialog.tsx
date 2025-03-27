
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      await signIn(email, password);
      onOpenChange(false);
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        title: "Authentication Error",
        description: "Failed to sign in. Please check your credentials.",
        variant: "destructive"
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleAuthPrompt = (action: 'signin' | 'signup' | 'cancel') => {
    onOpenChange(false);
    if (action === 'signin') {
      navigate('/sign-in');
    } else if (action === 'signup') {
      navigate('/profile-setup');
    } else {
      // Demo mode
      toast({
        title: "Demo Mode Activated",
        description: "You'll see 5 sample questions. Sign in to access the full exam.",
        duration: 5000,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Welcome to Firefighter Exam Prep</DialogTitle>
            <DialogDescription className="text-center text-gray-500 mt-2">Sign in to access the full exam</DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSignIn} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="pl-10"
                  required
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Your Password</Label>
              <div className="relative">
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="pl-10"
                  required
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-fire-600 hover:bg-fire-700 text-white font-medium py-3"
              disabled={authLoading}
            >
              {authLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          
          <div className="mt-6 text-center space-y-2">
            <a href="#" className="text-fire-600 hover:underline text-sm">
              Forgot your password?
            </a>
            <div className="text-sm text-gray-500">
              Don't have an account? <button 
                onClick={() => handleAuthPrompt('signup')}
                className="text-fire-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </div>
            <div className="pt-4 border-t mt-4">
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => handleAuthPrompt('cancel')}
              >
                Try Demo (5 Questions)
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
