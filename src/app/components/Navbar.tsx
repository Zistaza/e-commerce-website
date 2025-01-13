import React from "react";
import { LuIceCreamBowl } from "react-icons/lu";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaCloudBolt } from "react-icons/fa6";
import { FaCarTunnel } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-lime-100 to-amber-200">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border bg-lime-300 border-amber-300 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            {/* Logo and Search */}
            <div className="flex items-center gap-2 mb-3 sm:mb-0">
              {/* Logo */}
              <LuIceCreamBowl className="w-8 h-16 text-pink-600 hover:text-cyan-500" />

              {/* Search */}
              <div className="relative hidden sm:block">
                <input
                  className="rounded-3xl py-2 px-3 outline-none text-xs w-full sm:w-[250px] md:w-[350px] pr-10"
                  placeholder="Search Here..."
                />
                <BsSearchHeartFill className="w-5 h-5 text-lime-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Icons and Cart */}
            <div className="flex justify-center items-center gap-3">
              {/* Bolt */}
              <FaCloudBolt className="w-5 h-5 text-pink-400 hidden sm:block" />

              {/* Promo Text */}
              <p className="text-xs sm:text-sm md:text-lg font-bold text-black hidden sm:block">
                "Sweetness on Wheels – Grab It Fast!"
                <span className="text-pink-400"> Just 15 Minutes Away!</span>
              </p>

              {/* Cart */}
              <FaCarTunnel className="w-6 h-6 rounded-full relative ring-2 ring-lime-500 hover:text-red-500 text-blue-700" />

              {/* Profile Picture */}
              <img
                className="inline-block w-10 h-10 sm:w-20 sm:h-20 rounded-full ring-2 ring-rose-400"
                src="https://as1.ftcdn.net/v2/jpg/02/32/59/98/1000_F_232599886_typki5F4H3mPBz2hTVnLzKaFq0jFsPBc.jpg"
                alt="main pic"
              />
            </div>

            {/* Mobile Search */}
            <div className="block sm:hidden w-full mt-3">
              <div className="relative">
                <input
                  className="rounded-3xl py-2 px-3 outline-none text-xs w-full pr-10"
                  placeholder="Search Here..."
                />
                
                <BsSearchHeartFill className="w-5 h-5 text-lime-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
