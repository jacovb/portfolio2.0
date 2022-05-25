import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import PunchCard from "../images/PunchCard.gif"
import Tooltip from './Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faJs, faReact, faAws, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";

export default function TimesheetModal({isTimesheetModalOpen, setIsTimesheetModalOpen}) {
  function closeTimesheetModal() {
    setIsTimesheetModalOpen(false)
  }
  
  return (
    <>
      <Transition appear show={isTimesheetModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeTimesheetModal}>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="relative text-lg w-full h-10 flex justify-center items-center text-2xl font-bold leading-6 text-black bg-gray-200 rounded-lg"
                  >
                    Punch-Card
                  
                    <button
                      type="button"
                      className="absolute right-0 flex justify-center items-center rounded-r-lg border border-transparent h-10 w-10 text-gray-600 hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:ring-0"
                      onClick={closeTimesheetModal}
                    >
                      <FontAwesomeIcon icon={faXmark} className="h-5"/>
                    </button>
                  
                  </Dialog.Title>
                  
                  <div className="mt-3">
                    <p className="mx-6 md:mx-10 italic text-gray-600 text-left">
                      A full-stack CRUD project utilising AWS Cognito for Authorization and AWS Dynamo with GraphQL to access the database.
                    </p>
                    <p className="mx-6 md:mx-10 italic mt-2 text-gray-600 text-left">
                      Employees Add, Edit and Manage 
                      timesheet entries. The app automatically creates reports that can be used by employers for 
                      business and resource management. 
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
                    <Tooltip title="AWS">
                      <FontAwesomeIcon icon={faAws} style={{color: "#F05340"}} className="h-8"/>
                    </Tooltip>
                    <Tooltip title="GraphQL">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="graphql" className="h-8" />
                    </Tooltip>
                  </div>
                  
                  <div className="flex flex-col border-black border-2 rounded-lg mt-3 drop-shadow-md">
                    <Image src={PunchCard} />
                    <div className="flex w-full justify-between border-t-2 border-black divide-x-2 divide-black">
                      <a href="https://master.d13ledzsxl0qxj.amplifyapp.com/" target="_blank" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-bl-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faEye} className="h-5" />
                        <div className="ml-2 text-lg font-semibold">DEMO</div>
                      </a>
                      <a href="https://github.com/jacovb/time-harvest" target="_blank" className="w-full flex justify-center items-center bg-gray-200 h-12 rounded-br-md cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none transition ease-in-out">
                        <FontAwesomeIcon icon={faGithub} className="h-5" />
                        <div className="ml-2 text-lg font-semibold">CODE</div>
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