import React from "react";
import {
  MdCalendarViewWeek,
  MdCalendarMonth,
  MdCalendarToday as MdCalendarExport,
  MdCalendarToday as MdCalendar,
  MdLocalOffer,
} from "react-icons/md";

const QuickFilters = () => {
  const filters = [
    {
      title: "Tomorrow",
      link: "/in/online/tomorrow",
      icon: <MdCalendar />,
      bg: "bg-[#e5e0ff]",
      color: "text-[#6757c1]",
    },
    {
      title: "This Weekend",
      link: "/in/online/this-weekend",
      icon: <MdCalendarViewWeek />,
      bg: "bg-[#ffeccb]",
      color: "text-[#b97500]",
    },
    {
      title: "This Week",
      link: "/in/online/this-week",
      icon: <MdCalendarViewWeek />,
      bg: "bg-[#ffddf7]",
      color: "text-[#be4ea5]",
    },
    {
      title: "Free",
      link: "/in/online/free",
      icon: <MdLocalOffer />,
      bg: "bg-[#ffe0c1]",
      color: "text-[#cc6500]",
    },
    {
      title: "Today",
      link: "/in/online/today",
      icon: <MdCalendarExport />,
      bg: "bg-[#d4fffd]",
      color: "text-[#037872]",
    },
    {
      title: "This Month",
      link: "/in/online/this-month",
      icon: <MdCalendarMonth />,
      bg: "bg-[#d0ffcf]",
      color: "text-[#20741e]",
    },
  ];

  return (
    <section className="event-strip-container ">
      {/* Header */}
      <div className="px-3 mb-4">
        <span className="font-bold md:font-semibold text-xl md:text-2xl text-gray-900">
          Quickly filter events by
        </span>
      </div>

      {/* Filters */}
      <div className="px-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {filters.map((f, i) => (
          <a
            key={i}
            href={f.link}
            className="flex items-center justify-between p-3 rounded-lg shadow hover:shadow-md bg-white transition-all duration-200 transform hover:scale-[0.98]"
          >
            <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
              {f.title}
            </span>
            <div
              className={`rounded-full p-2 flex items-center justify-center ${f.bg}`}
            >
              <span className={`${f.color} text-2xl`}>{f.icon}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickFilters;
