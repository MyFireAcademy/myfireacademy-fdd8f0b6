
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Footer rendering, current path:", location.pathname);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavLinkClick = (e: React.MouseEvent, path: string) => {
    console.log("Footer nav link clicked:", path);
    
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
          console.log(`Scrolling to element with id: ${id}`);
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log(`Element with id ${id} not found`);
        }
      } else {
        e.preventDefault();
        console.log("Navigating to:", path);
        navigate(path);
      }
    }
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-10 lg:mb-0 lg:max-w-xs">
            <Link to="/" className="text-2xl font-bold flex items-center mb-6">
              <span className="text-fire-500">My</span>FireAcademy
            </Link>
            <p className="text-gray-400 mb-6">
              Helping firefighters achieve certification with comprehensive study materials and a 100% pass guarantee.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={(e) => handleNavLinkClick(e, '/#features')}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavLinkClick(e, '/#guarantee')}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Guarantee
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavLinkClick(e, '/#testimonials')}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavLinkClick(e, '/#pricing')}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Buy Now
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/new-to-firefighting" 
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => console.log("Footer: Navigating to /new-to-firefighting")}
                  >
                    New To Firefighting
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="mailto:MyFireAcademy@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <button
                onClick={scrollToTop}
                className="bg-navy-800 hover:bg-navy-700 text-white rounded-full p-3 float-right transition-all hover:shadow-lg ease-apple hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MyFireAcademy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
