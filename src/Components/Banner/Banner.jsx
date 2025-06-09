import banner1 from './banner-1.jpg';
import banner2 from './banner-2.jpg';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* First Banner */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src={banner1} 
            alt="Promotional banner 1" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">Summer Collection</h3>
              <p className="text-sm opacity-90">Up to 50% off</p>
              <button className="mt-3 px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src={banner2} 
            alt="Promotional banner 2" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">New Arrivals</h3>
              <p className="text-sm opacity-90">Fresh styles for the season</p>
              <button className="mt-3 px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;