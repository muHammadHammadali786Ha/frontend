import { Link } from "react-router-dom";
import { brand } from "../../assets/assets";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Main Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo-side">
            <Link to="/">
              <img 
                src={brand.logo} 
                alt="Brand Logo" 
                className="h-10 md:h-12 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/home", name: "Home" },
              { path: "/shop", name: "Shop" },
              { path: "/page", name: "Pages" },
              { path: "/blog", name: "Blog" },
              { path: "/contact", name: "Contact" }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col justify-center items-center w-8 h-8">
            <span className="block w-6 h-0.5 bg-gray-700 mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>

          {/* Shopping Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={brand.heart} 
                  alt="Wishlist" 
                  className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              
              <div className="relative">
                <img 
                  src={brand.bag} 
                  alt="Shopping Bag" 
                  className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
            
            <div className="hidden lg:block border-l border-gray-200 h-6 mx-2"></div>
            
            <div className="hidden lg:block text-sm text-gray-600">
              Item: <span className="font-bold text-gray-800">$150.00</span>
            </div>
          </div>
        </div>

        {/* Shopping Icons - Mobile (shown only on mobile) */}
        <div className="md:hidden flex justify-center items-center mt-4 space-x-6">
          <div className="relative">
            <img 
              src={brand.heart} 
              alt="Wishlist" 
              className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
          
          <div className="relative">
            <img 
              src={brand.bag} 
              alt="Shopping Bag" 
              className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          
          <div className="text-sm text-gray-600">
            Item: <span className="font-bold text-gray-800">$150.00</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;