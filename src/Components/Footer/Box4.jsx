import { brand } from "../../assets/assets";

const Box4 = () => {
  const socialIcons = [
    { icon: brand.facebook, alt: "Facebook", size: "w-4" },
    { icon: brand.instagram, alt: "Instagram", size: "w-5" },
    { icon: brand.twitter, alt: "Twitter", size: "w-5" },
    { icon: brand.pinterest, alt: "Pinterest", size: "w-4" }
  ];

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-sm">
      {/* Newsletter Section */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800">Join Our Newsletter Now</h3>
        <p className="text-gray-600">Get E-mail updates about our latest shop and special offers.</p>
      </div>

      {/* Email Subscription */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all duration-200">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="flex-grow py-3 px-4 text-gray-700 focus:outline-none"
          aria-label="Email address"
        />
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium transition-colors duration-300 whitespace-nowrap">
          Subscribe
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm hover:bg-green-600 hover:text-white transition-colors duration-300 border border-gray-200"
            aria-label={social.alt}
          >
            <img
              src={social.icon}
              alt={social.alt}
              className={`${social.size} h-auto transition-filter duration-300 hover:brightness-0 hover:invert`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Box4;