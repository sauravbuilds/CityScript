import React from "react";
import logo from "/Logo.svg";
import { FaExternalLinkAlt, FaInnosoft, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block building-image-container"></div>

      <div className="ts-footer flex p-5 lg:p-8 lg:pb-10 bg-white lg:pb-12 lg:mb-2">
        <div className="section-1 hidden md:block px-5 border-r border-gray-400 w-1/5 md:w-1/4 lg:w-1/5 mr-5">
          <div className="flex flex-col justify-between h-full">
            <div className="ts-logo w-11/12 pr-3 mb-2">
              <img
                alt="Townscript Event Ticketing Logo"
                title="Townscript Event Ticketing Logo"
                className="w-full h-auto"
                src={logo}
              />
              <div className="ts-footer__copyright text-right pr-2 text-xs text-gray-700 opacity-75">
                Copyright@2025
              </div>
            </div>

            <div className="my-booking-link w-full py-2">
              <a
                href="/dashboard/mybookings"
                target="_blank"
                rel="noopener noreferrer"
                title="View Your Bookings"
              >
                <div className="font-semibold text-gray-800 text-sm w-full whitespace-no-wrap flex items-center gap-1">
                  View Your Bookings <FaExternalLinkAlt />
                </div>
              </a>
            </div>

            <div className="organizer-app-links pr-10 py-2">
              <h5 className="font-semibold text-gray-800 text-sm whitespace-no-wrap">
                Organizer App
              </h5>
              <ul className="list-apps flex mt-1">
                <li>
                  <a
                    href="//play.google.com/store/apps/details?id=com.dyulok.android.organizerapp&hl=en_IN"
                    title="Download on Google play"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="google-logo mr-3">
                      <IoLogoGooglePlaystore className="text-xl mt-4" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="//itunes.apple.com/in/app/townscript-event-manager/id1441088900?mt=8"
                    title="Download on App Store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="apple-log">
                      <FaApple className="text-xl mt-4" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="social-follow pt-2">
              <h5 className="font-semibold text-gray-800 text-sm whitespace-no-wrap">
                Follow us on
              </h5>
              <ul className="social-list flex flex-wrap pr-4 text-xl mt-2 -ml-1 -mb-1 gap-2">
                <li>
                  <a
                    href="https://www.facebook.com/townscript"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find Us On Facebook"
                    title="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/townscript"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find Us On Twitter"
                    title="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/townscript.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find Us On Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/townscript"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find Us On LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-2 hidden md:flex px-5 pr-3 w-full justify-between">
          <div className="flex flex-col part-1 w-full">
            <div className="link-container w-full flex flex-1 pb-2 overflow-hidden lg:pr-10">
              <div className="w-2/3 flex justify-between pr-3">
                <div className="learn-more flex flex-col h-full pr-3 w-1/3">
                  <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
                    Learn More
                  </h5>
                  <ul className="list-linear flex flex-col justify-between flex-1">
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/how-it-works">How it works</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Policies</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy</a>
                    </li>
                    <li>
                      <a
                        href="//townscript-api.readme.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        APIs for Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://support.townscript.com/support/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support / FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ts-links flex flex-col h-full pr-3 w-1/3">
                  <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
                    About
                  </h5>
                  <ul className="list-linear flex flex-col justify-between flex-1">
                    <li>
                      <a href="/about-us">About us</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact us</a>
                    </li>
                    <li>
                      <a
                        href="http://blog.townscript.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://eventmagazine.townscript.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Event Magazine
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://productblog.townscript.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Product Diary
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sitemap"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="organize-links flex flex-col h-full pr-3 w-1/3">
                  <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
                    Organize Events
                  </h5>
                  <ul className="list-linear flex flex-col justify-between flex-1">
                    <li>
                      <a href="/i/conference-registration">Conferences</a>
                    </li>
                    <li>
                      <a href="/i/workshops-and-trainings">
                        Workshops and Trainings
                      </a>
                    </li>
                    <li>
                      <a href="/i/marathon-cycling-trips-treks-registration">
                        Sports and Fitness Events
                      </a>
                    </li>
                    <li>
                      <a href="/i/entertainment-events-ticketing">
                        Entertainment Events
                      </a>
                    </li>
                    <li>
                      <a href="/i/treks-trips-registration">Treks and Trips</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="popular-search flex flex-col w-1/3 pl-5 lg:pl-8">
                <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
                  Popular Searches
                </h5>
                <ul className="list-linear flex flex-col justify-between flex-1">
                  <li>
                    <a href="http://support.townscript.com/support/solutions/articles/1000265220-list-of-countries-supported-by-townscript-">
                      Countries supported by Townscript
                    </a>
                  </li>
                  <li>
                    <a href="/i/sell-event-tickets-online">
                      Sell Event Tickets Online
                    </a>
                  </li>
                  <li>
                    <a href="/i/event-management-software">
                      Event Management Software
                    </a>
                  </li>
                  <li>
                    <a href="/i/event-registration-software">
                      Event Registration Software
                    </a>
                  </li>
                  <li>
                    <a href="/i/conference-management-system">
                      Conference management System
                    </a>
                  </li>
                  <li>
                    <a href="/i/event-planning-software">
                      Event Planning Software
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center mt-4 lg:pr-10">
              <div className="popular-cities mt-2 w-2/3 pr-1">
                <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
                  Popular Cities
                </h5>
                <ul className="list-linear flex flex-wrap">
                  <li>
                    <div className="pr-5">
                      <a href="/sg/singapore">Singapore</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/bengaluru">Bengaluru</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/chennai">Chennai</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/delhi">Delhi</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/hyderabad">Hyderabad</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/mumbai">Mumbai</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/in/pune">Pune</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/id/bali">Bali</a>
                    </div>
                  </li>
                  <li>
                    <div className="pr-5">
                      <a href="/id/jakarta">Jakarta</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="compare-us w-1/3 pl-5 lg:pl-8">
            <h5 className="font-semibold text-gray-800 text-sm pb-3 whitespace-no-wrap">
              Compare Us
            </h5>
            <ul className="list-linear flex flex-wrap">
              <li>
                <div className="pr-5">
                  <a href="https://townscript.com/organize/best-eventbrite-alternative">
                    Eventbrite
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/peatix-alternative-why-townscript-is-better-than-peatix">
                    Peatix
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/zoom-alternatives">
                    Zoom
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/best-skype-alternative">
                    Skype
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/Best-gotomeeting-alternative">
                    Go To Meeting
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/google-meet-alternative-for-events">
                    Google Meet Alternative
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/best-webex-alternative-for-online-events">
                    WebEx Alternative
                  </a>
                </div>
              </li>
              <li>
                <div className="pr-5">
                  <a href="https://www.townscript.com/organize/best-gotowebinar-alternative">
                    GoToWebinar Alternative
                  </a>
                </div>
              </li>
            </ul>
            <div className="review-corner flex-row h-full hidden lg:flex items-center mr-40">
              <div className="g2crowd">
                <div className="text-center">
                  <a
                    href="https://www.g2crowd.com/products/townscript/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="G2Crowd Townscript Reviews"
                  >
                    <div className="flex flex-row">
                      <img
                        alt="G2Crowd Townscript Reviews"
                        width="100"
                        className="px-2"
                        src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/g2badge2.0.png"
                      />
                      <img
                        alt="AICPA SOC2 Type2"
                        width="110"
                        className="px-2"
                        src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/AICPA+SOC2.png"
                      />
                      <img
                        alt="GDPR Ready"
                        width="130"
                        className="px-2"
                        style={{ height: "100px" }}
                        src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/getwebcertificate.png"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full block md:hidden pb-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl text-gray-400 px-5 pr-32 mr-5">
              "Live an
            </div>
            <div className="text-4xl text-gray-400 font-semibold -mt-3 px-5 pl-12">
              <span className="text-purple-300">Event</span>ful life"
            </div>
            <img
              alt="Live an Eventful life"
              className="dance-illustration"
              src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/ts-illustrations/partying_2.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
