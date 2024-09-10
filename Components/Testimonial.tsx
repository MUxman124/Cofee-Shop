import React from "react";
import Image from "next/image";
export default function Testimonial() {
    return (
        <div className="container py-20 px-4">
            <div className="grid md:grid-cols-6 text-center md:py-10">
                <div className="col-start-2 col-span-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Client Testimonial</h1>
                    <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio quisquam dicta maxime, perferendis veniam!
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-x-6">
                        <div className="hidden sm:block -space-x-2 overflow-hidden">
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Client 1"
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Client 2"
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt="Client 3"
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Client 4"
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Client 5"
                            />
                        </div>
                        <div className="border-none sm:border-l-2 border-black sm:pl-8">
                            <div className="flex justify-center sm:justify-start items-center">
                                <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star text-yellow-400"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm">Rated by 25k on Google.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-7 hidden">
                <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 hover:scale-105 transition-all cursor-pointer">
                    <div className="bg-gray-200">
                        <Image
                            alt="Client 1"
                            width={300}
                            height={300}
                            loading="lazy"
                            className="rounded-t-md object-cover mx-auto"
                            src="/girl1.png"
                        />
                    </div>
                    <div className="p-7">
                        <div className="grid grid-cols-2 items-center gap-3">
                            <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Aeysha Ahmed
                            </h1>
                            <div className="flex gap-1">
                                <StarRating />
                            </div>
                        </div>
                        <p className="text-gray-500 text-lg pt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
                        </p>
                    </div>
                </div>

                {/* Repeat similar blocks for other testimonials */}
                <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 hover:scale-105 transition-all cursor-pointer">
                    <div className="bg-gray-200">
                        <Image
                            alt="Client 2"
                            width={300}
                            height={300}
                            loading="lazy"
                            className="rounded-t-md object-cover mx-auto"
                            src="/girl2.png"
                        />
                    </div>
                    <div className="p-7">
                        <div className="grid grid-cols-2 items-center gap-3">
                            <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Sarah Lee
                            </h1>
                            <div className="flex gap-1">
                                <StarRating />
                            </div>
                        </div>
                        <p className="text-gray-500 text-lg pt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
                        </p>
                    </div>
                </div>

                <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 hover:scale-105 transition-all cursor-pointer">
                    <div className="bg-gray-200">
                        <Image
                            alt="Client 3"
                            width={300}
                            height={300}
                            loading="lazy"
                            className="rounded-t-md object-cover mx-auto"
                            src="/man.png"
                        />
                    </div>
                    <div className="p-7">
                        <div className="grid grid-cols-2 items-center gap-3">
                            <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Maria Gomez
                            </h1>
                            <div className="flex gap-1">
                                <StarRating />
                            </div>
                        </div>
                        <p className="text-gray-500 text-lg pt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

function StarRating() {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-yellow-400"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ))}
        </>
    );
}
