'use client'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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
  const bgClass = pathname === '/' ? (navBg ? 'bg-blue-950 shadow-lg' : 'bg-transparent') : 'bg-transparent'
  return (
    <div className={` fixed w-full transition-all duration-300 h-[12vh] z-[1000] ${bgClass}`}>
      <div className="flex justify-between items-center mx-auto h-full w-[95%] lg:w-[90%]">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
          <h1 className=''>Fresh Harvests</h1>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">Shop</Link>
          <Link href="/services">About</Link>
          <Link href="/contact">Block</Link>
        </div>
        <div className="flex items-center space-x-4">

          <button className={`px-4 py-2 ${navBg ? 'bg-white text-black' : 'bg-transparent '} rounded-lg font-medium flex items-center gap-1 cursor-pointer hover:text-rose-500`}>favorite</button>
          <button className={`px-4 py-2 ${navBg ? 'bg-white text-black' : 'bg-transparent '} rounded-lg font-medium flex items-center gap-1 cursor-pointer hover:text-rose-500`}>cart</button>
         
          <button className={`px-4 py-2 ${navBg ? 'bg-white text-black' : 'bg-transparent '} rounded-lg font-medium flex items-center gap-1 cursor-pointer hover:text-rose-500 border-1 border-white`}>sign in</button>
          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu onClick={openNav} className='w-7 h-7 lg:hidden text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
