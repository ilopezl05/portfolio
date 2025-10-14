import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex flex-col mt-auto">
      <ul className="flex justify-center py-2">
        <li className="px-2">
          <a
            href="https://github.com/ilopezl05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://www.linkedin.com/in/ilopezl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://x.com/ilopezl05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://www.instagram.com/llopz_5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </li>
      </ul>
      <p className="py-2">
        Copyright &copy; 2025 IshyCodes. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
