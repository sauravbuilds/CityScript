import React, { useRef, useMemo } from "react";
import { MdArrowForward, MdShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../Utils/MockData.js"; // adjust path if needed

const EventStrip = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Build a title -> {category, id} index from eventsData
  const titleIndex = useMemo(() => {
    const normalize = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
    const idx = {};
    Object.entries(eventsData).forEach(([cat, list]) => {
      list.forEach((e) => {
        idx[normalize(e.title)] = { category: cat, id: e.id };
      });
    });
    return idx;
  }, []);

  // Manual mapping for titles not present in eventsData yet
  const manualMap = useMemo(
    () => ({
      "ifp challenges season 15": { category: "must-visit", id: 1 },
      "testflix 2025 - global software testing binge": {
        // Update this once you add Testflix into eventsData
        category: "must-visit",
        id: 101,
      },
    }),
    []
  );

  const openEvent = (card) => {
    const key = card.title?.toLowerCase().replace(/\s+/g, " ").trim();
    const route = titleIndex[key] || manualMap[key];
    if (route) {
      navigate(`/category/${route.category}/${route.id}`);
    } else {
      // final fallback if no mapping found
      navigate("/categories");
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const events = [
    {
      title: "IFP Challenges Season 15",
      date: "May 07 - Oct 15",
      price: "₹499",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/81121aca-8ff0-4d27-92e5-36372f41aff4.jpg?auto=compress,format&w=375&h=200",
      isFree: false,
      isOnline: true,
    },
    {
      title: "Testflix 2025 - Global Software Testing Binge",
      date: "Oct 10 - 11",
      price: "Free",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/a8b4b587-dd0d-4b86-8469-60651a72be15.jpg?auto=compress,format&w=375&h=200",
      isFree: true,
      isOnline: true,
    },
    {
      title: "IFP Challenges Season 15",
      date: "May 07 - Oct 15",
      price: "₹499",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/81121aca-8ff0-4d27-92e5-36372f41aff4.jpg?auto=compress,format&w=375&h=200",
      isFree: false,
      isOnline: true,
    },
    {
      title: "Testflix 2025 - Global Software Testing Binge",
      date: "Oct 10 - 11",
      price: "Free",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/a8b4b587-dd0d-4b86-8469-60651a72be15.jpg?auto=compress,format&w=375&h=200",
      isFree: true,
      isOnline: true,
    },
    {
      title: "IFP Challenges Season 15",
      date: "May 07 - Oct 15",
      price: "₹499",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/81121aca-8ff0-4d27-92e5-36372f41aff4.jpg?auto=compress,format&w=375&h=200",
      isFree: false,
      isOnline: true,
    },
    {
      title: "Testflix 2025 - Global Software Testing Binge",
      date: "Oct 10 - 11",
      price: "Free",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/a8b4b587-dd0d-4b86-8469-60651a72be15.jpg?auto=compress,format&w=375&h=200",
      isFree: true,
      isOnline: true,
    },
    {
      title: "IFP Challenges Season 15",
      date: "May 07 - Oct 15",
      price: "₹499",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/81121aca-8ff0-4d27-92e5-36372f41aff4.jpg?auto=compress,format&w=375&h=200",
      isFree: false,
      isOnline: true,
    },
    {
      title: "Testflix 2025 - Global Software Testing Binge",
      date: "Oct 10 - 11",
      price: "Free",
      type: "Online",
      img: "https://ts-production.imgix.net/images/mobile-cover-uploaded/a8b4b587-dd0d-4b86-8469-60651a72be15.jpg?auto=compress,format&w=375&h=200",
      isFree: true,
      isOnline: true,
    },
  ];

  return (
    <div className="event-strip-container lg:flex overflow-hidden p-4 relative">
      {/* Left Section */}
      <div className="lg:w-1/6 mb-4 flex flex-col relative justify-between">
        <a href="/in/online/this-week" className="w-full">
          <h2 className="text-2xl text-gray-900 font-semibold lg:block hidden">
            Online Events
            <span className="block text-purple-800 text-lg">
              Happening this week
            </span>
          </h2>

          <h2 className="text-xl text-gray-900 lg:hidden">
            <div className="flex items-center justify-between">
              <span className="font-bold">Online Events</span>
              <span className="text-purple-800 text-base">View All</span>
            </div>
          </h2>
        </a>

        <div className="mt-4 flex items-center view-all cursor-pointer justify-between">
          <a
            href="/in/online/this-week"
            target="_blank"
            className="w-full flex items-center justify-start z-50"
          >
            <span className="mr-4 text-lg">VIEW ALL</span>
            <div className="icon flex items-center justify-center rounded-full h-12 w-12 bg-[#3D2D96] text-white lg:ml-12">
              <MdArrowForward className="text-2xl" />
            </div>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-5/6 relative -mt-10">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 flex items-center px-3 py-2 rounded-full bg-zinc-300/50 hover:bg-zinc-100 shadow transition-transform duration-300 "
        >
          <MdArrowForward className="text-purple-800 text-2xl rotate-180" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-3 py-2 rounded-full bg-zinc-300/50 hover:bg-zinc-100 shadow transition-transform duration-300 "
        >
          <MdArrowForward className="text-purple-800 text-2xl" />
        </button>

        {/* Scrollable Event Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pl-4 sm:pl-8 md:pl-12 pr-4 sm:pr-8 md:pr-12 pt-10 pb-2 hide-scroll relative"
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => openEvent(event)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openEvent(event);
              }}
              className="group overflow-hidden border border-gray-200 hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-4 flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] rounded-lg bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="   flex items-center justify-center "
                  >
                    <FaRegHeart className="h-6 w-6 text-white " />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="  flex items-center justify-center "
                  >
                    <MdShare className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500">{event.date}</p>

                <div className="flex items-center justify-between pt-2">
                  <span
                    className={`font-semibold ${
                      event.isFree ? "text-green-600" : "text-gray-900"
                    }`}
                  >
                    {event.price}
                  </span>
                  {event.isOnline && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      ONLINE
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbars */}
      <style jsx>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default EventStrip;