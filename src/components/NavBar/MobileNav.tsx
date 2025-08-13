import React from 'react'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'


type props = {
  showNav: boolean,
  closeNav: () => void
}
export default function MobileNav({ closeNav, showNav }: props) {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* overLay */}
      <div className={`fixed lg:hidden ${navOpen} inset-0 transform transition-all duration-500 z-[1002] h-screen bg-black opacity-70 w-full`}></div>
      <div className={` lg:hidden ${navOpen} flex flex-col justify-center space-y-5 fixed transform transition-all bg-rose-500 duration-500 delay-300 w-[80%] sm:w-[60%] h-full z-[1050]`}>
        {/* navLinks */}
          <Link href="/">Home</Link>
          <Link href="/about">Shop</Link>
          <Link href="/services">About</Link>
          <Link href="/contact">Block</Link>
        {/* close btn */}
        <MdClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
      </div>
    </div>
  )
}
