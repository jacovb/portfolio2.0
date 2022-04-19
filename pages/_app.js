import "../styles/globals.css";
import Navbar from "../components/Navbar";
import NavDots from "../components/NavDots";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col bg-red-500 text-white font-poppins">
      <Navbar />
      <NavDots />
      <div className="container bg-green-500 flex justify-between items-center mx-auto px-8 mx-auto md:px-14 lg:px-24 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
