import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export const AuthSheet = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleContinue = () => {
    if (!email) {
      setEmailError("Email Id is required");
    } else {
      setEmailError("");
      // TODO: Handle form submission
      console.log("Continue with", email);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:items-center justify-center mb-6">
        <div className="flex items-center w-full mb-2">
          <button onClick={onBack} className="text-gray-700 text-2xl md:hidden mr-2">
            <IoMdArrowBack />
          </button>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Let's get started
          </h2>
        </div>
        <p className="text-xs md:text-sm text-gray-600 md:text-center">
          Your one stop tool for organizing events
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              emailError ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
            }`}
          />
          {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className={`w-full bg-primary text-white py-2 rounded font-semibold mb-4 ${
            !email ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          Continue
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-700 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="space-y-2">
          <a
            href="#"
            className="w-full flex items-center justify-center border border-gray-400 rounded py-2 bg-white shadow"
          >
            <img src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/google-min.png" alt="Google" className="h-5 w-5 mr-2" />
            <span className="text-gray-700 text-sm">Continue with Google</span>
          </a>

          <a
            href="#"
            className="w-full flex items-center justify-center border border-gray-400 rounded py-2 bg-white shadow"
          >
            <img src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/facebook-min.png" alt="Facebook" className="h-5 w-5 mr-2" />
            <span className="text-gray-700 text-sm">Continue with Facebook</span>
          </a>
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-600 mt-4 px-2">
          By continuing, you agree to Townscript's{" "}
          <a href="#" className="text-blue-700">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-700">
            privacy policy
          </a>.
        </p>
      </form>
    </div>
  );
};
