'use client'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

type props = {
  openNav: () => void
}
export default function Navbar({ openNav }: props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true)
      if (window.scrollY < 90) setNavBg(false)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const pathname = usePathname()
  const bgClass = pathname === '/'
    ? (navBg ? 'bg-[#FF6A1A] text-white shadow-lg' : 'bg-transparent')
    : (navBg ? 'bg-[#FF6A1A] text-white shadow-lg' : 'bg-transparent');

  const linkClass = (href: string) =>
    pathname === href
      ? ' font-semibold border-b-3 border-green-500 pb-1'
      : 'hover:text-green-400'
  return (
    <div className={` fixed w-full transition-all duration-300 h-[12vh] z-[1000] ${bgClass}`}>
      <div className="flex justify-between items-center mx-auto h-full w-[95%] lg:w-[90%]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
          <h1 className='text-sm sm:text-xl lg:text-2xl font-bold'>Fresh Harvests</h1>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/shop" className={linkClass('/shop')}>
            Shop
          </Link>
          <Link href="/about" className={linkClass('/about')}>
            About
          </Link>
          <Link href="/blog" className={linkClass('/blog')}>
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-1">
          <button
            className={`px-4 py-2 hidden lg:flex rounded-lg font-medium  lg:items-center gap-1 cursor-pointer hover:text-rose-500 ${pathname === '/' && !navBg ? 'text-white bg-transparent' : 'text-black bg-white'}`}
          >
            <FaHeart size={18} className={`  ${pathname === '/' && !navBg ? 'text-white bg-transparent' : 'text-[#749b3f] bg-white'} `} />
            Favorite
          </button>

          <button
            className={`relative px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer hover:text-rose-500  ${pathname === '/' && !navBg ? 'text-white bg-transparent' : 'text-black bg-white'}`}
          >
            {/* Cart Icon */}
            <div className="relative">
              <FaCartShopping size={22} className={`  ${pathname === '/' && !navBg ? 'text-white bg-transparent' : 'text-[#749b3f] bg-white'} `} />

              {/* Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </div>
            <span className='hidden md:flex'> Cart</span>
          </button>

          <button
            className={`px-4 py-2 hidden lg:flex border rounded-lg font-medium  lg:items-center gap-1 cursor-pointer hover:text-rose-500 ${pathname === '/' && !navBg ? 'text-white bg-transparent border-white' : 'text-black bg-white border-black'}`}
          >
            sign in
          </button>
          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu onClick={openNav} className='w-7 h-7 lg:hidden text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
