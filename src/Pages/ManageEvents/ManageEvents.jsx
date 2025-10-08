import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import Navbar from "../../components/Nav/Nav";

function ManageEvents() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Step Progress Banner - Exact Match */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 ">
            <div className="step-banner-container mt-22">
              {/* Progress Section */}
              <div className="progress-section mb-6">
                {/* Progress Line */}
                <div className="progress-line flex items-center justify-center mb-6">
                  {/* Step 1 - Completed */}
                  <div className="progress-step completed">
                    <div className="progress-circle completed w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="checkmark text-white text-lg md:text-xl font-bold">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="progress-connector w-16 md:w-32 h-0.5 bg-gray-300"></div>

                  {/* Step 2 */}
                  <div className="progress-step">
                    <div className="progress-circle w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300"></div>
                  </div>

                  {/* Connector */}
                  <div className="progress-connector w-16 md:w-32 h-0.5 bg-gray-300"></div>

                  {/* Step 3 */}
                  <div className="progress-step">
                    <div className="progress-circle w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Steps Content */}
                <div className="steps-content flex justify-between gap-2 md:gap-4">
                  {/* Step 1 */}
                  <div className="step-item flex-1 text-center">
                    <div className="step-number text-xs md:text-sm font-semibold text-gray-900 mb-1">
                      1
                    </div>
                    <div className="step-details">
                      <div className="step-title text-xs md:text-base font-semibold text-gray-900">
                        Pre-event
                      </div>
                      <div className="step-subtitle text-xs md:text-sm text-gray-600">
                        Townscript Registration
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="step-item flex-1 text-center">
                    <div className="step-number text-xs md:text-sm font-semibold text-gray-900 mb-1">
                      2
                    </div>
                    <div className="step-details">
                      <div
                        className="step-title text-xs md:text-base font-semibold text-gray-900"
                        style={{ opacity: "60%" }}
                      >
                        During Event
                      </div>
                      <div
                        className="step-subtitle text-xs md:text-sm text-gray-600"
                        style={{ opacity: "60%" }}
                      >
                        Townhall Live
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="step-item flex-1 text-center">
                    <div className="step-number text-xs md:text-sm font-semibold text-gray-900 mb-1">
                      3
                    </div>
                    <div className="step-details">
                      <div
                        className="step-title text-xs md:text-base font-semibold text-gray-900"
                        style={{ opacity: "60%" }}
                      >
                        Post Event
                      </div>
                      <div
                        className="step-subtitle text-xs md:text-sm text-gray-600"
                        style={{ opacity: "60%" }}
                      >
                        Townhall Follow Up
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="divider border-t border-gray-200 my-6"></div>

              {/* Upgrade Section */}
              <div className="upgrade-section">
                <div className="upgrade-content flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="upgrade-text text-sm md:text-base text-gray-700 text-center md:text-left">
                    Townhall is a fully integrated, end-to-end event platform —
                    upgrade to unlock its full capabilities
                  </div>
                  <div className="upgrade-actions">
                    <a href="#">
                      <button className="upgrade-btn px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap">
                        Upgrade Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Filter Tabs */}
        <div className="bg-white shadow-sm mt-4 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center">
              <ul className="flex gap-4 md:gap-8 pt-4 overflow-x-auto">
                <li className="flex justify-center">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("active");
                    }}
                    className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === "active"
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <div className="text-sm md:text-xl font-semibold">
                      Active Events
                    </div>
                  </a>
                </li>
                <li className="flex justify-center">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("past");
                    }}
                    className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === "past"
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <div className="text-sm md:text-xl font-semibold">
                      Past Events
                    </div>
                  </a>
                </li>
                <li className="flex justify-center">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("draft");
                    }}
                    className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === "draft"
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <div className="text-sm md:text-xl font-semibold">
                      Draft Events
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Floating Create Event Button */}
          <a
            href="/dashboard/create-event"
            className="fixed bottom-6 right-6 md:absolute md:bottom-auto md:-top-8 md:right-4 flex items-center justify-center rounded-full w-14 h-14 md:w-16 md:h-16 bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg z-50"
          >
            <MdAdd className="text-white text-2xl md:text-3xl" />
          </a>
        </div>

        {/* Empty State */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="https://s3.ap-south-1.amazonaws.com/townscript-common-resources/images/Dashboard/emptystate-dashboard.png"
                alt="No events"
                className="w-64 h-auto mb-8"
              />

              {/* Dynamic Title Based on Active Tab */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {activeTab === "active" && "You don't have any active events!"}
                {activeTab === "past" && "You don't have any past events!"}
                {activeTab === "draft" && "You don't have any draft events!"}
              </h3>

              <a href="/dashboard/create-event" target="_parent">
                <button className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold">
                  Create Event
                </button>
              </a>

              <small className="text-gray-600 mt-6">
                Looking for Booked Tickets? Check{" "}
                <a href="/dashboard/mybookings" target="_parent">
                  <button className="px-4 py-2 bg-transparent border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors font-semibold ml-2">
                    My Bookings
                  </button>
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageEvents;
