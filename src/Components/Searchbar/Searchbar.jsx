const Searchbar = () => {
  return (
    <div className="relative max-w-md mx-auto my-8">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 pl-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all duration-200"
        />
        <button className="absolute right-3 p-2 text-gray-500 hover:text-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;