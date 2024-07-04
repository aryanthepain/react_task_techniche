import "./navbar.css";
import "./footer.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Footer = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <Navbar />

      <div className="foot">Copyright 2023 - Kodkustik All Right Reserved.</div>
    </footer>
  );
};

export default Footer;
