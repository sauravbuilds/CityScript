import React from "react";

const CreateEventButton = () => {
  return (
    <a
      href="https://www.townscript.com/dashboard/create-event"
      className="flex items-center justify-center h-full px-5 py-2 rounded-full cursor-pointer 
                 bg-[#5b47e0] hover:bg-[#4a3fc8] text-white 
                 font-semibold text-sm tracking-wide leading-loose 
                 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      {/* Exact Ticket Star SVG */}
      <svg
        className="h-5 w-5 md:h-6 md:w-6 mr-2"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2m-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69z"></path>
      </svg>

      <span>CREATE EVENT</span>
    </a>
  );
};

export default CreateEventButton;
