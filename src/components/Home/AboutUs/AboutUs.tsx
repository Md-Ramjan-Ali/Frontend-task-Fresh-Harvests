import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:-mt-32 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-12 pb-10">

      {/* Left Image with floating cards */}
      <div className="relative w-full lg:flex-1 flex justify-center">
      
        {/* Main Image */}
        <Image
          src="/images/fresh-fruits.png"
          alt="Man with vegetables"
          width={500}
          height={500}
          className="relative -z-20"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-2/5 space-y-6">
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
        <button className="border-2 border-[#FF6A1A] text-[#FF6A1A] px-6 py-2 rounded hover:bg-[#FF6A1A] hover:text-white transition cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
}
