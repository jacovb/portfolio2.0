import Project from "./Project"
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="projects" className="w-full">
        <h2 className="secondary-title">
          Projects
        </h2>
        <p className="section-paragraph">Projects I've been working on</p>
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full ">
          <Link href="/calculator">
            <a>
              <Project title="Mortgage Calculator" description="Calculate Monthly Payments" link="Demo" />
            </a>
          </Link>
          <Link href="/timesheet">
            <a>
              <Project title="Punch-Card" description="Timesheet Harvester" link="Demo" />
            </a>
          </Link>
          <Link href="/barbershop">
            <a>
              <Project title="The London Barber Co." description="Book and pay for your Barber appointments online" link="Demo" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  )
}