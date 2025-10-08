import React, { useMemo, useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Building2,
  Heart,
  Share2,
  Globe,
  Ticket,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { eventsData } from "../../Utils/MockData.js";

export default function EventDetailPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Pull event from your mock data
  const eventList = eventsData[category] || [];
  const event = useMemo(
    () => eventList.find((e) => String(e.id) === String(id)) || eventList[0],
    [eventList, id]
  );

  const [liked, setLiked] = useState(false);
  const [activeNav, setActiveNav] = useState("events");

  const scrollRootRef = useRef(null);
  const eventsRef = useRef(null);
  const venueRef = useRef(null);
  const organizerRef = useRef(null);

  // Smooth scroll to section inside the middle scroll container
  const scrollToSection = (sectionId) => {
    const el =
      sectionId === "events"
        ? eventsRef.current
        : sectionId === "venue"
        ? venueRef.current
        : organizerRef.current;

    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Observe section in middle column to highlight left nav
  useEffect(() => {
    const root = scrollRootRef.current;
    if (!root) return;

    const sections = [
      eventsRef.current,
      venueRef.current,
      organizerRef.current,
    ].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        // Get the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("id");
        if (id) setActiveNav(id);
      },
      {
        root,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Event not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    if (window.history.length > 2) navigate(-1);
    else navigate(`/in/online/${category}`); // fallback to category list
  };

  const eventDate = new Date(event.date);
  const dateStr = eventDate.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/70 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 lg:py-10">
        {/* Back button */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
            aria-label="Go back"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Sticky Nav */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-24">
              <nav className="flex flex-col gap-2">
                <LeftPill
                  active={activeNav === "events"}
                  icon={<Ticket size={18} />}
                  label="Event Information"
                  onClick={() => scrollToSection("events")}
                />
                <LeftPill
                  active={activeNav === "venue"}
                  icon={<MapPin size={18} />}
                  label="Venue"
                  onClick={() => scrollToSection("venue")}
                />
                <LeftPill
                  active={activeNav === "organizer"}
                  icon={<Building2 size={18} />}
                  label="Organizer"
                  onClick={() => scrollToSection("organizer")}
                />
              </nav>
            </div>
          </aside>

          {/* MIDDLE: Scrollable Content (hide scrollbar) */}
          <section className="lg:col-span-7">
            <div
              ref={scrollRootRef}
              className="lg:h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar"
            >
              {/* Banner */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => setLiked((v) => !v)}
                    className={`p-2 rounded-full transition backdrop-blur-sm ${
                      liked
                        ? "bg-red-500 text-white"
                        : "bg-white/90 text-gray-800 hover:bg-white"
                    }`}
                  >
                    <Heart size={18} fill={liked ? "currentColor" : "none"} />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white transition backdrop-blur-sm">
                    <Share2 size={18} />
                  </button>
                </div>
                {event.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Title + Meta */}
              <div className="mt-5 bg-white rounded-2xl shadow-sm p-5">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.dates}</span>
                    <span className="text-gray-400">|</span>
                    <Clock size={16} />
                    <span>{dateStr}</span>
                  </div>
                  <span className="flex items-center gap-2">
                    <Globe size={16} />
                    {event.type || "Online Event"}
                  </span>
                </div>
              </div>

              {/* Sections */}
              <div id="events" ref={eventsRef} className="mt-6 scroll-mt-24">
                <SectionCard title="Event Information">
                  <p className="text-gray-700 leading-relaxed">
                    {event.description ||
                      "Join us for an immersive experience featuring expert speakers, hands-on sessions, and a vibrant community. Learn, network, and grow."}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Ticket size={16} className="text-purple-600" />
                      Ticket Type: {event.priceNum === 0 ? "Free" : "Paid"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-600" />
                      Start: {new Date(event.date).toLocaleString()}
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe size={16} className="text-purple-600" />
                      Mode: {event.type}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-600" />
                      Location: Online
                    </li>
                  </ul>

                  <div className="mt-5 bg-purple-50 border border-purple-100 text-purple-800 rounded-xl p-4">
                    Note: You’ll receive the meeting link and instructions via
                    email after booking.
                  </div>
                </SectionCard>
              </div>

              <div id="venue" ref={venueRef} className="mt-6 scroll-mt-24">
                <SectionCard title="Venue">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-purple-600 mt-1" size={18} />
                    <div>
                      <p className="font-medium text-gray-900">
                        This is an online event
                      </p>
                      <p className="text-gray-600">
                        The event will be hosted on a secure video platform.
                        Join from any device.
                      </p>
                    </div>
                  </div>
                </SectionCard>
              </div>

              <div
                id="organizer"
                ref={organizerRef}
                className="mt-6 scroll-mt-24 mb-10"
              >
                <SectionCard title="Organizer">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80"
                      alt="Organizer"
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Townhall Events
                      </p>
                      <p className="text-sm text-gray-600">
                        Joined on May 31, 2022
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium rounded-full border border-purple-300 text-purple-700 hover:bg-purple-50">
                      Follow
                    </button>
                  </div>

                  <div className="mt-4 text-gray-700 leading-relaxed">
                    At Townhall, we help creators and brands host world-class
                    virtual events that educate, entertain, and build
                    communities.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      15 Events Organised
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      16 Followers
                    </span>
                  </div>
                </SectionCard>
              </div>
            </div>
          </section>

          {/* RIGHT: Sticky Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">
                      {event.price || "₹0"}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      *Exclusive of Taxes
                    </div>
                  </div>
                  <Ticket className="text-purple-600" />
                </div>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-sm flex items-center justify-center gap-2">
                  BOOK NOW
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Questions Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
                    alt="Organizer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Have a question?
                    </p>
                    <p className="text-sm text-gray-600">
                      Send your queries to the event organizer
                    </p>
                  </div>
                </div>
                <button className="mt-4 w-full border border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold py-2.5 rounded-xl">
                  CONTACT ORGANIZER
                </button>
              </div>

              {/* Host with Townhall */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <p className="font-semibold text-gray-900">
                  Host Virtual Events with Townhall
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1590650153855-d9e8082303cf?w=200&q=80"
                    alt="thumb1"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80"
                    alt="thumb2"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                </div>
                <button className="mt-4 w-full text-purple-700 font-semibold hover:text-purple-800">
                  LEARN MORE
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile bottom sticky actions */}
        <div className="lg:hidden fixed left-0 right-0 bottom-0 bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-gray-900">
                {event.price}
              </div>
              <div className="text-xs text-gray-500">Exclusive of taxes</div>
            </div>
            <button className="bg-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Left pill button */
function LeftPill({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-full transition 
      ${
        active
          ? "bg-purple-100 text-purple-700 shadow-sm"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className={active ? "text-purple-700" : "text-gray-500"}>
        {icon}
      </span>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

/* Section card shell */
function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
      <h2 className="text-gray-900 font-bold mb-4">{title.toUpperCase()}</h2>
      {children}
    </div>
  );
}
