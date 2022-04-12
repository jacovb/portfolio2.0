import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center h-12">
        <div className="flex items-center pl-6 divide-x divide-gray-700">
          <Link href="/">Home</Link>
          <Link href="/prices">Prices</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
