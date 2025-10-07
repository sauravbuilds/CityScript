import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import FeaturedEvents from "../FeaturedEvents/FeaturedEvents"; // Example component
import CategorySection from "../CategorySection/CategorySection";
import QuickFilters from "../QuickFilters/QuickFilters";
import EventStrip from "../EventStrip/EventStrip";
import OrganiserStrip from "../OrganiserStrip/OrganiserStrip";
import Support from "../Support/Support";
// import AnotherComponent from "../AnotherComponent/AnotherComponent"; // Add more

function Home() {
  return (
    <>
      {/* Navigation */}
      <Nav />
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <main className="flex-1 w-full ">
          {/* Example sections
        <section className="h-screen w-full bg-gray-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold">HomePage City</h1>
        </section> */}
          <section className="w-full  mt-18 bg-[#F1EEFF]">
            <FeaturedEvents />
          </section>
          <section className="w-full lg:p-8">
            <CategorySection />
          </section>
          <section className="w-full lg:px-8  mb-22">
            <QuickFilters />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full mb-8">
            <OrganiserStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full ">
            <OrganiserStrip />
          </section>
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>{" "}
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>{" "}
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>{" "}
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>{" "}
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>{" "}
          <section className="w-full lg:px-8 mb-12">
            <EventStrip />
          </section>
          <section className="w-full ">
            <OrganiserStrip />
          </section>


        <Support/>
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
