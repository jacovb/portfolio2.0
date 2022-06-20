export default function ContactForm() {
  return (
    <form name="contact" method="POST">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="name">
          Name
        </label> 
        <br />
        <input type="text" name="name" id="name" />
      </p>
      <p>
        <label htmlFor="email">
          Email
        </label> 
        <br />
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="message">
          Message
        </label> <br />
        <textarea name="message" id="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}