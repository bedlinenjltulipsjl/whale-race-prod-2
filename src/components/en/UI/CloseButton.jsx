import { Link } from "react-router-dom";
import CloseIcon from "../../icons/close-icon";

export default function CloseButton() {
  return (
    <Link
      to="../"
      className="absolute top-0 right-8 border-gradient-title p-[9px] top-[-17px] rounded-[50%]"
    >
      {<CloseIcon />}
    </Link>
  );
}
