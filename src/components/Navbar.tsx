
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log("Current location:", location.pathname);

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

  const handleNavLinkClick = (e: React.MouseEvent, path: string) => {
    // Only prevent default if it's a hash link on the same page
    if (path.includes('#')) {
      const isCurrentPage = path.startsWith('/') ? 
        location.pathname === path.split('#')[0] : 
        location.pathname === '/';
      
      if (isCurrentPage) {
        e.preventDefault();
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      } else {
        navigate(path);
        setIsMenuOpen(false);
      }
    } else {
      // For non-hash links, let React Router handle it
      if (path !== location.pathname) {
        navigate(path);
      }
      setIsMenuOpen(false);
    }
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
            <button 
              onClick={(e) => handleNavLinkClick(e, '/#features')} 
              className="text-navy-800 hover:text-fire-600 transition-colors font-medium"
            >
              Features
            </button>
            <Link 
              to="/new-to-firefighting" 
              className="text-navy-800 hover:text-fire-600 transition-colors font-medium"
              onClick={() => console.log("Navigating to /new-to-firefighting")}
            >
              New To Firefighting
            </Link>
            <Link 
              to="/blog" 
              className="text-navy-800 hover:text-fire-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <button onClick={handleBuyNowClick} className="btn-primary animate-pulse-soft ml-2">
              Buy Now
            </button>
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
              <button 
                onClick={(e) => handleNavLinkClick(e, '/#features')}
                className="text-navy-800 hover:text-fire-600 transition-colors py-2 font-medium text-left"
              >
                Features
              </button>
              <Link 
                to="/new-to-firefighting" 
                onClick={() => {
                  console.log("Mobile: Navigating to /new-to-firefighting");
                  setIsMenuOpen(false);
                }}
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
              <button 
                onClick={handleBuyNowClick}
                className="btn-primary w-full text-center"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
