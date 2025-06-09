import { blogData } from "./blogData";

const Blog = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">From The Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the latest news, tips, and insights from our team</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="overflow-hidden">
                <img 
                  src={post.imge} 
                  alt={post.title} 
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.desc}</p>
                
                {/* Read More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Read more
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
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (Optional) */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;