import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <main id="home" className="container min-h-screen snap-start flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24 w-full">
      <div className="relative flex flex-wrap lg:ml-10 lg:max-w-2xl justify-center md:justify-start max-w-sm md:max-w-lg mt-0 md:my-36">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-54 w-full z-0 -translate-y-1/3 lg:-translate-y-1/3">
          <path fill="#ffd500" d="M26.1,-34.5C36,-34.3,47.6,-30.7,49.4,-23.5C51.2,-16.4,43.1,-5.7,43.9,8.1C44.8,21.9,54.5,38.8,50.4,43.9C46.4,49.1,28.4,42.5,16.4,37.9C4.3,33.2,-2,30.6,-16.2,35.4C-30.4,40.3,-52.7,52.6,-66.1,50.1C-79.5,47.5,-84.2,30.1,-82.4,14.4C-80.7,-1.3,-72.7,-15.4,-65.5,-29.3C-58.2,-43.2,-51.8,-56.9,-41,-56.7C-30.3,-56.4,-15.1,-42.2,-3.5,-36.7C8.1,-31.3,16.3,-34.6,26.1,-34.5Z" transform="translate(100 100)" />
        </svg>
        <h1 className="font-bold text-3xl md:text-4xl md:text-left mb-2 z-10">
          Jaco van Biljon
        </h1>
        <h1 className="font-bold text-center md:text-left text-5xl md:text-6xl z-10">
          Frontend Developer
        </h1>
        <h1 className="flex items-center font-bold text-2xl md:text-3xl md:text-left mt-2 z-10">
          <FontAwesomeIcon icon={faLocationDot} className="h-6" />
          <div className="ml-4">London, UK</div>
        </h1>
      </div>
    </main>
  )
}