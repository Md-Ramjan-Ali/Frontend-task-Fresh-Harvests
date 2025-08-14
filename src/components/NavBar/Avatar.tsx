"use client";
import React, { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface AvatarProps {
  onProfileClick: () => void;
}

export default function Avatar({ onProfileClick }: AvatarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
    toast.success('Logged out successfully!');

    setIsDropdownOpen(false);
  };

  const handleProfileClick = () => {
    onProfileClick();
    setIsDropdownOpen(false);
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6A1A] text-white font-semibold hover:bg-[#e55a15] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6A1A] focus:ring-offset-2"
        aria-label="User menu"
      >
        {session?.user?.name ? (
          getUserInitials(session.user.name)
        ) : (
          <FaUser size={16} />
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500">
              {session?.user?.email}
            </p>
          </div>

          <button
            onClick={handleProfileClick}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            <FaUser className="mr-3" size={14} />
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            <FaSignOutAlt className="mr-3" size={14} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
