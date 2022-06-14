export default function About() {
  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="about" className="w-full">
        <div className="relative flex">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-40 -translate-x-10 -translate-y-14 z-0">
            <path strokeWidth="3" stroke="#fecd00" fill="#ffd500" d="M38.7,-45.6C54.4,-41.8,74.4,-36.2,80.2,-24.6C86.1,-12.9,77.9,4.9,66.6,16C55.2,27.1,40.6,31.4,29,37.7C17.4,43.9,8.7,52,-1.3,53.8C-11.4,55.7,-22.7,51.3,-35.3,45.4C-47.9,39.5,-61.7,32,-66,21C-70.2,9.9,-64.9,-4.7,-58.8,-17.7C-52.7,-30.7,-45.7,-42.1,-35.8,-47.7C-25.9,-53.3,-12.9,-53.2,-0.7,-52.2C11.5,-51.2,23,-49.3,38.7,-45.6Z" transform="translate(100 100)" />
          </svg>
          <h1 className="text-3xl font-bold z-20">
            About
          </h1>
        </div>
        <p className="text-gray-500 my-10 w-full max-w-3xl z-10">Something about me</p>
      </section>
    </div>
  )
}