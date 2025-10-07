import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import FeaturedEvents from "../FeaturedEvents/FeaturedEvents"; // Example component
import CategorySection from "../CategorySection/CategorySection";
import QuickFilters from "../QuickFilters/QuickFilters";
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
          <section className="w-full lg:px-8 ">
            <QuickFilters />
          </section>
          {/* Add more sections/components here */}
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
