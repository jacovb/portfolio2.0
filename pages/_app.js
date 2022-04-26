import React, { useState } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const [pageNum, setPageNum] = useState("page1");

  function handleScroll(e) {
    let tempPage = Math.round(
      ((e.target.scrollTop + e.target.clientHeight) / e.target.scrollHeight) * 4
    );
    if (tempPage <= 1) {
      if (pageNum !== "page1") {
        setPageNum("page1");
      }
    } else if (tempPage <= 2) {
      if (pageNum !== "page2") {
        setPageNum("page2");
      }
    } else if (tempPage <= 3) {
      if (pageNum !== "page3") {
        setPageNum("page3");
      }
    } else if (tempPage <= 4) {
      if (pageNum !== "page4") {
        setPageNum("page4");
      }
    }
  }

  return (
    <div
      className="flex flex-col bg-red-500 text-white font-poppins max-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      onScroll={handleScroll}
    >
      <Navbar />
      <div className="container bg-green-500 flex justify-center items-center mx-auto px-8 mx-auto md:px-14 lg:px-24 w-full">
        <Component {...pageProps} pageNum={pageNum} />
      </div>
    </div>
  );
}

export default MyApp;
