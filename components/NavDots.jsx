export default function NavDots({ pageNum }) {
  return(
    <>
      <div className="flex flex-wrap md:flex-nowrap">
        <nav className="container h-screen inline-block lg:mr-24 lg:w-4 fixed left-[5%] hidden lg:block">
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 space-y-6">
            <a href="#home" className={`${(pageNum == "page1" ? "border-blue-700 bg-blue-700" : "border-gray-900")} transition-all ease-in-out group block w-7 h-7 rounded-full border-2 hover:border-blue-700 bg-white`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0 group-hover:opacity-100">Home</span>
            </a>
            <a href="#about" className={`${(pageNum == "page2" ? "border-blue-700 bg-blue-700" : "border-gray-900")} transition-all ease-in-out group block w-7 h-7 rounded-full border-2 hover:border-blue-700 bg-white`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0 group-hover:opacity-100">About</span>
            </a>
            <a href="#projects" className={`${(pageNum == "page3" ? "border-blue-700 bg-blue-700" : "border-gray-900")} transition-all ease-in-out group block w-7 h-7 rounded-full border-2 hover:border-blue-700 bg-white`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0 group-hover:opacity-100">Projects</span>
            </a>
            <a href="#contact" className={`${(pageNum == "page4" ? "border-blue-700 bg-blue-700" : "border-gray-900")} transition-all ease-in-out group block w-7 h-7 rounded-full border-2 hover:border-blue-700 bg-white`}>
              <span className="bg-black text-white px-2 py-1 rounded-md ml-10 opacity-0 group-hover:opacity-100">Contact</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}