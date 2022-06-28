import Project from "./Project"
import { useState } from "react"
import MortgageModal from "./MortgageModal";
import TimesheetModal from "./TimesheetModal";
import BarberModal from "./BarberModal";

import PaymentCalculator from "../images/PaymentCalculator.gif"
import PunchCard from "../images/PunchCard.gif"
import BarberShop from "../images/BarberShop.gif"

export default function Portfolio() {
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(false);
  const [isTimesheetModalOpen, setIsTimesheetModalOpen] = useState(false);
  const [isBarberModalOpen, setIsBarberModalOpen] = useState(false);

  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full focus-visible:ring-0">
      <section id="projects" className="w-full mt-10 md:mt-0">
        <div className="relative flex">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-56 -translate-x-[3.3rem] -translate-y-[6.8rem] z-0">
            <path strokeWidth="2" stroke="#48cae4" fill="#90e0ef" d="M22.7,-37.5C28.3,-31.8,30.9,-23.5,40.8,-14.8C50.8,-6.1,68,3.1,71.1,13.1C74.1,23.1,62.9,33.9,50,36.4C37.1,38.8,22.5,32.9,10.4,37.1C-1.6,41.4,-11.2,55.9,-22.4,60C-33.6,64.1,-46.5,57.8,-55.3,47.8C-64.1,37.8,-68.8,24.2,-66.5,12.2C-64.2,0.1,-54.9,-10.3,-49.8,-23.3C-44.8,-36.3,-44,-51.8,-36.5,-56.7C-28.9,-61.5,-14.4,-55.6,-2.9,-51.1C8.6,-46.5,17.1,-43.3,22.7,-37.5Z" transform="translate(100 100)" />
          </svg>
          <h2 className="text-3xl font-bold z-10">
            Projects
          </h2>
        </div>
        <div className="flex flex-col items-center mt-12 md:mt-20 md:flex-row md:justify-between w-full max-w-3xl">
          <button onClick={() => setIsMortgageModalOpen(true)}>
            <Project title="Mortgage Calculator" description="Calculate Monthly Payments" />
          </button>
          <button onClick={() => setIsTimesheetModalOpen(true)}>
            <Project title="Punch-Card" description="Timesheet Harvester" />
          </button>
          <button onClick={() => setIsBarberModalOpen(true)}>
            <Project title="The London Barber Co." description="Book and pay for your Barber appointments" />
          </button>
        </div>
      </section>
      <MortgageModal isMortgageModalOpen={isMortgageModalOpen} setIsMortgageModalOpen={setIsMortgageModalOpen} preview={PaymentCalculator}/>
      <TimesheetModal isTimesheetModalOpen={isTimesheetModalOpen} setIsTimesheetModalOpen={setIsTimesheetModalOpen} preview={PunchCard}/>
      <BarberModal isBarberModalOpen={isBarberModalOpen} setIsBarberModalOpen={setIsBarberModalOpen} preview={BarberShop}/>
    </div>
  )
}