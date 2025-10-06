import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const AuthModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40">
      <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 animate-slideInRight">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <button onClick={onClose} className="text-[#5b47e0] text-2xl mr-3">
            <IoMdArrowBack />
          </button>
          <div className="flex flex-col">
            <h2 className="text-gray-800 text-lg md:text-xl lg:text-2xl font-semibold">
              Let's get started
            </h2>
            <span className="text-gray-600 text-xs md:text-sm">
              Your one stop tool for organizing events
            </span>
          </div>
        </div>

        {/* Body / Form */}
        <div className="p-4">
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b47e0]"
              />
              {!email && (
                <p className="text-xs text-red-500 mt-1">
                  Email Id is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full p-2 rounded-md text-white font-semibold ${
                email ? "bg-[#5b47e0]" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!email}
            >
              Continue
            </button>

            <div className="flex items-center justify-center my-2">
              <span className="text-gray-700 text-sm">OR</span>
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              <a
                href="https://www.townscript.com/api/user/signinwithgoogle"
                className="flex items-center justify-center w-full border border-gray-400 rounded-md p-2 bg-white shadow"
              >
                <img
                  src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/google-min.png"
                  alt="Google"
                  className="h-5 mr-2"
                />
                <span className="text-gray-700 text-sm">
                  Continue with Google
                </span>
              </a>

              <a
                href="https://www.townscript.com/api/user/signinwithfacebook"
                className="flex items-center justify-center w-full border border-gray-400 rounded-md p-2 bg-white shadow"
              >
                <img
                  src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/facebook-min.png"
                  alt="Facebook"
                  className="h-5 mr-2"
                />
                <span className="text-gray-700 text-sm">
                  Continue with Facebook
                </span>
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 text-center text-xs text-gray-800">
          By continuing, you agree to Townscript's{" "}
          <a
            href="https://www.townscript.com/terms-and-conditions"
            className="text-blue-700"
          >
            terms of service
          </a>{" "}
          and{" "}
          <a
            href="https://www.townscript.com/privacy-policy"
            className="text-blue-700"
          >
            privacy policy
          </a>
          .
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
