import { data } from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sales = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sale Off</h2>
            
            <div className="relative">
                {/* Sale Badge */}
                <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">
                    20%
                </div>
                
                {/* Carousel */}
                <Slider {...settings} className="px-2">
                    {data.map((item) => (
                        <div key={item.id} className="px-2 focus:outline-none">
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={item.img} 
                                    alt="Sale item" 
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                                    <button className="w-full py-2 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Sales;