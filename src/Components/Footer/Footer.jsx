import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box6 from "./Box6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
        </div>

        {/* Copyright and Payment Section */}
        <div className="border-t border-gray-200 pt-6">
          <Box6 />
        </div>
      </div>
    </footer>
  );
};

export default Footer;