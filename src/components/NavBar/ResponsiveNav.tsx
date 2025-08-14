'use client'
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import ProfileModal from './ProfileModal';


export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
    setShowNav(false); // Close mobile nav when opening profile
  };
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false)
  return (
    <div className='overflow-hidden'>
      <Navbar
        openNav={handleShowNav}
        onProfileClick={handleProfileClick}
      />
      <MobileNav
        showNav={showNav}
        closeNav={handleCloseNav}
        onProfileClick={handleProfileClick}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  )
}
