import React, { useState } from "react";
import { IoMdArrowBack, IoMdLocate } from "react-icons/io";

export const LocationSheet = ({ onBack }) => {
  const [search, setSearch] = useState("");

  const popularCities = [
    { name: "Bengaluru", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Bengaluru.png" },
    { name: "Chennai", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Chennai.jpg" },
    { name: "Delhi", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Delhi.png" },
    { name: "Hyderabad", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Hyderabad.jpg" },
    { name: "Mumbai", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Mumbai.png" },
    { name: "Pune", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Pune.jpg" },
    { name: "Ahmedabad", image: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/Marketplace/popular-cities/Ahmedabad.jpg" },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:items-center justify-center mb-6">
        <div className="flex items-center w-full mb-2">
          <button onClick={onBack} className="text-gray-700 text-2xl md:hidden mr-2">
            <IoMdArrowBack />
          </button>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Select Your City
          </h2>
        </div>
        <p className="text-xs md:text-sm text-gray-600 md:text-center">
          Knowing your city helps us define your experience better
        </p>
      </div>

      {/* Search + Detect Location */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full md:w-2/5">
          <input
            type="text"
            placeholder="Search for a city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="flex items-center ml-2 px-3 py-2 bg-gray-100 rounded-md text-gray-800 text-xs md:text-sm">
          <IoMdLocate className="mr-1 text-primary" /> Detect Location
        </button>
      </div>

      {/* Popular Cities */}
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold md:text-center py-4 text-gray-800">
          Popular Cities in India
        </h3>
        <div className="flex flex-wrap justify-between md:justify-around">
          {popularCities.map((city) => (
            <a key={city.name} href={`in/${city.name.toLowerCase()}`} className="flex-auto p-2 md:mx-2 cursor-pointer w-24">
              <div className="flex flex-col items-center justify-center">
                <div className="h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full mb-2">
  <div
    className="city-image h-full w-full"
    style={{ backgroundImage: `url(${city.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  ></div>
</div>

                <span className="text-sm md:text-base text-gray-800 whitespace-nowrap">{city.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
