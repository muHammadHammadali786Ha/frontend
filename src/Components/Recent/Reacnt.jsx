import { reacntData } from './reacntData';

const Reacnt = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
            <div className="space-y-4">
                {reacntData.map((item) => (
                    <div 
                        key={item.id}
                        className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                        {/* Image */}
                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                            <img 
                                src={item.img} 
                                alt={item.desc} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 line-clamp-2">
                                {item.desc}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {item.datee}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reacnt;