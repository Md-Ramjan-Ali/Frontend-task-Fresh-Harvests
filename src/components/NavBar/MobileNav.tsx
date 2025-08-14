import React from 'react'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'


type props = {
  showNav: boolean,
  closeNav: () => void
  onProfileClick: () => void;
}
export default function MobileNav({ closeNav, showNav,
  onProfileClick, }: props) {
  const { data: session } = useSession();
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  const handleProfileClick = () => {
    onProfileClick();
    closeNav();
  };
  const handleLogOut = async () => {
    await signOut({ callbackUrl: '/' });
    toast.success('Logged out successfully!');
    closeNav();
  };
  return (
    <div>
      {/* overLay */}
      <div className={`fixed lg:hidden ${navOpen} inset-0 transform transition-all duration-500 z-[1002] h-screen bg-black opacity-70 w-full`}></div>
      <div className={` lg:hidden ${navOpen} flex flex-col justify-center space-y-5 fixed transform transition-all bg-[#FF6A1A] duration-500 delay-300 w-[80%] sm:w-[60%] h-full z-[1050]`}>
        {/* navLinks */}
        <div className="flex flex-col items-center justify-center space-y-5 text-white text-lg overflow-hidden">
          <Link className="text-white text-lg" href="/">Home</Link>
          <Link className="text-white text-lg" href="/shop">Shop</Link>
          <Link className="text-white text-lg" href="/about">About</Link>
          <Link className="text-white text-lg" href="/blog">Blog</Link>
        </div>
        <div className="text-white flex flex-col justify-center items-center space-y-5">
          <button className='flex gap-2 items-center text-lg'><FaHeart size={18} />
            Favorite</button>
          {session ? (
            <>
              <button
                onClick={handleProfileClick}
                className="text-lg text-white border-1 px-4 py-2 rounded-xl"
              >
                Profile
              </button>
              <button
                onClick={handleLogOut}
                className="text-lg text-white border-1 px-4 py-2 rounded-xl"
              >

                Log out
              </button>
            </>
          ) : (
            <button className="text-lg text-white border-1 px-4 py-2 rounded-xl">
              Sign in
            </button>
          )}
        </div>
        {/* close btn */}
        <MdClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
      </div>
    </div>
  )
}
