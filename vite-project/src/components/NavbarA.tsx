import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/* Navbar with overlapping effect */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white/40 backdrop-blur-md shadow-lg">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              {/* Placeholder for your SVG logo */}
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
              >
                <circle cx="150" cy="150" r="150" fill="#3B1E54" />
              </svg>
              Brand
            </a>

            {/* Mobile menu trigger */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen ? "visible opacity-100" : ""
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
              }`}
            >
              {/* Home Link */}
              <li role="none" className="flex items-stretch">
                <Link
                  to="/admin"
                  role="menuitem"
                  className="flex items-center gap-2 py-4 text-xl transition-colors duration-300 hover:text-[#8174A0] focus:text-[#A888B5] lg:px-8"
                >
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* Cards Link */}
              <li role="none" className="flex items-stretch">
                <Link
                  to="/admin/cards"
                  role="menuitem"
                  className="flex items-center gap-2 py-4 text-xl text-[#A888B5] transition-colors duration-300 hover:text-[#EFB6C8] focus:text-[#EFB6C8] lg:px-8"
                >
                  <span>Cards</span>
                </Link>
              </li>

              {/* Order Link */}
              <li role="none" className="flex items-stretch">
                <Link
                  to="/admin/vieworders"
                  role="menuitem"
                  className="flex items-center gap-2 py-4 text-xl transition-colors duration-300 hover:text-[#FFD2A0] focus:text-[#3B1E54] lg:px-8"
                >
                  <span>Orders</span>
                </Link>
              </li>

              {/* Order Link */}
              <li role="none" className="flex items-stretch">
                <Link
                  to="/admin/addcard"
                  role="menuitem"
                  className="flex items-center gap-2 py-4 text-xl transition-colors duration-300 hover:text-[#FFD2A0] focus:text-[#3B1E54] lg:px-8"
                >
                  <span>Add Card</span>
                </Link>
              </li>
            </ul>

            {/* Contact Button */}
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center gap-4 rounded-full border-2 border-[#3B1E54] bg-[#3B1E54] px-5 py-2 text-white hover:bg-[#3B1E54] hover:text-white lg:px-7 lg:py-3 lg:text-xl">
                Log Out
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
