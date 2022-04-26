import Project from "./Project"
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container min-h-screen snap-start bg-purple-500 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section id="portfolio" className="w-full">
        <h2 className="secondary-title">
          Portfolio
        </h2>
        <p className="section-paragraph">Projects I've been working on</p>
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <Link href="/calculator">
            <a>
              <Project />
            </a>
          </Link>
          <Link href="/timesheet">
            <a>
              <Project />
            </a>
          </Link>
          <Link href="/barbershop">
            <a>
              <Project />
            </a>
          </Link>
        </div>
      </section>
    </div>
  )
}