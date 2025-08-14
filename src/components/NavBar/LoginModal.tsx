"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegistration?: () => void;
  onLoginSuccess?: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToRegistration,
  onLoginSuccess,
}: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      console.log(result);
      if (result?.ok) {
        toast.success("Login successful! Welcome back!");
        onClose();
        setFormData({ email: "", password: "" });
        // Call the callback to handle successful login
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000090] bg-opacity-50 flex items-center justify-center z-[2000]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Log In</h2>
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
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-[#e55a15] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {onSwitchToRegistration && (
          <div className="mt-4 text-center">
            <span className="text-gray-600">
              Don&apos;t have an account?{" "}
            </span>
            <button
              onClick={onSwitchToRegistration}
              className="text-[#FF6A1A] hover:text-[#e55a15] font-medium"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
