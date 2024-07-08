import { Link } from "react-router-dom";
import pic from "./icons/error.jpg";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <h1 className="etitle">Error 404- Page not found</h1>
      <p className="esub">
        Requested page does not exist, there must be a mistake. Click on the
        link below to go back home.
      </p>
      <Link to={"/"}>Go back to Home</Link>
      <div className="econt">
        <div>
          <img src={pic} alt="" className="epic" />
          <p className="esub">
            Image credits-
            <a href="http://www.freepik.com/" className="eslink">
              Freepik
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
