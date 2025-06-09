import { contentData } from "./contentData";
import calender from './images/calendar.svg';

const Content = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {contentData.map((item) => (
                    <article 
                        key={item.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Date */}
                            <div className="flex items-center text-gray-500 mb-3">
                                <img 
                                    src={calender} 
                                    alt="Calendar" 
                                    className="w-4 h-4 mr-2"
                                />
                                <span className="text-sm">{item.datee}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {item.desc}
                            </p>

                            {/* Read More Button */}
                            <button className="inline-flex items-center px-6 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                                Read More
                                <svg 
                                    className="w-4 h-4 ml-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                    />
                                </svg>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Content;