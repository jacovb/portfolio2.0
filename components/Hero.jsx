import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <main id="home" className="container relative min-h-screen snap-start flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24 w-full">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-96 w-96 z-0 top-12 left-56">
          <path fill="#FA4D56" stroke="#000000" strokeWidth="1" d="M43.8,-63.3C55.6,-60.5,63.3,-46.5,63.7,-32.8C64.1,-19.2,57.2,-6,53.1,6.2C49.1,18.3,47.9,29.4,40.8,32.5C33.7,35.6,20.6,30.7,10.4,32.3C0.1,33.9,-7.3,42,-20.4,48C-33.6,54,-52.4,57.9,-56.2,50.4C-60.1,43,-49,24.2,-50.5,7.8C-52.1,-8.6,-66.3,-22.7,-65,-31.5C-63.8,-40.3,-47.2,-43.9,-33.7,-46C-20.3,-48.1,-10.2,-48.8,2.9,-53.3C16,-57.8,31.9,-66.2,43.8,-63.3Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-72 w-72 z-0 top-8 left-64">
          <path fill="#0F62FE" stroke="#000000" strokeWidth="1" d="M19.7,-35.7C29.9,-24.1,45.4,-26,52.2,-21C59,-15.9,57,-4,59,11.1C61,26.3,66.8,44.7,61.3,55.7C55.8,66.8,38.8,70.5,25.2,64.8C11.7,59.1,1.6,44,-5.4,34.6C-12.4,25.1,-16.4,21.4,-25.9,18.1C-35.3,14.9,-50.3,12.1,-51.1,7.3C-52,2.4,-38.7,-4.6,-33.3,-14.8C-28,-24.9,-30.6,-38.2,-26.3,-52.5C-22.1,-66.8,-11,-82,-3.1,-77.1C4.8,-72.3,9.5,-47.3,19.7,-35.7Z" transform="translate(100 100)" />
        </svg> */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-4/5 z-0 top-20 left-68">
          <path fill="#F1C21B" stroke="#000000" strokeWidth="1" d="M23.2,-44.2C29.1,-32.3,32.2,-24.2,38.9,-15.9C45.5,-7.6,55.7,0.9,56.2,9.2C56.7,17.5,47.7,25.5,38.9,31.4C30.2,37.3,21.7,41.1,13.9,39.8C6.2,38.6,-0.8,32.4,-8.9,30.1C-17,27.8,-26.4,29.4,-38.3,26.9C-50.3,24.4,-64.9,17.9,-70,7.7C-75.2,-2.5,-70.8,-16.4,-63.3,-27.3C-55.8,-38.3,-45.3,-46.2,-34.3,-55.7C-23.2,-65.2,-11.6,-76.3,-1.5,-74C8.7,-71.7,17.3,-56.1,23.2,-44.2Z" transform="translate(100 100)" />
        </svg>
      <div className="flex flex-wrap lg:ml-10 lg:max-w-2xl justify-center md:justify-start max-w-sm md:max-w-lg mt-0 md:my-36 z-10">
        <h1 className="font-bold text-3xl md:text-4xl text-left mb-2">
          Frontend Developer
        </h1>
        <h1 className="font-bold text-5xl md:text-6xl text-left">
          Jaco van Biljon
        </h1>
        <h1 className="flex items-center font-bold text-2xl md:text-3xl text-left mt-2">
          <FontAwesomeIcon icon={faLocationDot} className="h-6" />
          <div className="ml-4">London, UK</div>
        </h1>
      </div>
    </main>
  )
}