import React, { useState } from "react";
import AuthModal from "./AuthModal";

const AuthLinks = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setAuthOpen(true)}
        className="flex items-center cursor-pointer px-2 select-none 
                   transition-all duration-150 hover:opacity-80"
      >
        {/* Account Circle Icon (mdi-account-circle equivalent) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#5b47e0] h-7 w-7 md:h-9 md:w-9 mr-2"
        >
          <path d="M12,19.2C9.5,19.2 7.29,18.06 5.84,16.25C5.94,14.25 10,13.2 12,13.2C14,13.2 18.06,14.25 18.16,16.25C16.71,18.06 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        <span className="text-gray-800 whitespace-nowrap text-sm md:text-base">
          Login&nbsp;|&nbsp;Signup
        </span>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default AuthLinks;
