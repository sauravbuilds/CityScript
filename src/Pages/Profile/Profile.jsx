import React, { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [isEditing, setIsEditing] = useState(false);

  const renderMyProfile = () => (
    <>
      {/* Profile Info Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
        {/* Profile Picture */}
        <div className="relative group">
          <img
            src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/02f80836-2edc-4e7e-98ef-534aa7392040.jpg"
            alt="Saurav"
            className="w-28 h-28 rounded-full border-4 border-gray-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <i
              className="mdi mdi-upload text-white text-2xl"
              title="Upload Image"
            ></i>
            <i
              className="mdi mdi-close text-white text-2xl"
              title="Remove Profile Image"
            ></i>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Saurav</h2>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <i className="mdi mdi-email-outline"></i>
            <p className="text-sm">developer.sauravkumar@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="mdi mdi-cellphone-iphone"></i>
            <p className="text-sm">-</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full md:w-auto px-6 py-2 bg-transparent border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <i className="mdi mdi-border-color"></i>
            <span>Edit</span>
          </button>
        </div>
      </div>

      <hr className="border-gray-200 my-6" />

      {/* Account Settings Section */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-4">
          Account Settings
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <button className="px-4 py-2 bg-transparent border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors text-sm font-semibold">
              Change Password
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Townscript Profile Link
            </label>
            <a
              href="https://www.townscript.com/o/saurav-000113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 text-sm break-all"
            >
              townscript.com/o/saurav-000113
            </a>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              Timezone
              <i
                className="mdi mdi-information-outline text-gray-400 cursor-help"
                title="All your registration/transaction data will be shown based on this timezone"
              ></i>
            </label>
            <p className="text-gray-600 text-sm">Asia/Calcutta</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              Cover Picture
              <span className="font-normal text-xs text-gray-500">
                (Min Size: 1920px x 738px)
              </span>
              <i
                className="mdi mdi-information-outline text-gray-400 cursor-help"
                title="Cover Image will be used on Organizer Profile"
              ></i>
            </label>
            <div className="relative group">
              <button className="px-4 py-2 bg-transparent border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors text-sm font-semibold">
                Upload Cover Image
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-4">
          Social Media Accounts
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Facebook Page Link
            </label>
            <p className="text-gray-600 text-sm">NA</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Twitter Profile Link
            </label>
            <p className="text-gray-600 text-sm">NA</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              LinkedIn Profile Link
            </label>
            <p className="text-gray-600 text-sm">NA</p>
          </div>
        </div>
      </div>

      {/* Communication Settings Section */}
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4">
          Communication Settings
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              Email notification frequency
              <i
                className="mdi mdi-information-outline text-gray-400 cursor-help"
                title="Specify whether notification of ticket sale is to be sent on every transaction. An email with sales summary will be sent every day for sales of previous day."
              ></i>
            </label>
            <p className="text-gray-600 text-sm">Every Transaction</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              Support Email Id
              <i
                className="mdi mdi-information-outline text-gray-400 cursor-help"
                title="This is the email id that would be mentioned in the ticket email. Attendees can send email on this for any help needed with the event"
              ></i>
            </label>
            <p className="text-gray-600 text-sm">
              developer.sauravkumar@gmail.com
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Support Phone No.
            </label>
            <p className="text-gray-600 text-sm">NA</p>
          </div>
        </div>
      </div>
    </>
  );

  const renderOrganizingTeam = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Add New User Card */}
      <a href="/settings/organizing-team/new-user" className="block">
        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-600 transition-all cursor-pointer h-48 flex flex-col items-center justify-center group">
          <div className="text-center">
            <i className="mdi mdi-plus text-6xl text-purple-600 mb-4 group-hover:scale-110 transition-transform"></i>
            <label className="text-lg font-light text-gray-700 cursor-pointer">
              Add A New User
            </label>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <ul className="flex gap-0 md:gap-4 w-full md:w-auto">
              <li className="flex-1 md:flex-none">
                <a
                  href="/settings/my-profile"
                  className={`block px-6 py-4 text-center font-semibold border-b-2 transition-colors ${
                    activeTab === "my-profile"
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("my-profile");
                  }}
                >
                  My Profile
                </a>
              </li>
              <li className="flex-1 md:flex-none">
                <a
                  href="/settings/organizing-team"
                  className={`block px-6 py-4 text-center font-semibold border-b-2 transition-colors ${
                    activeTab === "organizing-team"
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("organizing-team");
                  }}
                >
                  Organizing Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {activeTab === "my-profile"
              ? renderMyProfile()
              : renderOrganizingTeam()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
