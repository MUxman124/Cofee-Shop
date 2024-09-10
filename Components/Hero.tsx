import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-gray-100 w-full">
            <div className="md:pt-20 md:pb-16 container">
                <div className="grid md:grid-cols-2">
                    <div className="relative">
                        <h1 className="md:text-8xl text-5xl font-bold py-4" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            Alowishus Delicious Coffee
                        </h1>
                        <div className="absolute top-56 mt-1 right-56 md:flex hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <Image loading="lazy" width={80} height={80} src="/cafe.png" alt="Cafe Icon" />
                        </div>
                        <p className="py-4" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae placeat. Corrupti, omnis id a consequatur eius saepe quia dignissimos.
                        </p>
                        <div className="md:flex gap-4 py-6 grid">
                            <button className="inline-flex bg-gray-900 text-white items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1200" data-aos-easing="ease-in-out">
                                Download App
                            </button>
                            <button className="inline-flex bg-gray-900 text-white items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                Shop Coffee
                            </button>
                        </div>
                    </div>

                    <div className="relative md:py-0 py-16" data-aos="fade-left" data-aos-duration="900" data-aos-easing="ease-in-out-back">
                        <Image loading="lazy" width={600} height={600} src="/hero1.png" alt="Hero Image" />
                        <div className="absolute top-10 md:top-4 right-0 md:right-24">
                            <Image loading="lazy" width={120} height={120} className="md:w-28 w-16" src="/cafe.png" alt="Cafe Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
