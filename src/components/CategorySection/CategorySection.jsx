import React from "react";

const CategorySection = () => {
  const categories = [
    {
      title: "Must visit online events",
      link: "/in/online/must-visit",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-must-attend.png",
    },
    {
      title: "Learn online art & painting",
      link: "/in/online/art",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-art.png",
    },
    {
      title: "Enjoyment & Leisure events",
      link: "/in/online/entertainment",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-leisure.png",
    },
    {
      title: "Sports & Fitness events",
      link: "/in/online/sports-fitness",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-fitness.png",
    },
    {
      title: "Startup & Business events",
      link: "/in/online/startup",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-business.png",
    },
    {
      title: "Workshop events",
      link: "/in/online/training",
      img: "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/ListingsStatic/digest-workshop.png",
    },
  ];

  return (
    <section className="category-section-container py-6 md:py-10 mt-6 mb-4">
      {/* Header */}
      <div className="flex items-end justify-between mb-4 px-3">
        <a
          href="/categories"
          className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#5b47e0] transition-colors"
        >
          Browse Online Events
        </a>
      </div>

      {/* Categories Grid */}
      <div className="px-3 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <a
            key={i}
            href={cat.link}
            title={cat.title}
            className="block rounded overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={cat.img}
              alt={cat.title}
              title={cat.title}
              className="w-full rounded object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
