import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="contact" className="w-full mt-20">
        <div className="flex flex-row justify-between">
          <div className="relative flex">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-52 -translate-x-14 -translate-y-[6.7rem] z-0">
              <path strokeWidth="2" stroke="#ffd000" fill="#ffdd00" d="M35,-60.7C40.6,-50.9,37.1,-33.1,46.1,-19.3C55.1,-5.5,76.6,4.3,82.8,17.1C89,29.9,80,45.7,67.4,56.3C54.9,66.8,38.8,72.2,25,69C11.1,65.7,-0.6,53.8,-14.7,49.8C-28.8,45.7,-45.3,49.6,-56.3,44.5C-67.4,39.4,-73,25.4,-70.1,13.1C-67.1,0.8,-55.5,-9.6,-45.2,-15.7C-34.8,-21.9,-25.5,-23.6,-18.2,-32.7C-10.9,-41.7,-5.4,-58,4.6,-65.2C14.7,-72.4,29.4,-70.5,35,-60.7Z" transform="translate(100 100)" />
            </svg>
            <h2 className="text-3xl font-bold z-10">
              Contact
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="h-6 text-gray-600" />
              <div className="ml-2 font-medium text-lg text-gray-600">vbiljon@gmail.com</div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="h-6 text-gray-600"/>
              <div className="ml-2 font-medium text-lg text-gray-600">074 7007 4039</div>
            </div>
          </div>
          <div className="w-24 hidden md:block"></div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}