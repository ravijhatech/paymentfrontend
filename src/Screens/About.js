import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image Section */}
        <div className="w-full h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <span className="font-semibold text-indigo-600">Food Market</span> – your go-to app for discovering and ordering delicious food.
          </p>
          <p className="text-gray-600">
            From local street eats to premium restaurants, Food Market brings food to your fingertips with fast, easy, and secure delivery. Your cravings, our mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;