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
          <a href="">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a href="">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </a>
        </li>
        <li className="px-2">
          <a href="">
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
