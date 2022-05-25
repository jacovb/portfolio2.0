export default function About() {
  return (
    <div className="container min-h-screen snap-start flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
      <section id="about" className="w-full">
        <h2 className="before:content-[''] before:block before:w-12 before:h-2 before:bg-blue-700 before:rounded-full before:mb-1 text-3xl font-bold">
          About
        </h2>
        <p className="text-gray-500 my-6 w-full max-w-3xl">Something about me</p>
      </section>
    </div>
  )
}