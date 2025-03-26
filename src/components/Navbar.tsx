
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuyNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/checkout');
    setIsMenuOpen(false);
  };

  const handleSignOutClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut();
    setIsMenuOpen(false);
  };

  const handleStartQuizClick = (level: 'level1' | 'level2') => {
    navigate('/quiz', { 
      state: { 
        level,
        isFull: true 
      } 
    });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-navy-900 flex items-center"
          >
            <span className="text-fire-600">My</span>FireAcademy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-navy-800 hover:text-fire-600 transition-colors font-medium">
              Features
            </Link>
            <Link to="/new-to-firefighting" className="text-navy-800 hover:text-fire-600 transition-colors font-medium">
              New To Firefighting
            </Link>
            <Link to="/blog" className="text-navy-800 hover:text-fire-600 transition-colors font-medium">
              Blog
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-navy-800 hover:text-fire-600 transition-colors font-medium flex items-center">
                  <User size={18} className="mr-1" />
                  Dashboard
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-navy-800 hover:text-fire-600 transition-colors font-medium inline-flex items-center">
                    <span>Quizzes</span>
                    <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem onClick={() => handleStartQuizClick('level1')}>
                      Level I Quiz
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStartQuizClick('level2')}>
                      Level II Quiz
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <button 
                  onClick={handleSignOutClick} 
                  className="text-navy-800 hover:text-fire-600 transition-colors font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/sign-in" className="text-navy-800 hover:text-fire-600 transition-colors font-medium">
                  Sign In
                </Link>
                <button onClick={handleBuyNowClick} className="btn-primary animate-pulse-soft ml-2">
                  Buy Now
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="animate-scale-in" />
            ) : (
              <Menu size={24} className="animate-scale-in" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link 
                to="/#features" 
                onClick={() => setIsMenuOpen(false)}
                className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium"
              >
                Features
              </Link>
              <Link 
                to="/new-to-firefighting" 
                onClick={() => setIsMenuOpen(false)}
                className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium"
              >
                New To Firefighting
              </Link>
              <Link 
                to="/blog" 
                onClick={() => setIsMenuOpen(false)}
                className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium"
              >
                Blog
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium flex items-center"
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  
                  <div className="py-2">
                    <div className="font-medium text-navy-800 mb-2">Quizzes:</div>
                    <button 
                      onClick={() => handleStartQuizClick('level1')}
                      className="w-full text-left pl-4 py-2 text-navy-800 hover:text-fire-600 transition-colors"
                    >
                      Level I Quiz
                    </button>
                    <button 
                      onClick={() => handleStartQuizClick('level2')}
                      className="w-full text-left pl-4 py-2 text-navy-800 hover:text-fire-600 transition-colors"
                    >
                      Level II Quiz
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleSignOutClick}
                    className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/sign-in" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium"
                  >
                    Sign In
                  </Link>
                  <button 
                    onClick={handleBuyNowClick}
                    className="btn-primary w-full text-center"
                  >
                    Buy Now
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
