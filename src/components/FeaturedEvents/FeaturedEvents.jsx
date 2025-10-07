import React, { useState, useEffect } from "react";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const events = [
    {
      id: "IFPseason15",
      title: "IFP Challenges Season 15",
      image:
        "https://ts-production.imgix.net/images/mobile-cover-uploaded/81121aca-8ff0-4d27-92e5-36372f41aff4.jpg?auto=compress,format&w=776&h=437",
    },
    {
      id: "testflix-2025-registration",
      title: "Testflix 2025 - Global Software Testing Binge",
      image:
        "https://ts-production.imgix.net/images/mobile-cover-uploaded/a8b4b587-dd0d-4b86-8469-60651a72be15.jpg?auto=compress,format&w=776&h=437",
    },
    {
      id: "abcr-7-wonders-virtual-marathon-041014",
      title: "ABCR - 7 Wonders Virtual Marathon",
      image:
        "https://ts-production.imgix.net/images/mobile-cover-uploaded/56966312-f3a2-4021-a722-c0a158026658.jpg?auto=compress,format&w=776&h=437",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % events.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const getPosition = (index) => {
    const diff = (index - currentIndex + events.length) % events.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <div className="featured-container border-0 border-gray-200 py-4">
      {/* Mobile Swipe View with Animation */}
      <div
        className="md:hidden cursor-pointer relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="swipe-wrap relative h-56">
          {events.map((event, index) => {
            const position = getPosition(index);

            return (
              <div
                key={event.id}
                className={`card absolute w-full transition-all duration-500 ease-in-out ${
                  position === "center"
                    ? "left-0 opacity-100 z-10 scale-100"
                    : position === "right"
                    ? "left-full opacity-0 z-0 scale-90"
                    : "-left-full opacity-0 z-0 scale-90"
                }`}
              >
                <a href={`/e/${event.id}`}>
                  <img
                    className="event-image w-full rounded-lg shadow-lg"
                    alt={event.title}
                    title={event.title}
                    src={event.image}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Carousel with Animation */}
      <div className="hidden md:flex relative carousel">
        {/* Left Gradient */}
        <div className="h-full w-2/12 absolute left-0 top-0 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        {/* Carousel Items */}
        <ul className="flex relative w-full overflow-hidden h-64">
          {events.map((event, index) => {
            const position = getPosition(index);

            return (
              <li
                key={event.id}
                className={`md:w-1/3 my-4 absolute transition-all duration-500 ease-in-out ${
                  position === "center"
                    ? "left-1/2 -translate-x-1/2 z-20 scale-110 shadow-2xl"
                    : position === "right"
                    ? "right-0 translate-x-8 z-10 scale-90 opacity-70"
                    : "left-0 -translate-x-8 z-10 scale-90 opacity-70"
                } top-1/2 -translate-y-1/2`}
              >
                <a href={`/e/${event.id}`}>
                  <img
                    className="w-full md:rounded transition-transform duration-500 hover:scale-105"
                    alt={event.title}
                    title={event.title}
                    src={event.image}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Gradient */}
        <div className="h-full w-2/12 absolute right-0 top-0 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

        {/* Desktop Navigation Arrows */}
      </div>

      {/* Navigation Dots */}
      <div className="card-next-menu cursor-default flex justify-center text-center my-4 md:mb-6">
        <div className="flex items-center">
          {events.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`block w-6 md:w-12 h-1 rounded cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-600 w-8 md:w-16"
                  : "bg-gray-300 hover:bg-gray-400"
              } ${index !== 0 ? "ml-2" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
