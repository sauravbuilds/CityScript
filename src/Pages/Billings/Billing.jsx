import React, { useState } from "react";
import { MdAttachMoney, MdAccountBalance, MdShowChart } from "react-icons/md";
import Navbar from "../../components/Nav/Nav";
// import KYCVerificationPage from "./KYCStepCard";

function Billing() {
  const [activeTab, setActiveTab] = useState("paymentSetup");

  const renderContent = () => {
    switch (activeTab) {
      case "payouts":
        return (
          <div className="flex justify-center items-center min-h-[calc(100vh-200px)] px-4 md:px-6 py-8 md:py-16">
            <div className="bg-white rounded-lg shadow-md max-w-3xl w-full p-6 md:p-10 lg:p-12 mx-4">
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6 md:mb-8">
                  <img
                    src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/user-kyc/analyze_finance_icon.png"
                    alt="KYC Status Icon"
                    title="kyc status icon"
                    className="w-32 md:w-48 lg:w-56 h-auto"
                  />
                </div>

                {/* Text */}
                <div className="text-center space-y-4 mb-6">
                  <h2 className="font-sans font-semibold text-lg md:text-xl text-gray-700">
                    Hey there event organizer! Looking for your payouts?
                  </h2>
                  <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                    Your earnings are secured with us and we want to make sure
                    they reach you safely. To keep Townscript fraud-free, please
                    complete our quick 3-minute KYC process.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center space-y-3 w-full">
                  <a
                    href="/dashboard/v2/billing/payment-setup"
                    className="w-full md:w-auto"
                  >
                    <button className="w-full md:w-auto px-6 py-2.5 bg-purple-600 text-white text-base md:text-lg rounded-md hover:bg-purple-700 transition-colors font-semibold">
                      Update KYC Details
                    </button>
                  </a>
                  <p>
                    <a
                      href="http://support.townscript.com/support/solutions/articles/1000283037-why-is-townscript-asking-for-kyc-details-and-how-is-it-important"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 text-sm font-bold underline"
                    >
                      Why do I need to do KYC?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "transactions":
        return (
          <div className="flex flex-col items-center text-center mt-12 px-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
              alt="Transactions"
              className="w-32 md:w-48 mb-6 opacity-90"
            />
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              No transactions found yet
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-lg">
              Once events go live and attendees purchase tickets, your
              transaction summary will appear here.
            </p>
          </div>
        );

      default:
        return (
          <div className="payouts-kyc-page-container py-0 px-6 flex justify-center w-full ">
            <div className="message-container flex flex-col justify-center rounded-sm bg-white my-16 md:my-5 mx-0 md:mx-20 lg:mx-56 px-6 md:px-20 pb-16">
              {/* Profile Header */}
              <div className="flex justify-between items-center p-6 rounded-lg mx-5 mt-10">
                <div className="flex items-center">
                  <img
                    className="rounded-full w-16 h-16 object-cover"
                    alt="Saurav"
                    src="//s3.ap-south-1.amazonaws.com/townscript-production/images/02f80836-2edc-4e7e-98ef-534aa7392040.jpg"
                    title="Saurav"
                  />
                  <div className="ml-6">
                    <div className="text-lg font-bold">Saurav</div>
                    <div className="mt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="mb-1 sm:mb-0">STATUS:</span>
                        <span className="text-xs font-bold text-white px-3 py-1 rounded-full sm:ml-1 bg-red-500">
                          YET TO SUBMIT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">0/3 completed</div>
              </div>

              <hr className="border-t border-gray-400" />

              {/* KYC Verification Section */}
              <div className="flex flex-col items-center w-full mt-8 space-y-4 px-5">
                <span className="text-xl font-semibold text-gray-700">
                  KYC Verification
                </span>

                {/* Step 1: User Details */}
                <div className="w-full max-w-4xl border border-yellow-400 rounded overflow-hidden">
                  <div className="relative">
                    <div className="pl-4 pr-3 py-5 flex flex-col">
                      <p className="text-left font-bold text-base leading-tight text-gray-800">
                        User Details
                      </p>
                      <span className="-mt-2 text-sm md:text-base text-left text-gray-700">
                        Your PAN card details have not been submitted
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-sm font-semibold px-4 py-1 rounded-full capitalize bg-gray-100 text-gray-800">
                        Unverified
                      </span>
                    </div>
                    <button className="mb-4 ml-4 mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                      Add Details
                    </button>
                  </div>
                </div>

                {/* Step 2: Identity Details */}
                <div className="w-full max-w-4xl border border-gray-300 rounded overflow-hidden opacity-50">
                  <div className="relative">
                    <div className="pl-4 pr-3 py-5 flex flex-col">
                      <p className="text-left font-bold text-base leading-tight text-gray-800">
                        Identity Details
                      </p>
                      <span className="-mt-2 text-sm md:text-base text-left text-gray-700">
                        Your identity details have not been submitted
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-sm font-semibold px-4 py-1 rounded-full capitalize bg-gray-100 text-gray-800">
                        Unverified
                      </span>
                    </div>
                    <button
                      className="mb-4 ml-4 mt-2 px-4 py-2 rounded-md bg-gray-300 text-gray-600 cursor-not-allowed"
                      disabled
                    >
                      Add Details
                    </button>
                  </div>
                </div>

                {/* Step 3: Link Bank Account */}
                <span className="text-xl font-semibold text-gray-700 mt-8">
                  Link Bank Account
                </span>
                <div className="w-full max-w-4xl border border-gray-300 rounded overflow-hidden opacity-50">
                  <div className="relative">
                    <div className="pl-4 pr-3 py-5 flex flex-col">
                      <p className="text-left font-bold text-base leading-tight text-gray-800">
                        Link your bank account
                      </p>
                      <span className="-mt-2 text-sm md:text-base text-left text-gray-700">
                        Provide your bank account details to safely receive your
                        payouts on time.
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-sm font-semibold px-4 py-1 rounded-full capitalize bg-gray-100 text-gray-800">
                        Unverified
                      </span>
                    </div>
                    <button
                      className="mb-4 ml-4 mt-2 px-4 py-2 rounded-md bg-gray-300 text-gray-600 cursor-not-allowed"
                      disabled
                    >
                      Link Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 ">
      {/* ======= TOP SECTION NAV ======= */}
      <div className="flex justify-center items-center w-full py-4 bg-gradient-to-r from-[#5443b0] to-[#231b54] text-white">
        <div className="w-4/5 md:w-3/5 flex flex-row justify-center items-center gap-6 md:gap-10 mt-22 ">
          {/* Payouts */}
          <div
            onClick={() => setActiveTab("payouts")}
            className={`flex flex-col justify-center items-center cursor-pointer hover:text-purple-200 transition ${
              activeTab === "payouts"
                ? "text-white font-bold"
                : "text-purple-200"
            }`}
          >
            <MdAttachMoney className="text-2xl mb-1" />
            <span className="hidden md:block text-sm">Payouts</span>
          </div>

          {/* Payment Setup */}
          <div
            onClick={() => setActiveTab("paymentSetup")}
            className={`flex flex-col justify-center items-center cursor-pointer hover:text-purple-200 transition ${
              activeTab === "paymentSetup"
                ? "text-white font-bold"
                : "text-purple-200"
            }`}
          >
            <MdAccountBalance className="text-2xl mb-1" />
            <span className="hidden md:block text-sm">Payment Setup</span>
          </div>

          {/* Transactions */}
          <div
            onClick={() => setActiveTab("transactions")}
            className={`flex flex-col justify-center items-center cursor-pointer hover:text-purple-200 transition ${
              activeTab === "transactions"
                ? "text-white font-bold"
                : "text-purple-200"
            }`}
          >
            <MdShowChart className="text-2xl mb-1" />
            <span className="hidden md:block text-sm">Transactions</span>
          </div>
        </div>
      </div>

      {/* ======= MAIN CONTENT ======= */}
      {renderContent()}
    </div>
    </>
    
  );
}

export default Billing;
