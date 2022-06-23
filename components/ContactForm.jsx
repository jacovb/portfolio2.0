export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" autoComplete="off" className="flex justify-center items-center flex-col w-full">
      <input type="hidden" name="form-name" value="contact" />
      <p className="w-96 h-18">
        <label htmlFor="name" className="pl-4 text-base text-gray-500">
          Name
        </label> 
        <br />
        <input type="text" name="name" id="name" className="w-full py-2 px-4 border-2 border-black rounded-lg focus:bg-gray-100 hover:drop-shadow-xl focus:drop-shadow-xl transition ease-in-out"/>
      </p>
      <p className="w-96 h-18 mt-1">
        <label htmlFor="email" className="pl-4 text-base text-gray-500">
          Email
        </label> 
        <br />
        <input type="email" name="email" id="email" className="w-full py-2 px-4 border-2 border-black rounded-lg focus:bg-gray-100 hover:drop-shadow-xl focus:drop-shadow-xl transition ease-in-out"/>
      </p>
      <p className="w-96 h-48 mt-1">
        <label htmlFor="message" className="pl-4 text-base text-gray-500">
          Message
        </label> <br />
        <textarea name="message" id="message" className="w-full h-36 py-2 px-4 border-2 border-black rounded-lg focus:bg-gray-100 resize-none hover:drop-shadow-xl focus:drop-shadow-xl transition ease-in-out"></textarea>
      </p>
      <p>
        <button type="submit" className="hover:bg-blue-200 hover:text-blue-700 transition ease-in-out px-6 py-2 bg-blue-700 text-white font-bold rounded-full">Send</button>
      </p>
    </form>
  )
}