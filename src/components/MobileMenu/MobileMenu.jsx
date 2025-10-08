import React, { useState } from "react";
import logo from "/Logo.svg";
import { LocationSheet } from "../Sheets/LocationSheet";
import { AuthSheet } from "../Sheets/AuthSheet";
import { RiCloseLargeLine } from "react-icons/ri";

const MobileMenu = ({ onClose, authState, setAuthState }) => {
  const [showLocation, setShowLocation] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
      ></div>

      {/* SIDE MENU */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-2 overflow-y-auto animate-slideIn">
        {/* LOGO */}
        <div className="flex items-center mb-6 justify-between">
          <img src={logo} alt="CityScript" className="h-10 px-2" />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <RiCloseLargeLine className="font-extrabold text-2xl" />
          </button>
        </div>

        {/* LOCATION SECTION */}
        <div
          onClick={() => setShowLocation(true)}
          className="flex items-center px-2 mt-2 pb-2 border-b border-gray-300 cursor-pointer"
        >
          <i className="mdi mdi-map-marker text-[#5b47e0] text-2xl mr-2"></i>
          <div className="flex items-end">
            <span className="mr-1 font-bold text-lg leading-tight text-gray-700 capitalize">
              India
            </span>
            <span className="ml-2 text-[#5b47e0] font-bold text-xs">
              Change
            </span>
          </div>
        </div>

        {/* USER / AUTH SECTION */}
        <div className="user-menu mt-4">
          {!authState ? (
            // 🔹 Not logged in → Show Login / Signup prompt
            <div
              onClick={() => setShowAuth(true)}
              className="px-2 py-3 border-b border-gray-300 cursor-pointer"
            >
              <div className="leading-tight">
                <span className="block text-lg text-gray-800">
                  Login / Signup
                </span>
                <span className="text-xs text-gray-500">
                  To personalize your experience!
                </span>
              </div>
            </div>
          ) : (
            // 🔹 Logged in → Full expanded user panel (no dropdown)
            <div className="px-2 cursor-pointer">
              {/* Profile Section */}
              <a href="https://www.townscript.com/dashboard/settings/my-profile">
                <div className="flex items-center border-b py-2 border-gray-300">
                  <div className="mr-1 leading-none">
                    <img
                      width="45"
                      className="rounded-full mr-2"
                      src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/e6363d34-a824-4f73-af1b-ddbd980fde61.jpg"
                      alt="User"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-lg text-gray-800">Saurav</span>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      View and edit profile
                    </span>
                  </div>
                </div>
              </a>

              {/* Organizing Events */}
              <div className="menu mt-2 px-1">
                <div className="px-1 py-2 flex items-center border-b border-gray-300 justify-between border-dashed">
                  <span className="text-gray-700">Organizing Events</span>
                  <i className="mdi mdi-chevron-down text-2xl text-primary rotate-180"></i>
                </div>
                <div className="text-sm text-gray-800">
                  <a
                    href="https://www.townscript.com/dashboard/v2/events?showMobileMessage=true"
                    className="flex items-center px-1 py-1"
                  >
                    <i className="mdi mdi-calendar-today mr-2 text-primary text-xl"></i>
                    Manage Events
                  </a>
                  <a
                    href="https://www.townscript.com/dashboard/v2/billing?showMobileMessage=true"
                    className="flex items-center px-1 py-1"
                  >
                    <i className="mdi mdi-cash mr-2 text-primary text-xl"></i>
                    Billing
                  </a>
                  <a
                    href="https://www.townscript.com/dashboard/reports?showMobileMessage=true"
                    className="flex items-center px-1 py-1"
                  >
                    <i className="mdi mdi-chart-line mr-2 text-primary text-xl"></i>
                    Reports
                  </a>
                  <a
                    href="https://www.townscript.com/dashboard/promo?showMobileMessage=true"
                    className="flex items-center px-1 py-1 border-b border-gray-300"
                  >
                    <i className="mdi mdi-bullhorn mr-2 text-primary text-xl"></i>
                    Promotions
                  </a>
                </div>

                {/* Attending Events */}
                <div className="px-1 py-2 flex items-center border-b border-gray-300 justify-between border-dashed">
                  <span className="text-gray-700">Attending Events</span>
                  <i className="mdi mdi-chevron-down text-2xl text-primary rotate-180"></i>
                </div>
                <div className="text-sm text-gray-800">
                  <a
                    href="https://www.townscript.com/dashboard/mybookings"
                    className="flex items-center px-1 py-1"
                  >
                    <i className="mdi mdi-ticket-account mr-2 text-primary text-xl"></i>
                    My Bookings
                  </a>
                  <a
                    href="https://www.townscript.com/dashboard/following"
                    className="flex items-center px-1 py-1 border-b border-gray-300"
                  >
                    <i className="mdi mdi-heart mr-2 text-primary text-xl"></i>
                    Following
                  </a>
                </div>

                {/* Logout */}
                <div
                  onClick={() => setAuthState(false)}
                  className="px-1 py-2 flex items-center justify-between cursor-pointer"
                >
                  <span className="text-gray-700">Logout</span>
                  <i className="mdi mdi-logout-variant text-2xl text-primary"></i>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SHEETS */}
      {showLocation && <LocationSheet onBack={() => setShowLocation(false)} />}
      {showAuth && (
        <AuthSheet
          onBack={() => setShowAuth(false)}
          onLogin={() => {
            setAuthState(true);
            setShowAuth(false);
          }}
        />
      )}
    </>
  );
};

export default MobileMenu;


// MobileMenuTest.jsx
// MobileMenu.jsx
// import React from "react";

// const MobileMenu = ({ onClose }) => {
//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/40 z-40"
//         onClick={onClose}
//       ></div>

//       {/* Menu */}
//       <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-4 flex flex-col gap-4 overflow-y-auto">
//         <h1 className="text-2xl font-bold">Mobile Menu</h1>
//         <div className="bg-gray-200 p-2 rounded">Menu Item 1</div>
//         <div className="bg-gray-200 p-2 rounded">Menu Item 2</div>
//         <div className="bg-gray-200 p-2 rounded">Menu Item 3</div>
//         <button
//           onClick={onClose}
//           className="mt-auto px-4 py-2 bg-purple-600 text-white rounded"
//         >
//           Close Menu
//         </button>
//       </div>
//     </>
//   );
// };

// export default MobileMenu;

