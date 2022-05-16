import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import PaymentCalculator from "../images/PaymentCalculator.gif"
import Tooltip from './Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faJs, faReact, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";

export default function MortgageModal({isMortgageModalOpen, setIsMortgageModalOpen}) {
  function closeMortgageModal() {
    setIsMortgageModalOpen(false)
  }


  
  return (
    <>
      <Transition appear show={isMortgageModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeMortgageModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg w-full flex justify-center text-2xl font-bold leading-6 text-gray-900"
                  >
                    Mortgage Calculator
                  </Dialog.Title>
                  
                  <div className="mt-4">
                    <p className="mx-6 md:mx-12 italic text-gray-600">
                    Calculates and visualises Loan or Mortgage Payments. Graph and Payment Schedule show how Interest Rates and Initial Fixed Rate Periods impact your Oustanding Capital Amount
                    </p>
                  </div>
                  
                  <div className="flex flex-col border-black border-2 rounded-lg mt-5">
                    
                    <Image src={PaymentCalculator} />

                    <div className="flex w-full justify-between border-t-2 border-black divide-x-2 divide-black">
                      <a href="https://payment-calculator120.netlify.app/" target="_blank" className="w-full flex justify-center items-center bg-gray-300 h-12 rounded-bl-md cursor-pointer hover:bg-gray-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faEye} className="h-5" />
                        <div className="ml-2 text-lg font-semibold">DEMO</div>
                      </a>
                      <a href="https://github.com/jacovb/payment-calculator" target="_blank" className="w-full flex justify-center items-center bg-gray-300 h-12 rounded-br-md cursor-pointer hover:bg-gray-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faGithub} className="h-5" />
                        <div className="ml-2 text-lg font-semibold">CODE</div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-2/3 md:w-1/2 mx-auto h-10 mt-4 flex flex-row justify-around">
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

                  <div className="absolute top-3 right-5">
                    <button
                      type="button"
                      className="flex justify-center rounded-md border border-transparent p-3 text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeMortgageModal}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
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