import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from "next/link";

export default function NavModal({isNavModalOpen, closeModal}) {
  return(
    <>
      <Transition appear show={isNavModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-start text-lg font-medium leading-6 text-gray-900"
                  >
                    Menu
                  </Dialog.Title>
                  <nav>
                    <div className="flex flex-col my-6">
                      <Link href="/#home">
                        <button onClick={closeModal} className="py-2 rounded-lg text-lg font-bold hover:bg-gray-300">Home</button>
                      </Link>
                      <Link href="/#about">
                        <button onClick={closeModal} className="py-2 rounded-lg text-lg font-bold hover:bg-gray-300">About</button>
                      </Link>
                      <Link href="/#portfolio">
                        <button onClick={closeModal} className="py-2 rounded-lg text-lg font-bold hover:bg-gray-300">Portfolio</button>
                      </Link>
                      <Link href="/#contact">
                        <button onClick={closeModal} className="py-2 rounded-lg text-lg font-bold hover:bg-gray-300">Contact</button>
                      </Link>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}