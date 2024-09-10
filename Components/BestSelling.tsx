import React from "react";
import Image from "next/image";

export default function BestSelling() {
    return (
        <div className="py-20">
            <div className="grid md:grid-cols-6 text-center md:py-16">
                <div className="md:col-start-2 col-span-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Best Selling Coffee</h1>
                    <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
                        quisquam dicta maxime, perferendis veniam!
                    </p>
                </div>
            </div>
            <div className="container md:pb-10 py-20 px-2 md:pt-36">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-11/12 mx-auto">
                    <div
                        className="shadow-lg hover:shadow-xl cursor-pointer px-8 md:px-12 py-8 rounded-lg hover:scale-105 transition-all relative aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out-back"
                    >
                        <div className="grid grid-cols-2 gap-6 items-end">
                            <Image
                                loading="lazy"
                                width={280}
                                height={280}
                                decoding="async"
                                className="absolute -right-8 bottom-[22rem] md:bottom-64 md:w-3/4 w-2/3"
                                src="/mid1.png"
                                alt="Best Selling Coffee 1"
                            />
                            <div>
                                <p className="text-gray-500 text-lg">#1 Selling</p>
                                <h1 className="text-3xl py-2 font-semibold text-gray-700">
                                    Double Espresso
                                </h1>
                            </div>
                        </div>
                        <p className="py-3 text-gray-500 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 items-center py-2">
                            <h1 className="font-semibold text-2xl">$ 59.99</h1>
                            <button className="inline-flex bg-gray-900 text-white items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div
                        className="shadow-lg hover:shadow-xl cursor-pointer px-8 md:px-12 py-8 rounded-lg hover:scale-105 transition-all relative aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1400"
                        data-aos-easing="ease-in-out-back"
                    >
                        <div className="grid grid-cols-2 gap-6 items-end">
                            <Image
                                loading="lazy"
                                width={280}
                                height={280}
                                decoding="async"
                                className="absolute -right-8 bottom-[22rem] md:bottom-64 md:w-3/4 w-2/3"
                                src="/mid2.png"
                                alt="Best Selling Coffee 2"
                            />
                            <div>
                                <p className="text-gray-500 text-lg">#1 Selling</p>
                                <h1 className="text-3xl py-2 font-semibold text-gray-700">
                                    Double Espresso
                                </h1>
                            </div>
                        </div>
                        <p className="py-3 text-gray-500 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 items-center py-2">
                            <h1 className="font-semibold text-2xl">$ 59.99</h1>
                            <button className="inline-flex bg-gray-900 text-white items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div
                        className="shadow-lg hover:shadow-xl cursor-pointer px-8 md:px-12 py-8 rounded-lg hover:scale-105 transition-all relative aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        data-aos-easing="ease-in-out-back"
                    >
                        <div className="grid grid-cols-2 gap-6 items-end">
                            <Image
                                loading="lazy"
                                width={280}
                                height={280}
                                decoding="async"
                                className="absolute -right-8 bottom-[22rem] md:bottom-64 md:w-3/4 w-2/3"
                                src="/mid3.png"
                                alt="Best Selling Coffee 3"
                            />
                            <div>
                                <p className="text-gray-500 text-lg">#1 Selling</p>
                                <h1 className="text-3xl py-2 font-semibold text-gray-700">
                                    Double Espresso
                                </h1>
                            </div>
                        </div>
                        <p className="py-3 text-gray-500 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 items-center py-2">
                            <h1 className="font-semibold text-2xl">$ 59.99</h1>
                            <button className="inline-flex bg-gray-900 text-white  items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
