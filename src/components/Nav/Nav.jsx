import React, { useState } from "react";
import logo from "/Logo-transparent.png";
import CreateEventButton from "../CreateEventButton/CreateEventButton";
import OnlineDropdown from "../OnlineDropDown/OnlineDropdown";
import AuthLinks from "../AuthLinks/AuthLinks";
import MobileMenu from "../MobileMenu/MobileMenu";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdArrowBack } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { UserMenu } from "../AuthLinks/LoggedInUserMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const cityCountryData = [
    { city: "New York", country: "USA" },
    { city: "London", country: "UK" },
    { city: "Paris", country: "France" },
    { city: "Berlin", country: "Germany" },
    { city: "Tokyo", country: "Japan" },
    { city: "Delhi", country: "India" },
    { city: "Sydney", country: "Australia" },
    { city: "Toronto", country: "Canada" },
  ];

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = cityCountryData.filter(
        (item) =>
          item.city.toLowerCase().includes(value.toLowerCase()) ||
          item.country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city, country) => {
    setQuery(`${city}, ${country}`);
    setSuggestions([]);
  };

  // Centralized auth state
  const [authState, setAuthState] = useState(true); // false = logged out

  return (
    <>
      <nav className="w-full bg-white/50 backdrop-blur-lg shadow-sm px-4 sm:px-6 lg:px-10 flex items-center justify-between py-3 fixed z-30">
        {/* LEFT SECTION */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="block lg:hidden text-[#5b47e0] focus:outline-none"
          >
            <CgMenuLeft className="text-2xl font-extrabold" />
          </button>

          <a href="/">
            <img src={logo} alt="CityScript" className="h-8 sm:h-12" />
          </a>
        </div>

        {/* MOBILE SEARCH ICON */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="text-[#5b47e0]"
          >
            <MdSearch className="text-2xl" />
          </button>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 justify-center px-4 relative">
          <div className="relative w-1/2 max-w-xl">
            <input
              type="text"
              placeholder="Search for events, interests or activities"
              value={query}
              onChange={handleChange}
              className="w-full rounded-full border border-black px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b47e0]"
            />
            <MdSearch className="absolute left-3 top-2.5 text-[#5b47e0]" />

            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(item.city, item.country)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#f0f0f0]"
                  >
                    {item.city}, {item.country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <OnlineDropdown />
        </div>

        {/* RIGHT SECTION (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <CreateEventButton />
          {authState ? (
            <UserMenu onLogout={() => setAuthState(false)} />
          ) : (
            <AuthLinks onLogin={() => setAuthState(true)} />
          )}
        </div>

        {/* MOBILE SEARCH OVERLAY */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-gray-200 z-50 p-2 transform transition-transform duration-300 ease-in-out ${
            mobileSearchOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="shadow-md py-2 mb-2 bg-white flex items-center px-2 rounded-md">
            <button
              onClick={() => setMobileSearchOpen(false)}
              className="text-[#5b47e0] mr-2 text-2xl"
            >
              <IoMdArrowBack />
            </button>

            <input
              type="text"
              placeholder="Search for events, interests or activities"
              autoFocus
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-grow text-gray-800 text-md pl-2 py-1 rounded focus:outline-none"
            />
            <MdSearch className="text-[#5b47e0] text-2xl ml-2" />
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE SHEET - Moved OUTSIDE <nav> */}
      {menuOpen && (
        <MobileMenu
          onClose={() => setMenuOpen(false)}
          authState={authState}
          setAuthState={setAuthState}
        />
      )}
    </>
  );
};

export default Navbar;
