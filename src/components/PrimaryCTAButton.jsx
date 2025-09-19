function PrimaryCTAButton(props) {
  return (
    <a
      href={props.resourceLink}
      className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5"
    >
      {props.text}
    </a>
  );
}

export default PrimaryCTAButton;
