import Ishy from "../assets/images/ishy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
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
            <a href="" className="flex flex-row">
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
            <a href="" className="flex flex-row">
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
            <a href="" className="flex flex-row">
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
          action=""
          className="md:ml-10  bg-amber-50/10 border border-sky-50/30 p-10 rounded-2xl"
        >
          <fieldset className="flex flex-col">
            <legend className="oxanium-font text-lg md:text-2xl text-left mb-8">
              Contact Details
            </legend>
            <label htmlFor="fullname" className="text-left">
              Full name:
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="e.g. John Doe"
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            />

            <label htmlFor="email" className="text-left">
              E-mail address:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@service.com"
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            />

            <label htmlFor="message" className="text-left">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              className="border border-sky-50/30 rounded-2xl px-3 py-2 focus:border-sky-400 mb-6"
            ></textarea>
            <input
              type="submit"
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
