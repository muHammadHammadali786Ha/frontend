import { locationdata } from './loctiondata';

const Location = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {locationdata.map((item) => (
                    <div 
                        key={item.id}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Icon with subtle background */}
                        <div className="mb-4 p-4 bg-gray-50 rounded-full">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        
                        {/* Location Name */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {item.name}
                        </h3>
                        
                        {/* Contact Number */}
                        <p className="text-gray-600 text-sm md:text-base">
                            {item.no}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Location;