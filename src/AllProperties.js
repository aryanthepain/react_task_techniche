// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./sale.css";
import { source } from "./source";

const AllProperies = () => {
  // prettier-ignore
  const {error, isPending, data} = useFetch(source);

  window.addEventListener("scroll", scrollFunction);
  function scrollFunction() {
    if (window.scrollY > 100) {
      document.getElementById("myBtn").style.visibility = "visible";
    } else if (window.scrollY <= 100) {
      document.getElementById("myBtn").style.visibility = "hidden";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sale">
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Go to Top ^
      </button>
      <h1 className="satitle">Best Collection On Sale</h1>
      <p className="sasub">
        Get your dream property right now and get best seller
      </p>

      {error && <div>{error}</div>}
      {isPending && <div>Loading data...</div>}

      {!isPending && (
        <div>
          <div className="sagrid">
            {data &&
              data.map((prop) => (
                <div className="sagdiv" key={prop.id}>
                  {/* <div className="saglinkcont"> */}
                  <Link to={prop.id} className="saglink">
                    <div className="sagimgdiv">
                      {/* prettier-ignore */}
                      <img src={prop.images[0]} alt={prop.type} className="sagdimg" />
                    </div>
                    <p className="sagprice nounder">INR {prop.price}</p>
                    <p className="sagadd nounder">{prop.address}</p>
                    <p className="sagrent nounder">
                      {prop.isRent && "Rent"}
                      {!prop.isRent && "Sell"}
                    </p>
                    <div className="sagddetails">
                      <div>
                        <div className="sagddtop nounder">
                          <svg
                            width="23"
                            height="20"
                            viewBox="0 0 23 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sagddticon"
                          >
                            <path
                              d="M18.7917 2.16197H10.4583V9.74425H2.12501V-0.00439453H0.0416718V16.2433H2.12501V12.9938H20.875V16.2433H22.9583V6.4947C22.9583 5.34559 22.5194 4.24354 21.7379 3.431C20.9565 2.61845 19.8967 2.16197 18.7917 2.16197ZM6.29167 8.66106C7.12047 8.66106 7.91533 8.3187 8.50138 7.70929C9.08743 7.09988 9.41667 6.27335 9.41667 5.41152C9.41667 4.54968 9.08743 3.72315 8.50138 3.11374C7.91533 2.50433 7.12047 2.16197 6.29167 2.16197C5.46287 2.16197 4.66801 2.50433 4.08196 3.11374C3.49591 3.72315 3.16667 4.54968 3.16667 5.41152C3.16667 6.27335 3.49591 7.09988 4.08196 7.70929C4.66801 8.3187 5.46287 8.66106 6.29167 8.66106Z"
                              fill="black"
                            />
                          </svg>
                          {prop.bed}
                        </div>
                        <p className="sagddbottom nounder">Bedroom</p>
                      </div>
                      <div className="sagddmid">
                        <div className="sagddtop nounder">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sagddticon"
                          >
                            <path
                              d="M6.375 0.908936C2.92708 0.908936 0.270833 3.8227 0.125 7.40803V20.4062H9.5V12.239C10.6458 13.3114 12.1042 13.9071 13.6667 13.9071C17.1146 13.9071 19.9167 10.9934 19.9167 7.40803C19.9167 3.8227 17.1146 0.908936 13.6667 0.908936H6.375ZM13.6667 3.0753C15.9687 3.0753 17.8333 5.0142 17.8333 7.40803C17.8333 9.80186 15.9687 11.7408 13.6667 11.7408C11.3646 11.7408 9.5 9.80186 9.5 7.40803C9.5 5.0142 11.3646 3.0753 13.6667 3.0753ZM13.6667 5.51246C12.6562 5.51246 11.8438 6.35734 11.8438 7.40803C11.8438 8.45872 12.6562 9.3036 13.6667 9.3036C14.6771 9.3036 15.4896 8.45872 15.4896 7.40803C15.4896 6.35734 14.6771 5.51246 13.6667 5.51246ZM1.16667 10.6576H2.20833V11.7408H1.16667V10.6576ZM3.25 10.6576H4.29167V11.7408H3.25V10.6576ZM5.33333 10.6576H6.375V11.7408H5.33333V10.6576ZM7.41667 10.6576H8.45833V11.7408H7.41667V10.6576Z"
                              fill="black"
                            />
                          </svg>
                          {prop.bath}
                        </div>
                        <p className="sagddbottom nounder">Bathroom</p>
                      </div>
                      <div>
                        <div className="sagddtop nounder">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sagddticon"
                          >
                            <path
                              d="M10.5 0.825806C8.28987 0.825806 6.17025 1.73877 4.60745 3.36386C3.04464 4.98895 2.16667 7.19304 2.16667 9.49126C2.16667 13.8565 5.29167 17.5285 9.45834 18.0809V19.2399H8.41667C8.1404 19.2399 7.87545 19.354 7.6801 19.5572C7.48475 19.7603 7.375 20.0358 7.375 20.3231H0.0833359V22.4895H7.375C7.375 22.7767 7.48475 23.0522 7.6801 23.2554C7.87545 23.4585 8.1404 23.5726 8.41667 23.5726H12.5833C12.8596 23.5726 13.1246 23.4585 13.3199 23.2554C13.5153 23.0522 13.625 22.7767 13.625 22.4895H20.9167V20.3231H13.625C13.625 20.0358 13.5153 19.7603 13.3199 19.5572C13.1246 19.354 12.8596 19.2399 12.5833 19.2399H11.5417V18.0809C15.7083 17.5393 18.8333 13.8565 18.8333 9.49126C18.8333 7.19304 17.9554 4.98895 16.3926 3.36386C14.8298 1.73877 12.7101 0.825806 10.5 0.825806ZM10.5 2.99217C10.5 2.99217 11.2708 4.37864 11.8125 6.24172H9.1875C9.72917 4.37864 10.5 2.99217 10.5 2.99217ZM8.17709 3.45794C7.89584 3.99953 7.46875 4.98523 7.10417 6.24172H5.09375C5.8125 4.98523 6.85417 3.99953 8.17709 3.45794ZM12.8229 3.46877C14.1458 4.01036 15.1875 4.98523 15.9063 6.24172H13.8958C13.5313 4.98523 13.1042 3.99953 12.8229 3.46877ZM4.34375 8.40808H6.66667C6.625 8.76553 6.59375 9.12298 6.59375 9.49126C6.59375 9.85955 6.625 10.217 6.66667 10.5744H4.34375C4.21762 9.85828 4.21762 9.12425 4.34375 8.40808ZM8.75 8.40808H12.25C12.2917 8.76553 12.3229 9.12298 12.3229 9.49126C12.3229 9.85955 12.2917 10.217 12.25 10.5744H8.75C8.70834 10.217 8.67709 9.85955 8.67709 9.49126C8.67709 9.12298 8.70834 8.76553 8.75 8.40808ZM14.3333 8.40808H16.6563C16.7824 9.12425 16.7824 9.85828 16.6563 10.5744H14.3333C14.375 10.217 14.4063 9.85955 14.4063 9.49126C14.4063 9.12298 14.375 8.76553 14.3333 8.40808ZM5.09375 12.7408H7.10417C7.46875 13.9973 7.89584 14.983 8.17709 15.5138C6.85417 14.9722 5.8125 13.9973 5.09375 12.7408ZM9.1875 12.7408H11.8125C11.2708 14.6039 10.5 15.9904 10.5 15.9904C10.5 15.9904 9.72917 14.6039 9.1875 12.7408ZM13.8958 12.7408H15.9063C15.1875 13.9973 14.1458 14.983 12.8229 15.5246C13.1042 14.983 13.5313 13.9973 13.8958 12.7408Z"
                              fill="black"
                            />
                          </svg>
                          {prop.area + " m^2"}
                        </div>
                        <p className="sagddbottom nounder">Home Area</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProperies;
