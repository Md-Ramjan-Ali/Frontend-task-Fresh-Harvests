'use client'
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';


export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false)
  return (
    <div>
      <Navbar openNav={handleShowNav}></Navbar>
      <MobileNav showNav={showNav} closeNav={handleCloseNav}></MobileNav>
    </div>
  )
}
