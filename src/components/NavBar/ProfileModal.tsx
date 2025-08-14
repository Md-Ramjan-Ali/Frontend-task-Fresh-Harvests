"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { data: session } = useSession();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match!");
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long!");
      setLoading(false);
      return;
    }

    try {
      // Here you would typically make an API call to change the password
      // For now, we'll just simulate a successful password change
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Password changed successfully!");
      setIsChangingPassword(false);
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Failed to change password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    setIsChangingPassword(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000bf] flex items-center justify-center z-[2000]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Picture Section */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FF6A1A] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl font-bold">
                {session?.user?.name
                  ? session.user.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)
                  : "U"}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {session?.user?.name || "User"}
            </h3>
          </div>

          {/* Password Change Form */}
          {isChangingPassword ? (
            <form
              onSubmit={handleChangePassword}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-[#e55a15] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading
                    ? "Changing..."
                    : "Change Password"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsChangingPassword(true)}
                  className="w-full bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-[#e55a15] transition-colors duration-200"
                >
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
