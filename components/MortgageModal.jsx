import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import PaymentCalculator from "../images/PaymentCalculator.gif"
import Tooltip from './Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg w-full flex justify-center text-2xl font-bold leading-6 text-gray-900"
                  >
                    Mortgage Calculator
                  </Dialog.Title>
                  <div className="mt-5">
                    <Image src={PaymentCalculator} className="rounded" />
                  </div>

                  <div className="mt-2 flex w-full justify-between">
                    <a href="https://payment-calculator120.netlify.app/" target="_blank" className="w-full flex justify-center items-center bg-gray-300 mr-1.5 h-10 rounded cursor-pointer hover:bg-gray-400 focus:outline-none">
                      <FontAwesomeIcon icon={faEye} className="h-5" />
                      <div className="ml-2 text-lg font-semibold">DEMO</div>
                    </a>
                    <a href="https://github.com/jacovb/payment-calculator" target="_blank" className="w-full flex justify-center items-center bg-gray-300 ml-1.5 h-10 rounded cursor-pointer hover:bg-gray-400 focus:outline-none">
                      <FontAwesomeIcon icon={faGithub} className="h-5" />
                      <div className="ml-2 text-lg font-semibold">CODE</div>
                    </a>
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
                  
                  <div className="mt-4">
                    <p>
                    Calculates and vizualises Mortgage Payments. See how Interest Rates and Initial Fixed Rate Periods impact your Oustanding Capital Amount
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeMortgageModal}
                    >
                      OK
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