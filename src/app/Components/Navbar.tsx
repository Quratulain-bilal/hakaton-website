"use client";
import * as React from "react";
import Link from "next/link";

// Navigation Item Component
interface NavigationItemProps {
  label: string;
  href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, href }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsActive(window.location.pathname === href);
    };

    // Initialize state and listen for route changes
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [href]);

  return (
    <div
      className={`text-base font-semibold text-black whitespace-nowrap ${
        isActive ? "text-blue-500" : ""
      }`}
    >
      <Link href={href} aria-label={`Go to ${label}`}>
        {label}
      </Link>
    </div>
  );
};

// Navigation Component
const Navigation: React.FC = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "#shop11" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href:"#blog" },
  ];

  return (
    <div className="flex gap-8 justify-end items-center max-md:flex-col max-md:gap-4 max-md:w-full font-bold">
      {links.map((link) => (
        <NavigationItem key={link.href} label={link.label} href={link.href} />
      ))}
    </div>
  );
};

// Logo Component
const Logo: React.FC = () => {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d55a8a2d2ab044309fce0744c06d182736e72df26f9c4f122c50fce0a98437?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
      alt="Company Logo"
      className="object-contain grow shrink-0 max-w-full aspect-[8.85] w-[247px] max-md:mt-10"
    />
  );
};

// Header Component (Main Navbar)
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-20 py-9 w-full bg-amber-100 max-md:px-5 max-md:max-w-full">
      {/* Header Content */}
      <div className="flex justify-end items-center gap-8 max-md:flex-col">
        {/* Navigation Section */}
        <div className="w-full flex justify-end max-md:w-full">
          <Navigation />
        </div>

        {/* Logo Section */}
        <div className="flex flex-col ml-5 w-[36%] max-md:w-full max-md:mt-5">
          <Logo />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex justify-end gap-6 mt-5 w-full max-md:flex-row max-md:justify-center max-md:gap-4">
        <Link href="/profile" aria-label="Go to Profile">
          <i className="fas fa-user text-xl cursor-pointer"></i>
        </Link>
        <Link href="#cart11" aria-label="View Cart">
          <i className="fas fa-shopping-cart text-xl cursor-pointer"></i>
        </Link>
      </div>

      {/* Toggle button for small screens */}
      <div className="block md:hidden mt-5">
        <button
          onClick={toggleMenu}
          className="text-lg font-semibold text-black"
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Menu Links for Small Screens */}
      {isMenuOpen && (
        <div className="max-md:flex max-md:flex-col mt-5">
          {["Home", "Shop", "About", "Contact", "Blog"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} passHref>
              <div className="text-base font-medium text-black my-2">
                {item}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
