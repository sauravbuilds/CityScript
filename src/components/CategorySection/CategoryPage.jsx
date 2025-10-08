import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, Grid3x3, List, ChevronDown } from "lucide-react";
import { eventsData } from "../../Utils/MockData.js";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [sortBy] = useState("date");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterDate, setFilterDate] = useState("all"); // 🆕 new filter
  const [viewType, setViewType] = useState("grid");
  const [liked, setLiked] = useState(new Set());

  // ✅ Mock event data with proper dates (ISO format)

  const events = eventsData[category] || [];

  // 🧠 Date filter helper
  const filterByDate = (events, filterType) => {
    if (filterType === "all") return events;

    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const endOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const startOfTomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const endOfTomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2
    );
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return events.filter((event) => {
      const eventDate = new Date(event.date);
      switch (filterType) {
        case "today":
          return eventDate >= startOfToday && eventDate < endOfToday;
        case "tomorrow":
          return eventDate >= startOfTomorrow && eventDate < endOfTomorrow;
        case "this-week":
          return eventDate >= startOfWeek && eventDate < endOfWeek;
        case "this-month":
          return eventDate >= startOfMonth && eventDate <= endOfMonth;
        default:
          return true;
      }
    });
  };

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Price filter
    if (filterPrice !== "all") {
      if (filterPrice === "free")
        filtered = filtered.filter((e) => e.priceNum === 0);
      else if (filterPrice === "paid")
        filtered = filtered.filter((e) => e.priceNum > 0);
    }

    // Date filter 🆕
    filtered = filterByDate(filtered, filterDate);

    // Sorting
    if (sortBy === "price-low")
      filtered.sort((a, b) => a.priceNum - b.priceNum);
    else if (sortBy === "price-high")
      filtered.sort((a, b) => b.priceNum - a.priceNum);

    return filtered;
  }, [sortBy, filterPrice, filterDate, events]);

  const toggleLike = (id) => {
    const newLiked = new Set(liked);
    if (newLiked.has(id)) newLiked.delete(id);
    else newLiked.add(id);
    setLiked(newLiked);
  };

  const categoryName = category.replace("-", " ").toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Online {categoryName} Events In India
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-lg transition ${
                    viewType === "grid"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-lg transition ${
                    viewType === "list"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-gray-600 text-sm font-medium">
                Filter by
              </span>

              {/* Date Filter 🆕 */}
              <div className="relative">
                <select
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="appearance-none bg-white border border-purple-300 rounded-lg px-4 py-2 pr-8 text-purple-600 font-medium cursor-pointer hover:border-purple-500 transition"
                >
                  <option value="all">📆 All Dates</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
                  size={18}
                />
              </div>

              {/* Sort Filter */}
              {/* <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-purple-300 rounded-lg px-4 py-2 pr-8 text-purple-600 font-medium cursor-pointer hover:border-purple-500 transition"
                >
                  <option value="date">📅 Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
                  size={18}
                />
              </div> */}

              {/* Price Filter */}
              <div className="relative">
                <select
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                  className="appearance-none bg-white border border-purple-300 rounded-lg px-4 py-2 pr-8 text-purple-600 font-medium cursor-pointer hover:border-purple-500 transition"
                >
                  <option value="all">💰 All Prices</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
                  size={18}
                />
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-gray-600 text-sm">
                  showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredEvents.length}
                  </span>{" "}
                  results for
                </span>
                <div className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                  <Heart size={16} />
                  {categoryName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No events found for this category.
            </p>
          </div>
        ) : (
          <div
            className={
              viewType === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {event.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}

                  <div className="absolute top-3 left-3 flex gap-2">
                    <button
                      onClick={() => toggleLike(event.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition ${
                        liked.has(event.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-700 hover:bg-white"
                      }`}
                    >
                      <Heart
                        size={20}
                        fill={liked.has(event.id) ? "currentColor" : "none"}
                      />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white transition">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-1">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{event.dates}</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span
                      className={`text-lg font-bold ${
                        event.priceNum === 0
                          ? "text-purple-600"
                          : "text-gray-900"
                      }`}
                    >
                      {event.price}
                    </span>
                    <button   onClick={() => navigate(`/category/${category}/${event.id}`)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
