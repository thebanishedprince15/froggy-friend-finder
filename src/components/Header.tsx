
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Phone, BookOpen } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AV</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Amphi Vision
            </span>
          </div>
          
          <div className="flex space-x-1 md:space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive("/") 
                  ? "bg-green-100 text-green-700" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive("/about") 
                  ? "bg-green-100 text-green-700" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Info size={18} />
              <span className="hidden sm:inline">About Us</span>
            </Link>
            
            <Link
              to="/contact"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive("/contact") 
                  ? "bg-green-100 text-green-700" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Contact</span>
            </Link>
            
            <Link
              to="/guide"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive("/guide") 
                  ? "bg-green-100 text-green-700" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <BookOpen size={18} />
              <span className="hidden sm:inline">User Guide</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
