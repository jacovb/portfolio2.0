import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

import TechnicalSkills from './TechnicalSkills';

export default function About() {
  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="about" className="w-full mt-20">
        <div className="relative flex">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-40 -translate-x-8 -translate-y-16 z-0">
            <path strokeWidth="2" stroke="#ff5555" fill="#ff8e8e" d="M28,-48.9C37.2,-37.7,46.3,-31.5,57.1,-21.9C68,-12.4,80.7,0.5,78.9,11.2C77.1,21.8,60.8,30.2,46.5,32.2C32.2,34.2,19.8,29.8,8.7,35.8C-2.3,41.7,-12.1,58.1,-24.8,63.8C-37.5,69.5,-53.1,64.5,-63.9,54.2C-74.7,43.8,-80.7,28.1,-83.1,11.9C-85.5,-4.3,-84.3,-21.1,-72.6,-27.5C-60.9,-33.8,-38.6,-29.7,-24.8,-38.8C-10.9,-47.9,-5.5,-70.2,2,-73.3C9.4,-76.4,18.8,-60.1,28,-48.9Z" transform="translate(100 100)" />
          </svg>
          <h1 className="text-3xl font-bold z-10">
            About
          </h1>
        </div>
        <div className="mt-16 mb-12 w-full max-w-3xl z-10 flex">
          <div className="flex-col">
            <h2 className="text-xl font-bold text-black max-w-lg">{`I'm a self-taught Frontend Developer, with a background in Architecture. I like to:`}</h2>
            <ul className="text-gray-600 text-lg list-disc mt-4">
              <li className="ml-6">build things</li>
              <li className="ml-6">solve problems</li>
              <li className="ml-6">mix creativity and logical thinking</li>
              <li className="ml-6">continuously learn</li>
            </ul>
            <TechnicalSkills />
            <div className="h-20 mt-2 flex flex-row items-center w-96 justify-around">
              <a href="https://github.com/jacovb" target="_blank" rel="noreferrer noopener" className="h-16 w-16 border-2 border-black rounded-full flex items-center justify-center hover:border-blue-700 hover:drop-shadow-xl hover:text-blue-700 transition ease-in-out">
                <FontAwesomeIcon icon={faGithub} className="h-8" />
              </a>

              <a href="https://www.linkedin.com/in/jaco-van-biljon-62b27422/" target="_blank" rel="noreferrer noopener" className="h-16 w-16 border-2 border-black rounded-full flex items-center justify-center hover:border-blue-700 hover:drop-shadow-xl hover:text-blue-700 transition ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} className="h-8" />
              </a>

              <a href="https://drive.google.com/file/d/1EUidTR5NCwkBD0CW_cyfLnmM_XGobtb9/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="h-16 w-16 border-2 border-black rounded-full flex flex-col items-center justify-center hover:border-blue-700 hover:drop-shadow-xl hover:text-blue-700 transition ease-in-out">
                <p className="font-bold text-sm" >CV</p>
                <FontAwesomeIcon icon={faDownload} className="h-4" />
              </a>

              <a href="#contact" className="h-16 w-16 border-2 border-black rounded-full flex items-center justify-center hover:border-blue-700 hover:drop-shadow-xl hover:text-blue-700 transition ease-in-out">
                <FontAwesomeIcon icon={faEnvelope} className="h-8" />
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}