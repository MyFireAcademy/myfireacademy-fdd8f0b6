
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const location = useLocation();
  
  const isQuizPage = location.pathname === '/quiz';
  const extraSpacingClass = isQuizPage ? 'mb-28' : '';

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      } ${extraSpacingClass}`}
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
            <Link to="/quiz" className="text-navy-800 hover:text-fire-600 transition-colors font-medium flex items-center">
              <BookOpen size={18} className="mr-1" />
              Practice Tests
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
                to="/quiz" 
                onClick={() => setIsMenuOpen(false)}
                className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium flex items-center"
              >
                <BookOpen size={18} className="mr-2" />
                Practice Tests
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
