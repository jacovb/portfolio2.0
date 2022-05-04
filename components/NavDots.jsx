export default function NavDots({ pageNum }) {
  return(
    <>
      <div className="flex flex-wrap md:flex-nowrap">
        <nav className="container h-screen inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden lg:block">
          <div className="absolute left-50 top-50 transform -translate-y-1/2 space-y-6">
            <a href="#home" className={`${(pageNum == "page1" ? "selected-circle" : "")} nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
            </a>
            <a href="#about" className={`${(pageNum == "page2" ? "selected-circle" : "")} nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0">About</span>
            </a>
            <a href="#portfolio" className={`${(pageNum == "page3" ? "selected-circle" : "")} nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0">Projects</span>
            </a>
            <a href="#contact" className={`${(pageNum == "page4" ? "selected-circle" : "")} nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}