import payment from '../png/payment.png';

const Box5 = () => {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright Text */}
        <div className="text-center md:text-left">
          <p className="text-gray-600 text-sm">
            Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center md:justify-end">
          <img 
            src={payment} 
            alt="Accepted payment methods" 
            className="h-8 object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Box5;