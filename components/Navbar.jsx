import React, { useState } from "react";
import Link from "next/link";
import NavModal from "./NavModal";

export default function Navbar({ pageNum }) {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false)

  function closeModal() {
    setIsNavModalOpen(false)
  }

  function openModal() {
    setIsNavModalOpen(true)
  }

  
  return (
    <nav className="container fixed flex justify-end md:justify-between items-center py-6 px-8 md:px-14 lg:px-24 w-screen max-w-full z-[8]">
      <div className="hidden md:block text-lg font-bold">
        <Link href="/#home" passHref>
          <a className="hover:text-blue-700 transition-all ease-in-out">{(pageNum !== "page1" ? "Jaco.vanBiljon" : "")}</a>
        </Link>
      </div>
      <div className="hidden md:flex space-x-2 items-center">
        <Link href="/#home" passHref>
          <a className="hover:bg-blue-200 hover:text-blue-700 transition ease-in-out px-6 py-2 rounded-full font-bold">Home</a>
        </Link>
        <Link href="/#about" passHref>
          <a className="hover:bg-blue-200 hover:text-blue-700 transition ease-in-out px-6 py-2 rounded-full font-bold">About</a>
        </Link>
        <Link href="/#projects" passHref>
          <a className="hover:bg-blue-200 hover:text-blue-700 transition ease-in-out px-6 py-2 rounded-full font-bold">Projects</a>
        </Link>
        <Link href="/#contact" passHref>
          <a className="hover:bg-blue-200 hover:text-blue-700 transition ease-in-out px-6 py-2 bg-blue-700 text-white font-bold rounded-full">Contact</a>
        </Link>
      </div>
      <button className="md:hidden" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <NavModal isNavModalOpen={isNavModalOpen} closeModal={closeModal} />
    </nav>
  );
}
