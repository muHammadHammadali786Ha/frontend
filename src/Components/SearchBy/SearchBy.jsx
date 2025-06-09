const SearchBy = () => {
  const categories = [
    { name: "Apple", id: 1 },
    { name: "Beauty", id: 2 },
    { name: "Vegetables", id: 3 },
    { name: "Fruit", id: 4 },
    { name: "Healthy Food", id: 5 },
    { name: "Life Style", id: 6 }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Search By</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="bg-gray-50 hover:bg-green-100 text-gray-700 hover:text-green-700 
                      px-4 py-3 rounded-lg text-sm md:text-base font-medium 
                      transition-colors duration-200 border border-gray-200 hover:border-green-300"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBy;