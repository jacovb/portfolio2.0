import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import PaymentCalculator from "../images/PaymentCalculator.gif"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                    <div className="w-full bg-gray-300 mr-1.5 h-10 rounded cursor-pointer hover:bg-gray-400 focus:outline-none">
                      <FontAwesomeIcon icon={faEye} />
                      <a href="https://payment-calculator120.netlify.app/" target="_blank" className="w-full h-full flex justify-center items-center">Demo</a>
                    </div>
                    <div className="w-full bg-gray-300 ml-1.5 h-10 rounded cursor-pointer hover:bg-gray-400 focus:outline-none">
                      <FontAwesomeIcon icon={faGithub} />
                      <a href="https://github.com/jacovb/payment-calculator" target="_blank" className="w-full h-full flex justify-center items-center">Code</a>
                    </div>
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