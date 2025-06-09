import { useNavigate } from 'react-router-dom';
import { brand } from '../../assets/assets';
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const {user,logout } = useContext(StoreContext);
    const navigate = useNavigate();
    const logoutFun = () => {
        // setLogined(f);
       const data = logout();
       if (data) {
            navigate('/')

       }
    };

    return (
        <div className="bg-gray-100 border-b border-gray-200">
            {/* Top Bar */}
            <div className="hidden md:flex items-center justify-between container mx-auto px-4 py-2 text-sm">
                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    <p className="text-gray-700 truncate max-w-xs">
                        {!user?'hello@gmail.com':user.email}
                    </p>
                    <p className="text-green-600 font-medium">
                        Free Shipping for all Orders of $99+
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        {[
                            { icon: brand.facebook, alt: "Facebook" },
                            { icon: brand.twitter, alt: "Twitter" },
                            { icon: brand.linkedin, alt: "LinkedIn" },
                            { icon: brand.pinterest, alt: "Pinterest" }
                        ].map((social, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                className="hover:opacity-75 transition-opacity"
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.alt} 
                                    className="w-4 h-4 object-contain"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                            English
                            <svg 
                                className="w-4 h-4 ml-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 9l-7 7-7-7" 
                                />
                            </svg>
                        </button>
                        <div className="hidden group-hover:block absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a>
                        </div>
                    </div>

                    {/* Login/Logout */}
                    <button
                        onClick={logoutFun}
                        className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                    >
                        <img 
                            src={brand.user} 
                            alt="User" 
                            className="w-4 h-4 mr-2"
                        />
                        <span>{user? 'Logout' : 'Login'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile View (optional) */}
            <div className="md:hidden flex items-center justify-between px-4 py-2 text-xs">
                <p className="text-green-600 font-medium">
                    Free Shipping on $99+
                </p>
                <div className="flex items-center space-x-4">
                    <button  
                        onClick={logoutFun}
                        className="flex items-center text-gray-700"
                    >
                        <img 
                            src={brand.user} 
                            alt="User" 
                            className="w-3 h-3 mr-1"
                        />
                        <span>{user? 'Logout' : 'Login'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;