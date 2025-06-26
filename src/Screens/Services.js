import React from "react";

const services = [
  {
    title: "Fast Delivery",
    description: "Get your food delivered to your doorstep in minutes.",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    title: "Fresh Ingredients",
    description: "We use only fresh and organic ingredients for all dishes.",
    image: "https://cdn-icons-png.flaticon.com/512/4264/4264829.png",
  },
  {
    title: "24/7 Support",
    description: "Have questions? Our support is available anytime.",
    image: "https://cdn-icons-png.flaticon.com/512/3248/3248652.png",
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
