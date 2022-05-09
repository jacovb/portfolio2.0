export default function Project({title, description, link}) {
  return (
    <div className="container bg-white border-black border-2 drop-shadow-md text-black flex justify-center items-center my-2 px-2 w-60 md:w-44 lg:w-52 h-36 md:h-56 rounded-lg flex-wrap">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="font-bold">
          {title}
        </h2>
        <p>{description}</p>
        <p>{link}</p>
      </div>
    </div>
  )
}