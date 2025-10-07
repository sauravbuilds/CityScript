import React from "react";

const OrganiserStrip = () => {
  return (
    <section className="organiser-strip bg-purple-800 relative">
      <div className="digest-container max-w-7xl ml-8    py-8 flex flex-col md:flex-row justify-between items-center ">
        {/* Left Text Section */}
        <div className="flex flex-col w-full md:w-1/2 text-white">
          <img
            src="https://www.townscript.com/assets/images/townhall-logo.svg"
            alt="Townhall Logo"
            className="w-32 mb-4"
          />
          <span className="my-2 font-bold tracking-wider text-lg xl:text-2xl">
            Interested in hosting a virtual conference?
          </span>
          <span className="text-xs xl:text-base mb-4">
            Introducing Townhall (A Townscript Company) - an all-in-one platform
            for virtual events of any size and type.
          </span>
          <a
            href="/know-more"
            className="bg-white text-[#563DE1] font-bold tracking-wider px-4 py-2 rounded hover:shadow-md self-start transition-shadow duration-300"
          >
            Know more
          </a>
        </div>

        {/* Right Image Section */}
        {/* <div className="hidden md:block relative">
          <img
            src="https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/organiser-b2b.png"
            alt="Townhall"
            className="absolute bottom-6 right-0 max-w-[350px] object-contain"
          />
        </div> */}

        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/organiser-b2b.png"
            alt="Townhall"
            className="absolute right-[-150px] top-1/2 transform -translate-y-1/2 max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganiserStrip;
