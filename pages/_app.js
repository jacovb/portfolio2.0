import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-body text-white font-poppins pb-12">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
