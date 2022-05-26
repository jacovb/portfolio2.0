import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function Project({title, description}) {
  return (
    <div className="container group bg-white border-black hover:border-blue-700 hover:drop-shadow-xl border-2 text-black hover:text-blue-700 flex justify-center items-center my-2 md:my-0 px-2 w-60 md:w-44 lg:w-52 h-36 md:h-56 rounded-lg flex-wrap transition-all ease-in-out">
      <FontAwesomeIcon icon={faCode} className="h-10 mt-4" />
      <div className="w-full h-16 md:h-40 flex flex-col justify-center md:justify-start pt-0 md:pt-6">
        <h2 className="font-medium text-xl md:font-bold md:text-2xl md:h-16">
          {title}
        </h2>
        <p className="text-sm text-gray-600 group-hover:text-blue-700 mt-3 hidden md:block transition ease-in-out">{description}</p>
      </div>
    </div>
  )
}