import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh] '>
      {/* overly in the hero bg */}
      <div className="absolute top-0 left-0 w-full h-full "></div>
      {/* bg-image */}
      <Image
        src="/images/Hero-bg.png"
        alt="Background"
        fill
        className="object-cover"
      />
      {/* text */}
      <div className="absolute z-[100] w-full h-full pl-4 lg:pl-12 pt-12 flex flex-col lg:flex-row items-center justify-between">
        {/* left content */}
        <div className="space-y-4">
          <h6 className="text-green-600 font-semibold">Welcome to Fresh Harvest</h6>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-gray-600">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="px-6 py-3 bg-[#FF6A1A] text-white font-semibold rounded hover:bg-orange-600 transition">
            Shop Now
          </button>

          {/* Special Offer Card */}
          <div className="mt-6 bg-[#ebebeb] shadow-lg rounded-lg p-4 flex items-center gap-4 w-[300px]">
            <div>
              <p className="text-sm text-gray-500 font-semibold">Special Offer</p>
              <h4 className="text-2xl font-bold text-gray-900">Fresh Salad</h4>
              <p className="text-green-600 text-sm">
                Up to <span className="text-yellow-500 font-bold">70%</span> off
              </p>
              <p className="text-xs font-semibold bg-[#176d38] text-white px-2 py-1 rounded inline-block mt-1">
                CODE : <span className='text-[#d7ba1a]'>FRESH25</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/salad.png"
                alt="Fresh Salad"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>

          {/* App Store Links */}
          <div className="flex gap-4 mt-6">
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={130}
              height={40}
              className='rounded'
            />
            <Image
              src="/images/google-play.png" 
              alt="Google Play"
              width={130}
              height={40}
              className='rounded'
            />
          </div>
        </div>

        {/* banner image */}
        {/* Right Image */}
        <div className="flex items-end h-full ">
          <Image
            src="/images/hero-image.png" // replace with your image
            alt="Girl with vegetables"
            width={550}
            height={50}
            className="object-cover w-full h-full overflow-hidden"
          />
        </div>
        
      </div>
    </div>
  )
}
