import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* Left Image with floating cards */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Background Circle */}
        <div className="absolute w-[300px] h-[300px] bg-[#749b3f] rounded-full -z-10 bottom-7"></div>

        {/* Main Image */}
        <Image
          src="/images/fresh-fruits.png" // replace with your image
          alt="Man with vegetables"
          width={450}
          height={450}
          className="relative z-10"
        />

        {/* Floating Fresh Harvest Logo */}
        {/* <div className="absolute bottom-16 left-0 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Image
            src="/images/logo-icon.png" // replace with your logo
            alt="Fresh Harvest Logo"
            width={24}
            height={24}
          />
          <span className="font-semibold">Fresh Harvests</span>
        </div> */}

        {/* Floating Product Card */}
        {/* <div className="absolute bottom-0 right-0 bg-white p-3 rounded-lg shadow-lg w-[140px]">
          <Image
            src="/images/fresh-fruits.png" // replace with product image
            alt="Mushroom"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <p className="text-sm font-medium mt-2">Mushroom</p>
          <p className="text-xs text-gray-500">$2.3/kg</p>
          <button className="mt-2 text-xs w-full border rounded py-1 hover:bg-orange-50">
            Add to cart
          </button>
        </div> */}
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Top Button */}
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            About us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          About Fresh Harvest
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>

        {/* Read More Button */}
        <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition">
          Read More
        </button>
      </div>
    </section>
  );
}
