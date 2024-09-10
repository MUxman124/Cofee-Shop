import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div
          className="p-5 sm:w-8/12 aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out-back"
        >
          <Image
            alt="Company Logo"
            loading="lazy"
            width={150}
            height={80}
            decoding="async"
            className=""
            src="/logo.png"
          />
          <div className="md:flex grid gap-4 md:gap-8 pt-8">
            <a href="#" className="text-lg font-medium leading-6 text-gray-900">
              Cafe Menu
            </a>
            <a href="#" className="text-lg font-medium leading-6 text-gray-900">
              About Us
            </a>
            <a href="#" className="text-lg font-medium leading-6 text-gray-900">
              Find Us
            </a>
            <a href="#" className="text-lg font-medium leading-6 text-gray-900">
              Alowishus Catering
            </a>
          </div>
        </div>
        <div
          className="p-5 sm:w-4/12 aos-init aos-animate"
          data-aos="fade-left"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out-back"
        >
          <h3 className="font-medium text-lg text-gray-900 mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="mt-4">
            <input
              className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="username@email.com"
            />
          </form>
        </div>
      </div>
      <div className="flex py-5 md:px-0 px-3 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2024 MUxman. All Rights Reserved.</p>
      </div>
    </div>
  );
}
