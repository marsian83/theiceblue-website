import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav
      className="absolute top-0 left-0 w-full backdrop-blur-xl p-page flex justify-between bg-background
    py-3 items-center z-[99] border-b border-foreground border-opacity-3  0"
    >
      <Link to="/" className="text-4xl font-bold scale-y-110 text-front">
        The Ice Blue
      </Link>
      <div className="flex gap-x-12">
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
    </nav>
  );
}
