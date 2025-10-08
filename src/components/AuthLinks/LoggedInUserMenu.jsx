import React, { useState } from "react";
import {
  MdCalendarToday,
  MdAttachMoney,
  MdShowChart,
  MdCampaign,
  MdConfirmationNumber,
  MdFavorite,
  MdLogout,
  MdKeyboardArrowDown,
} from "react-icons/md";

export const UserMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [organizingOpen, setOrganizingOpen] = useState(true);
  const [attendingOpen, setAttendingOpen] = useState(true);

  return (
    <div className="relative select-none">
      {/* User Button */}
      <div
        className="flex items-center cursor-pointer px-2 py-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          width={36}
          className="rounded-full mr-2"
          src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/e6363d34-a824-4f73-af1b-ddbd980fde61.jpg"
          alt="User"
        />
        <MdKeyboardArrowDown
          className={`text-xl text-gray-700 transition-transform ${
            menuOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg w-64 py-2 z-50">
          {/* User Info */}
          <a
            href="/settings/my-profile"
            target="_blank"
            className="block px-4 py-2 border-b border-gray-300"
          >
            <div className="flex items-center">
              <img
                width={45}
                className="rounded-full mr-2"
                src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/e6363d34-a824-4f73-af1b-ddbd980fde61.jpg"
                alt="User"
              />
              <div>
                <span className="block text-lg text-gray-800">Saurav</span>
                <span className="text-xs text-gray-600 whitespace-nowrap">
                  View and edit profile
                </span>
              </div>
            </div>
          </a>

          {/* Organizing Events Panel */}
          <div className="px-1 mt-2">
            <div
              className="flex items-center justify-between px-1 py-2 border-b border-gray-300 border-dashed cursor-pointer"
              onClick={() => setOrganizingOpen(!organizingOpen)}
            >
              <span className="text-gray-700">Organizing Events</span>
              <MdKeyboardArrowDown
                className={`text-2xl text-primary transition-transform ${
                  organizingOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {organizingOpen && (
              <div className="text-sm text-gray-800 overflow-hidden transition-all duration-300">
                <a
                  href="/manage-events"
                  className="flex items-center px-1 py-1"
                >
                  <MdCalendarToday className="text-primary mr-2" />
                  Manage Events
                </a>
                <a
                  href="/billing"
                  className="flex items-center px-1 py-1"
                >
                  <MdAttachMoney className="text-primary mr-2" />
                  Billing
                </a>
                <a
                  href="/reports"
                  className="flex items-center px-1 py-1"
                >
                  <MdShowChart className="text-primary mr-2" />
                  Reports
                </a>
                <a
                  href="https://www.townscript.com/dashboard/promo"
                  className="flex items-center px-1 py-1 border-b border-gray-300"
                >
                  <MdCampaign className="text-primary mr-2" />
                  Promotions
                </a>
              </div>
            )}
          </div>

          {/* Attending Events Panel */}
          <div className="px-1 mt-2">
            <div
              className="flex items-center justify-between px-1 py-2 border-b border-gray-300 border-dashed cursor-pointer"
              onClick={() => setAttendingOpen(!attendingOpen)}
            >
              <span className="text-gray-700">Attending Events</span>
              <MdKeyboardArrowDown
                className={`text-2xl text-primary transition-transform ${
                  attendingOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {attendingOpen && (
              <div className="text-sm text-gray-800 overflow-hidden transition-all duration-300">
                <a
                  href="https://www.townscript.com/dashboard/mybookings"
                  className="flex items-center px-1 py-1"
                >
                  <MdConfirmationNumber className="text-primary mr-2" />
                  My Bookings
                </a>
                <a
                  href="https://www.townscript.com/dashboard/following"
                  className="flex items-center px-1 py-1 border-b border-gray-300"
                >
                  <MdFavorite className="text-primary mr-2" />
                  Following
                </a>
              </div>
            )}
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between px-4 py-2 cursor-pointer">
            <span className="text-gray-700">Logout</span>
            <MdLogout className="text-primary" />
          </div>
        </div>
      )}
    </div>
  );
};
