import React from "react";
import Image from "next/image";

export default function Favorite() {
  return (
    <div className="bg-gray-50 md:py-16 md:my-10 w-full">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div
            className="aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out-back"
          >
            <Image
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              className="object-cover md:w-full"
              src="/coffee-mid.png"
              alt="Favourite Coffee"
            />
          </div>
          <div
            className="md:pe-40 py-10 md:py-0 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out-back"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Order Your Favourite Coffee
            </h1>
            <p className="text-gray-500 text-lg py-4 md:py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero?
            </p>
            <button className="inline-flex bg-gray-900 text-white items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
