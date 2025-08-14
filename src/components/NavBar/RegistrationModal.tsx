"use client";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onRegistrationSuccess?: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  onSwitchToLogin,
  onRegistrationSuccess,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        "https://code-commando.com/api/v1";
      const response = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        onClose();
        setFormData({ fullName: "", email: "", password: "" });
        toast.success(
          "Registration successful! Welcome to Fresh Harvests!"
        );
        // Call the callback to open login modal
        if (onRegistrationSuccess) {
          onRegistrationSuccess();
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (err) {
      console.log(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000bf] flex items-center justify-center z-[2000]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h1></h1>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-[#e55a15] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or Sign in with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
            <FcGoogle className="text-red-500" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-gray-600">
            Already have an account?{" "}
          </span>
          <button
            onClick={onSwitchToLogin}
            className="text-[#FF6A1A] hover:text-[#e55a15] font-medium cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
