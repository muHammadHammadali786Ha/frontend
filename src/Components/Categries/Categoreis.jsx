const Categories = () => {
  const categories = [
    { name: "All", count: null },
    { name: "Beauty", count: 20 },
    { name: "Food", count: 4 },
    { name: "Life Style", count: 6 },
    { name: "Travel", count: 4 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
        Categories
      </h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-gray-700 group-hover:text-green-600">
                {category.name}
              </span>
              {category.count && (
                <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-800">
                  {category.count}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;