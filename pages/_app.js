import "../styles/globals.css";
import Navbar from "../components/Navbar";
import NavDots from "../components/NavDots";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-body text-white font-poppins pb-12">
      <Navbar />
      <div className="container mt-16 flex justify-between items-center mx-auto px-8 mx-auto md:px-14 lg:px-24 w-full">
        <NavDots />
        {/* Portfolio */}
        <Component {...pageProps} />
      </div>
      <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="portfolio" class="secondary-title">
            Portfolio
          </h2>
          <p className="section-paragraph">Projects I've been working on</p>
        </section>
      </div>
    </div>
  );
}

export default MyApp;
