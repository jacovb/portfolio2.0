import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function Project({title, description}) {
  return (
    <div className="container bg-white border-black border-2 drop-shadow-md text-black flex justify-center items-center my-2 md:my-0 px-2 w-60 md:w-44 lg:w-52 h-36 md:h-56 rounded-lg flex-wrap">
      <FontAwesomeIcon icon={faCode} className="h-10 mt-4" />
      <div className="w-full h-16 md:h-full flex flex-col justify-center md:justify-start pt-0 md:pt-6">
        <h2 className="font-medium text-xl md:font-bold md:text-2xl md:h-16">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-3 hidden md:block">{description}</p>
      </div>
    </div>
  )
}