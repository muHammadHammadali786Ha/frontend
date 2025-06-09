const Box2 = () => {
  const links = [
    "About Us",
    "About Our Shop",
    "Secure Shopping",
    "Delivery Information",
    "Privacy Policy",
    "Our Sitemap"
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Heading */}
      <h6 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2 border-gray-100">
        Useful Links
      </h6>
      
      {/* Links List */}
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <svg 
                className="w-4 h-4 mr-2 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box2;