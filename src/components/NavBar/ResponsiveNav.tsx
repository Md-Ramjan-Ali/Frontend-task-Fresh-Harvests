'use client'
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import ProfileModal from './ProfileModal';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';


export default function ResponsiveNav() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] =
      useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showNav, setShowNav] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
    setShowNav(false); // Close mobile nav when opening profile
  };
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false)

  const handleRegistrationSuccess = () => {
    setIsRegistrationModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
    // User is now logged in, avatar will be shown
  };
  return (
    <div className='overflow-hidden'>
      <Navbar
        setIsRegistrationModalOpen={setIsRegistrationModalOpen}
        openNav={handleShowNav}
        onProfileClick={handleProfileClick}
      />
      <MobileNav
        setIsRegistrationModalOpen={setIsRegistrationModalOpen}
        showNav={showNav}
        closeNav={handleCloseNav}
        onProfileClick={handleProfileClick}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* Modals */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onSwitchToLogin={() => {
          setIsRegistrationModalOpen(false);
          setIsLoginModalOpen(true);
        }}
        onRegistrationSuccess={handleRegistrationSuccess}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegistration={() => {
          setIsLoginModalOpen(false);
          setIsRegistrationModalOpen(true);
        }}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  )
}
