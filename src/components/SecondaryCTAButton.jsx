import { Link } from "react-router-dom";

function SecondaryCTAButton(props) {
  return (
    <Link
      to={props.resourceLink}
      className="font-semibold h-full w-auto py-2 px-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg text-sky-100 hover:bg-fuchsia-500"
    >
      {props.text}
    </Link>
  );
}

export default SecondaryCTAButton;
