import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container fixed flex justify-between items-center py-6 px-8 md:px-14 lg:px-24 w-screen max-w-full">
      <div className="text-lg font-bold">Jaco.vanBiljon</div>
      <div className="hidden md:flex space-x-12 items-center">
        <Link href="/" className="text-selected">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">
          <button className="px-6 py-2 bg-theme font-bold">Contact</button>
        </Link>
      </div>
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
}
