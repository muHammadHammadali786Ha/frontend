import { data } from "./data";

const Feature = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Products
      </h2>
      
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'Oranges', 'Fresh Meat', 'Vegetables', 'FastFood'].map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full font-medium text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="p-4">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-orange-500 font-bold text-xl">${item.price}</p>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-md">
          View More Products
        </button>
      </div>
    </div>
  );
};

export default Feature;