import React from "react";

const blogs = [
  {
    title: "The Evolution of Sports Cars",
    description:
      "Sports cars have evolved drastically over the years, blending high performance with cutting-edge technology. Discover how legendary models have shaped the industry.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Top 5 Off-Road Vehicles in 2024",
    description:
      "If you're an adventure seeker, having the right off-road vehicle is crucial. Here are the top 5 off-road beasts to conquer any terrain this year.",
    image:
      "https://images.unsplash.com/photo-1533127321739-d5dc53c221c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Electric vs. Gasoline Cars: Which One Wins?",
    description:
      "With electric cars taking over, are gasoline vehicles becoming obsolete? We compare performance, cost, and sustainability to help you decide.",
    image:
      "https://plus.unsplash.com/premium_photo-1714672716183-c717a99f857f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Future of Hypercars: What's Next?",
    description:
      "Hypercars push the limits of speed and design. But what does the future hold? We explore the next generation of hypercar technology.",
    image:
      "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Evolution of Sports Cars",
    description:
      "Sports cars have evolved drastically over the years, blending high performance with cutting-edge technology. Discover how legendary models have shaped the industry.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CarBlogs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-black text-white text-center py-10">
        <p className="text-3xl md:text-4xl font-bold">Latest Car Blogs 🚗</p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-3"
          >
            {/* Blog Image */}
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 cursor-pointer"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <p className="text-2xl font-semibold mb-2">{blog.title}</p>
              <p className="text-gray-700 mb-2 text-justify">
                {blog.description}
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded transition-all duration-300 hover:bg-red-500 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBlogs;
