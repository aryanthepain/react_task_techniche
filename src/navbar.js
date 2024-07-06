import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          width="34.4"
          height="34.4"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17H8C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18V17ZM17 17V18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17H17ZM17 12H18C18.0002 11.8686 17.9746 11.7384 17.9245 11.6169C17.8744 11.4955 17.8008 11.385 17.708 11.292L17 12ZM13 8L13.708 7.292C13.6151 7.19887 13.5048 7.12499 13.3833 7.07457C13.2618 7.02416 13.1315 6.99821 13 6.99821C12.8685 6.99821 12.7382 7.02416 12.6167 7.07457C12.4952 7.12499 12.3849 7.19887 12.292 7.292L13 8ZM9 12L8.292 11.292C8.1992 11.385 8.12564 11.4955 8.07554 11.6169C8.02543 11.7384 7.99977 11.8686 8 12H9ZM29.708 28.292L21.708 20.292L20.292 21.708L28.292 29.708L29.708 28.292ZM13 24C10.0826 24 7.28473 22.8411 5.22183 20.7782C3.15893 18.7153 2 15.9174 2 13H0C0 16.4478 1.36964 19.7544 3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26V24ZM24 13C24 15.9174 22.8411 18.7153 20.7782 20.7782C18.7153 22.8411 15.9174 24 13 24V26C16.4478 26 19.7544 24.6304 22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13H24ZM13 2C15.9174 2 18.7153 3.15893 20.7782 5.22183C22.8411 7.28473 24 10.0826 24 13H26C26 9.55219 24.6304 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V2ZM13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13H2C2 10.0826 3.15893 7.28473 5.22183 5.22183C7.28473 3.15893 10.0826 2 13 2V0ZM9 18H17V16H9V18ZM18 17V12H16V17H18ZM17.708 11.292L13.708 7.292L12.292 8.708L16.292 12.708L17.708 11.292ZM12.292 7.292L8.292 11.292L9.708 12.708L13.708 8.708L12.292 7.292ZM8 12V17H10V12H8Z"
            fill="#295FB7"
          />
        </svg>
        <h1 className="title">myProperty</h1>
      </div>

      <div className="nlink">
        <ul className="links">
          <li>
            <Link to="/" className="lhome" onClick={ScrollTop}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className="lservices" onClick={ScrollTop}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/sellorrent/sell" className="lsell" onClick={ScrollTop}>
              SELL
            </Link>
          </li>
          <li>
            <Link to="/sellorrent/rent" className="lrent" onClick={ScrollTop}>
              RENT
            </Link>
          </li>
        </ul>
      </div>

      <div className="sign">
        <button className="signup">SIGN UP</button>
        <button className="signin">SIGN IN</button>
      </div>

      <div className="nlink" id="resnlink">
        <ul className="links">
          <li>
            <Link to="/" className="lhome" onClick={ScrollTop}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className="lservices" onClick={ScrollTop}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/sellorrent/sell" className="lsell" onClick={ScrollTop}>
              SELL
            </Link>
          </li>
          <li>
            <Link to="/sellorrent/rent" className="lrent" onClick={ScrollTop}>
              RENT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
