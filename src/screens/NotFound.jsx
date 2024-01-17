import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import NotFoundRobo from "../components/lotties/NotFoundRobo.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFoundRobo,
  rendererSettings: {
    // preserveAspectRatio: "xMidYMid slice",
  },
};
const NotFound = () => {
  return (
    <div className="notFound" style={{ width: "100%" }}>
      <Lottie options={defaultOptions} isClickToPauseDisabled />
      <Link to="/">
        <img src="./goBackHome.png" alt="Back to HOME" />
      </Link>
    </div>
  );
};

export default NotFound;
