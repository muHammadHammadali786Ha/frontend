const Box3 = () => {
  const menuItems = [
    "Who We Are",
    "Our Services",
    "Projects",
    "Contact",
    "Innovation",
    "Testimonials"
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Heading */}
      <h6 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2 border-gray-100">
        Quick Links
      </h6>
      
      {/* Menu Items */}
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a 
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box3;