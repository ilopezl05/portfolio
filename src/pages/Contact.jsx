import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [state, handleSubmit] = useForm("xzzjgeoe");
  if (state.succeeded) {
    return (
      <div className="text-center py-20">
        <h3 className="oxanium-font text-3xl md:text-5xl mb-4">Thank You!</h3>
        <p className="text-xl">Your message has been sent successfully.</p>
        <p className="mt-2 opacity-70">I'll get back to you soon!</p>
      </div>
    );
  }
  return (
    <main className="flex flex-col md:flex-row py-20">
      <section className="w-full md:w-[45%] lg:w-[40%]">
        <div>
          <h3 className="oxanium-font text-3xl md:text-5xl text-left">
            Let's work together
          </h3>
          <p className="text-left">
            Tell me about your project or idea and let's bring it to life.
          </p>
        </div>
        <ul className="py-10">
          <li className="p-3 my-4 border border-sky-50/20 rounded-2xl hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
            <a
              href="https://www.linkedin.com/in/ilopezl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <FontAwesomeIcon
                icon={faSquareLinkedin}
                size="3x"
                className="mr-2 "
              />
              <p className="flex flex-col text-left">
                LinkedIn
                <span className="opacity-50">Connect with me</span>
              </p>
            </a>
          </li>
          <li className="p-3 my-4 border border-sky-50/20 rounded-2xl hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
            <a
              href="https://x.com/ilopezl05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                size="3x"
                className="mr-2 "
              />
              <p className="flex flex-col text-left">
                X | Twitter
                <span className="opacity-50">Follow me</span>
              </p>
            </a>
          </li>
          <li className="p-3 my-4 border border-sky-50/20 rounded-2xl hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
            <a
              href="https://github.com/ilopezl05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                size="3x"
                className="mr-2 "
              />
              <p className="flex flex-col text-left">
                GitHub
                <span className="opacity-50">Explore my code</span>
              </p>
            </a>
          </li>
        </ul>
      </section>
      <section className="w-full  md:w-[60%] lg:w-[70%]">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="md:ml-10  bg-amber-50/10 border border-sky-50/30 p-10 rounded-2xl"
        >
          <fieldset className="flex flex-col">
            <legend className="oxanium-font text-lg md:text-2xl text-left mb-8">
              Contact Details
            </legend>
            <label htmlFor="name" className="text-left">
              Full name:
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="e.g. John Doe"
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            />
            {/* TODO: Style errors to fit the theme */}
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className="text-left">
              E-mail address:
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="name@service.com"
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-left">
              Message:
            </label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Your message..."
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <input
              type="submit"
              disabled={state.submitting}
              value="Send message"
              className="bg-sky-500 hover:bg-sky-400 rounded-2xl p-2"
            />
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default Contact;
