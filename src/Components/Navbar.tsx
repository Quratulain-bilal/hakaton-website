
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger Icon
import { AiOutlineClose } from "react-icons/ai"; // Close Icon

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/Contact" },
    { label: "Blogs", href: "/Blogpage" },
  ];

  const actionIcons = [
    { icon: IoCartOutline, href: "/Cart", label: "Cart" },
    { icon: FaRegHeart, href: "/Single", label: "Wishlist" },
    { icon: FaRegUser, href: "/Account", label: "#account" },
    { icon: IoSearch, href: "#", label: "Search" },
  ];

  return (
    <header className="relative w-full bg-amber-100 px-6 py-6 md:px-16 z-50">
      <div className="flex items-center justify-between md:justify-end">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-3xl md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Icons for Small Screens */}
        <div className="flex md:hidden items-center gap-6 text-black">
          {actionIcons.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-2xl hover:text-blue-600 transition-colors duration-300"
              aria-label={label}
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* Navigation Links and Icons for Medium and Large Screens */}
        <div className="hidden md:flex items-center gap-44">
          {/* Navigation Links */}
          <nav className="flex text-lg font-semibold text-black gap-24">
            {navigationItems.map(({ label, href }) => (
              <Link key={label} href={href} legacyBehavior>
                <a
                  target="_blank" // Open all links in a new tab
                  rel="noopener noreferrer" // Ensure security
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-16 text-black">
            {actionIcons.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-2xl hover:text-blue-600 transition-colors duration-300"
                aria-label={label}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
          {/* Navigation Links */}
          <nav className="flex flex-col text-lg font-semibold text-black gap-4">
            {navigationItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-blue-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
