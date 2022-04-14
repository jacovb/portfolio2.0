import "../styles/globals.css";
import Navbar from "../components/Navbar";
import NavDots from "../components/NavDots";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-body text-white font-poppins pb-12">
      <Navbar />
      <div className="container mt-16 flex justify-between items-center mx-auto px-8 mx-auto md:px-14 lg:px-24 w-full">
        <NavDots />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
