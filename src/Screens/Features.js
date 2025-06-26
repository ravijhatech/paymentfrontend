import React from "react";

const features = [
  {
    title: "Delicious Meals",
    description: "Enjoy a wide variety of meals crafted by expert chefs.",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    title: "Easy Ordering",
    description: "Order your favorite food with just a few clicks.",
    image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
  },
  {
    title: "Live Order Tracking",
    description: "Track your order in real-time from kitchen to doorstep.",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
  },
  {
    title: "Healthy Options",
    description: "Choose from a range of healthy and organic food choices.",
    image: "https://cdn-icons-png.flaticon.com/512/685/685352.png",
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
