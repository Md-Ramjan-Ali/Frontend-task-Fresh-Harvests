import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='relative w-full h-[100vh] sm:h-[100vh] '>
      {/* overly in the hero bg */}
      <div className="absolute top-0 left-0 w-full h-full "></div>
      {/* bg-image */}
      <Image
        src="/images/Hero-bg.png"
        alt="Background"
        fill
        className="object-center"
      />
      {/* text */}
      <div className="relative  z-[100] w-full h-full pt-20 flex flex-col lg:flex-row items-center justify-between">
        {/* left content */}
        <div className="relative space-y-2 p-3 lg:pl-20 w-full lg:w-3/6">
          <h6 className="text-green-600 bg-green-200/80 px-2 py-1 rounded-xl w-fit font-semibold">Welcome to Fresh Harvest</h6>
          <h1 className="text-3xl md:text-3xl xl:text-7xl font-bold leading-snug text-gray-900">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-gray-600 sm:max-w-md">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="px-6 py-3 bg-[#FF6A1A] text-white font-semibold rounded hover:bg-orange-600 transition">
            Shop Now
          </button>

          {/* Special Offer Card */}
          <div className=" flex gap-10 lg:justify-center">
            <div className="hidden lg:flex">
              <Image
                src="/images/diraction.png"
                alt="Fresh Salad"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="bg-[#ebebeb] shadow-lg rounded-xl p-0.5 md:p-4 flex justify-start lg:items-center gap-1 md:gap-4 w-[210px] md:w-[300px] lg:w-[300px]">
              <div>
                <p className="text-sm text-[#176d38] md:font-semibold">Special Offer</p>
                <h4 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900">Fresh Salad</h4>
                <p className="font-bold text-sm">
                  <span className='text-[#176d38]'> Up to</span> <span className=" text-sm md:text-xl lg:text-2xl">70%</span> off
                </p>
                <p className="text-xs font-semibold bg-[#176d38] text-white p-1 md:px-2 md:py-1 rounded-full inline-block mt-1">
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
          </div>

          {/* App Store Links */}
          <div className="relative mt-15 lg:mt-0">
            <p className="text-gray-600 mb-3">Download  app:</p>
            <div className="flex gap-4">
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
            <div className="absolute top-0 -left-10 -z-10 hidden lg:flex">
              <Image src="/images/pata.png" width={70} height={70} alt='pata' />
            </div>
          </div>
          <div className="absolute top-0 left-0 -z-10 hidden lg:flex">
            <Image src="/images/half-pata.png" width={70} height={70} alt='pata'  />
          </div>
          <div className="absolute top-0 -right-10 -z-10 hidden lg:flex">
            <Image src="/images/pata.png" width={70} height={70} alt='pata' className='drop-shadow-lg' style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.8))" }} />
          </div>
        </div>

        {/* banner image */}
        {/* Right Image */}
        <div className="lg:relative md:flex-1 md:items-end h-[350px] -z-10 lg:h-full absolute bottom-0 -right-20 sm:right-0 md:right-0 sm:h-[500px] md:h-[550px]">
          <Image
            src="/images/hero-image.png"
            alt="Girl with vegetables"
            width={550}
            height={50}
            className="object-center w-full h-full overflow-hidden"
          />
          <div className="absolute md:absolute top-2/5 left-10 z-10">
            <Image src="/images/sun-image.png" width={90} height={90} alt='pata' />
          </div>
        </div>

      </div>
    </div>
  )
}
