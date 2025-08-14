// components/Footer.tsx
import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + App Download */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/logo.png" alt="Fresh Harvests" width={40} height={40} />
            <span className="font-bold text-lg">Fresh Harvests</span>
          </div>
          <div className="">
            <p className="mb-3 font-medium">Download App:</p>
            <div className="flex gap-3">
              <Image src="/images/app-store.png" alt="App Store" width={120} height={40} className="rounded" />
              <Image src="/images/google-play.png" alt="Google Play" width={120} height={40} className="rounded" />
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="font-semibold mb-4">Quick links 1</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Shop</a></li>
            <li><a href="#" className="hover:text-green-600">About us</a></li>
            <li><a href="#" className="hover:text-green-600">Blog</a></li>
            <li><a href="#" className="hover:text-green-600">Detail Blog</a></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="font-semibold mb-4">Quick links 2</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">Favorites</a></li>
            <li><a href="#" className="hover:text-green-600">Cart</a></li>
            <li><a href="#" className="hover:text-green-600">Sign in</a></li>
            <li><a href="#" className="hover:text-green-600">Register</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" /> 1234 5678 90
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" /> freshharvests@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" /> Tanjung Sari Street, Pontianak, Indonesia
            </li>
          </ul>
          <p className="mt-4 mb-2 font-medium">Accepted Payment Methods:</p>
          <div className="flex gap-3">
            <Image src="/images/visa.png" alt="Visa" width={50} height={30} />
            <Image src="/images/paypal.png" alt="PayPal" width={50} height={30} />
            <Image src="/images/pay.png" alt="Apple Pay" width={50} height={30} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-4 flex flex-col md:flex-row-reverse justify-between items-center gap-4 font-bold">
       
        <div className="flex gap-4 text-gray-600">
          <a href="#" className="bg-black text-white p-2 rounded-full"><FaTwitter /></a>
          <a href="#" className="bg-black text-white p-2 rounded-full"><FaFacebookF /></a>
          <a href="#" className="bg-black text-white p-2 rounded-full"><FaInstagram /></a>
        </div>
        <p className="text-xs md:text-sm">
          © Copyright 2024, All Rights Reserved by Banana Studio
        </p>
      </div>
    </footer>
  );
}
