import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="bg-gray-100 ">
      <header className="container px-[2rem] w-full">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between py-6"
        >
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Company Logo"
                loading="lazy"
                width="120"
                height="80"
                decoding="async"
                data-nimg="1"
                className=""
                src="/logo.png"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-out-back"
            >
              Cafe Menu
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out-back"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-out-back"
            >
              Find Us
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-easing="ease-out-back"
            >
              Alowishus Catering
            </a>
          </div>

          {/* Right Side Icons and Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
            {/* Shopping Cart Icon */}
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                width="35"
                className="hover:cursor-pointer bg-gray-50 hover:bg-gray-100 p-2 rounded-full shadow-lg shadow-gray-300 hover:scale-105 transition-all"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {/* Action Button */}
            <button
              className="bg-gray-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-all"
              type="button"
              data-headlessui-state=""
              aria-label="Action Button"
            >
              Buy Gift Vouchers
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
