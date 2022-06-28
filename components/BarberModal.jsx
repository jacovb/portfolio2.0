import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
// import BarberShop from "../images/BarberShop.gif"
import Tooltip from './Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faJs, faReact, faAws, faStripe} from "@fortawesome/free-brands-svg-icons";

export default function BarberModal({isBarberModalOpen, setIsBarberModalOpen, preview}) {
  function closeBarberModal() {
    setIsBarberModalOpen(false)
  }
  
  return (
    <>
      <Transition appear show={isBarberModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeBarberModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-black border-2 w-full max-w-2xl transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="border-b-2 border-black relative text-lg w-full h-12 flex justify-center items-center text-2xl font-bold leading-6 text-black bg-gray-200 rounded-t-lg"
                  >
                    The London Barber Co.
                  
                    <button
                      type="button"
                      className="border-l-2 border-b border-black absolute right-0 flex justify-center items-center rounded-tr-lg h-12 w-12 text-gray-600 hover:text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-0 transition ease-in-out"
                      onClick={closeBarberModal}
                    >
                      <FontAwesomeIcon icon={faXmark} className="h-5"/>
                    </button>
                  
                  </Dialog.Title>
                  
                  <div className="mt-3">
                    <p className="mx-6 md:mx-8 italic text-gray-600 text-left">
                      Book and Pay for an appointment at this Barber Shop.
                      A full-stack CRUD app utilising AWS technologies for Authorization and Data Storage. Payments by Stripe, built in Next.js
                    </p>
                  </div>

                  <div className="w-2/3 md:w-1/2 mx-auto h-10 mt-3 flex flex-row justify-around">
                    <Tooltip title="Javascript">
                      <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="React">
                      <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="Next.js">
                      <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" className="fill-gray-800">
                        <path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z"/>
                      </svg>
                    </Tooltip>
                    <Tooltip title="Tailwind CSS">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="graphql" className="h-8" />
                    </Tooltip>
                    <Tooltip title="AWS">
                      <FontAwesomeIcon icon={faAws} style={{color: "#F05340"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="Stripe">
                      <FontAwesomeIcon icon={faStripe} style={{color: "#6772e5"}} className="h-8"/>
                    </Tooltip>
                  </div>
                  
                  <div className="flex flex-col border-black border-2 rounded-lg m-4 drop-shadow-md">
                    <Image src={preview} priority="true"/>
                  </div>
                  <div className="flex flex-col border-black border-t-2 rounded-b-lg drop-shadow-md">
                    <div className="flex w-full justify-between border-black divide-x-2 divide-black">
                      <a href="https://main.d1z20x1lbvucuj.amplifyapp.com/" target="_blank" rel="noreferrer" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-bl-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faEye} className="h-5" />
                        <div className="ml-2 text-xl font-semibold">Demo</div>
                      </a>
                      <a href="https://github.com/jacovb/barber-appointments" target="_blank" rel="noreferrer" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-br-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faGithub} className="h-5" />
                        <div className="ml-2 text-xl font-semibold">Code</div>
                      </a>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}