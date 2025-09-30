import { Link } from "react-router-dom";

function PrimaryCTAButton(props) {
  return (
    <Link
      to={props.resourceLink}
      className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5"
    >
      {props.text}
    </Link>
  );
}

export default PrimaryCTAButton;
