import React, { useState, useRef, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const LocationDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Online");
  const [locations, setLocations] = useState([
    "Online",
    "Mumbai",
    "Bengaluru",
    "Delhi",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
  ]);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect user location
  useEffect(() => {
    if (!navigator.geolocation) return; // Geolocation not supported
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use OpenStreetMap Nominatim API for reverse geocoding
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const city =
            data.address.city || data.address.town || data.address.village;
          const country = data.address.country;

          const detectedLocation = city ? `${city}` : country;

          // Add to locations list if not already there
          if (detectedLocation && !locations.includes(detectedLocation)) {
            setLocations((prev) => [detectedLocation, ...prev]);
          }

          if (detectedLocation) setSelected(detectedLocation);
        } catch (err) {
          console.error("Failed to detect location", err);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center py-2 px-4 cursor-pointer w-auto city-search-container"
      onClick={() => setOpen((prev) => !prev)}
    >
      {/* Left section: Icon + Text */}
      <div className="flex items-center w-10/12 gap-1" title={selected}>
        <BiWorld className="text-xl text-blue-700" />
        <span className="truncate capitalize text-gray-800 text-sm md:text-base">
          {selected}
        </span>
      </div>

      {/* Dropdown Arrow */}
      <FaCaretDown className="mt-1 ml-1" />

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full right-0 mt-2 w-48 md:w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 overflow-y-auto max-h-64">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setSelected(loc);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm md:text-base transition ${
                selected === loc
                  ? "bg-[#f2efff] text-[#5b47e0] font-semibold"
                  : "hover:bg-gray-50 text-gray-800"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
