export default function NavDots() {
  return(
    <div className="flex flex-wrap md:flex-nowrap">

      <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden lg:block">
        <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
          <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
          </a>
          <a href="#" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">About</span>
          </a>
          <a href="#" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Portfolio</span>
          </a>
          <a href="#" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
          </a>
        </div>
      </nav>

      <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Building Solutions</h1>
      </div>
    </div>
  )
}