import payment from './payment-item.png';

const Box6 = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright Text */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          Copyright ©2024 All rights reserved | This template is made with 
          <span className="text-red-500 mx-1">❤</span> 
          by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Colorlib</a>
        </p>

        {/* Payment Methods */}
        <div className="flex-shrink-0">
          <img 
            src={payment} 
            alt="Accepted payment methods: Visa, Mastercard, American Express, etc." 
            className="h-8 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Box6;