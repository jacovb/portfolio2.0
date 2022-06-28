import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
// import PaymentCalculator from "../images/PaymentCalculator.gif"
import Tooltip from './Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faJs, faReact, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";

export default function MortgageModal({isMortgageModalOpen, setIsMortgageModalOpen, preview}) {
  function closeMortgageModal() {
    setIsMortgageModalOpen(false)
  }

  return (
    <>
      <Transition appear show={isMortgageModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeMortgageModal}>
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
                    Mortgage Calculator
                  
                    <button
                      type="button"
                      className="border-l-2 border-b border-black absolute right-0 flex justify-center items-center rounded-tr-lg h-12 w-12 text-gray-600 hover:text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-0 transition ease-in-out"
                      onClick={closeMortgageModal}
                    >
                      <FontAwesomeIcon icon={faXmark} className="h-6"/>
                    </button>
                  
                  </Dialog.Title>
                  
                  <div className="mt-3">
                    <p className="mx-6 md:mx-8 italic text-gray-600 text-left">
                    Calculates and visualises Loan or Mortgage Payments. Graph and Payment Schedule show how payments reduce your Outstanding Capital Amount over a period of time.
                    </p>
                  </div>

                  <div className="w-2/3 md:w-1/2 mx-auto h-10 mt-3 flex flex-row justify-around">
                    <Tooltip title="HTML">
                      <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="CSS">
                      <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="Javascript">
                      <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="React">
                      <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}} className="h-8"/>
                    </Tooltip>
                  </div>
                  
                  <div className="flex flex-col border-black border-2 rounded-lg m-4 drop-shadow-md">
                    <Image src={preview} priority="true"/>
                  </div>
                  <div className="flex flex-col border-black border-t-2 rounded-b-lg drop-shadow-md">
                    <div className="flex w-full justify-between border-black divide-x-2 divide-black">
                      <a href="https://payment-calculator120.netlify.app/" target="_blank" rel="noreferrer" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-bl-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faEye} className="h-5" />
                        <div className="ml-2 text-xl font-semibold">Demo</div>
                      </a>
                      <a href="https://github.com/jacovb/payment-calculator" target="_blank" rel="noreferrer" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-br-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
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