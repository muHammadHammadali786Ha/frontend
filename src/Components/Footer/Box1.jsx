import { brand } from "../../assets/assets";

const Box1 = () => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 max-w-xs">
      {/* Logo */}
      <img 
        src={brand.logo} 
        className="w-36 h-auto mb-2" 
        alt="Company Logo" 
        loading="lazy"
      />
      
      {/* Contact Information */}
      <div className="space-y-3">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-600">60-49 Road 11378 New York</p>
        </div>
        
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-gray-600">+65 11.188.888</p>
        </div>
        
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:hello@colorlib.com" className="text-gray-600 hover:text-blue-500 transition-colors">hello@colorlib.com</a>
        </div>
      </div>
    </div>
  );
};

export default Box1;