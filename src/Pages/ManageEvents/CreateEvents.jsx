import React from "react";
import { MdClose } from "react-icons/md";

function CreateEvent() {
  const handleClose = () => {
    window.location.href = "/manage-events";
  };

  const handleVirtualEvent = () => {
    // Handle virtual event creation
    console.log("Virtual Event Selected");
  };

  const handleInPersonEvent = () => {
    // Handle in-person event creation
    console.log("In-Person Event Selected");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
      {/* Close Button */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-end">
        <button
          onClick={handleClose}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#47418C]  shadow-sm"
        >
          <MdClose className="text-2xl text-zinc-100" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Hi Saurav!
          </h4>
          <h3 className="text-lg md:text-xl text-gray-700">
            What kind of event would you like to create?
          </h3>
        </div>

        {/* Event Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Virtual Event Box */}
          <div
            onClick={handleVirtualEvent}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 cursor-pointer border border-gray-200 hover:border-purple-400 flex flex-col"
          >
            <img
              src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/Virtual-event.png"
              alt="Virtual Event"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-left">
              Virtual Event
            </h5>
            <h6 className="text-sm md:text-base text-gray-600 mb-6 flex-grow text-left opacity-80">
              Host single and multi-track events including webinars, conferences
              and virtual exhibitions
            </h6>
            <button className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold">
              Select
            </button>
          </div>

          {/* In-Person Event Box */}
          <div
            onClick={handleInPersonEvent}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 cursor-pointer border border-gray-200 hover:border-purple-400 flex flex-col"
          >
            <img
              src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/In-person-event.png"
              alt="In-Person Event"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-left">
              In-Person Event
            </h5>
            <h6 className="text-sm md:text-base text-gray-600 mb-6 flex-grow text-left opacity-80">
              Conduct and manage physical events such as marathons and workshops
            </h6>
            <button className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
