import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Street Foods to Try in India",
    description:
      "Discover the most delicious and iconic street foods across Indian cities. From pani puri to vada pav!",
    image: "https://source.unsplash.com/400x300/?street-food,india",
    date: "June 5, 2025",
  },
  {
    id: 2,
    title: "Healthy Eating: Tips from Nutritionists",
    description:
      "Learn how to maintain a balanced diet with expert advice and food combinations.",
    image: "https://source.unsplash.com/400x300/?healthy-food,vegetables",
    date: "May 28, 2025",
  },
  {
    id: 3,
    title: "5 Quick Recipes for Busy Professionals",
    description:
      "Save time and eat well with these 15-minute recipes you can make at home.",
    image: "https://source.unsplash.com/400x300/?fast-food,recipes",
    date: "May 21, 2025",
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Latest Blog Posts
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
                <button className="mt-4 text-orange-600 hover:underline font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
