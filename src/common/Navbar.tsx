import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [showingMobileMenu, setShowingMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setShowingMobileMenu(!showingMobileMenu);
  }

  return (
    <>
      <nav
        className="absolute mobile:fixed top-0 left-0 w-full backdrop-blur-xl p-page flex justify-between bg-background
    py-3 items-center z-[99] border-b border-foreground border-opacity-3  0"
      >
        <Link to="/" className="text-4xl font-bold scale-y-110 text-front">
          The Ice Blue
        </Link>
        <div className="flex gap-x-12 mobile:hidden">
          {[
            { title: "About", to: "/#about" },
            { title: "Contact Us", to: "#contact" },
            { title: "Gallery", to: "/gallery" },
          ].map((navItem) => (
            <Link to={navItem.to} className="text-mute brightness-50 text-lg">
              {navItem.title}
            </Link>
          ))}
        </div>
        <button className="widescreen:hidden" onClick={toggleMobileMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
            alt="menu icon"
            className="w-10"
          />
        </button>
      </nav>
      <div
        className="widecreen:hidden fixed top-12 right-4 z-[1001] duration-500 origin-top-right"
        style={{
          transform: showingMobileMenu ? "scale(100%)" : "scale(0%)",
          pointerEvents: showingMobileMenu ? "auto" : "none",
        }}
        onClick={toggleMobileMenu}
      >
        <div className="flex flex-col gap-y-4 widescreen:hidden bg-background p-4 rounded-xl shadow-lg">
          {[
            { title: "About", to: "/#about" },
            { title: "Contact Us", to: "#contact" },
            { title: "Gallery", to: "/gallery" },
          ].map((navItem) => (
            <Link to={navItem.to} className="text-mute brightness-50 text-xl">
              {navItem.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
