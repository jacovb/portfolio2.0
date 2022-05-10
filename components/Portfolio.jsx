import Project from "./Project"
import { useState } from "react"
import MortgageModal from "./MortgageModal";
import TimesheetModal from "./TimesheetModal";
import BarberModal from "./BarberModal";

export default function Portfolio() {
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(false);
  const [isTimesheetModalOpen, setIsTimesheetModalOpen] = useState(false);
  const [isBarberModalOpen, setIsBarberModalOpen] = useState(false);

  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="projects" className="w-full">
        <h2 className="secondary-title">
          Projects
        </h2>
        <p className="section-paragraph">Projects I've been working on</p>
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full ">
          <button onClick={() => setIsMortgageModalOpen(true)}>
            <Project title="Mortgage Calculator" description="Calculate Monthly Payments" link="Demo" />
          </button>
          <button onClick={() => setIsTimesheetModalOpen(true)}>
            <Project title="Punch-Card" description="Timesheet Harvester" link="Demo" />
          </button>
          <button onClick={() => setIsBarberModalOpen(true)}>
            <Project title="The London Barber Co." description="Book and pay for your Barber appointments online" link="Demo" />
          </button>
        </div>
      </section>
      <MortgageModal isMortgageModalOpen={isMortgageModalOpen} setIsMortgageModalOpen={setIsMortgageModalOpen} />
      <TimesheetModal isTimesheetModalOpen={isTimesheetModalOpen} setIsTimesheetModalOpen={setIsTimesheetModalOpen} />
      <BarberModal isBarberModalOpen={isBarberModalOpen} setIsBarberModalOpen={setIsBarberModalOpen} />
    </div>
  )
}