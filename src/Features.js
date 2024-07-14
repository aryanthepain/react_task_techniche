import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./features.css";
import { source } from "./source";

const Features = () => {
  const [index, setIndex] = useState(0);
  const { data: fulldata } = useFetch(source);
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  //   feature counter
  const HandleCounter = () => {
    if (counter > 5) setCounter(0);
    else setCounter(counter + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      if (index == 4) setIndex(0);
      else setIndex(index + 1);
      HandleCounter();
    }, 7000);
  }, [counter]);

  //   scroll button handler
  const HandlePlus = () => {
    if (index == 4) setIndex(0);
    else setIndex(index + 1);
  };
  const HandleMinus = () => {
    if (index == 0) setIndex(4);
    else setIndex(index - 1);
  };

  useEffect(() => {
    if (index == -1) setIndex(4);
    if (index == 5) setIndex(0);
  }, [index]);

  useEffect(() => {
    if (fulldata) setData(fulldata.slice(0, 5));
  }, [fulldata]);

  useEffect(() => {
    if (fulldata) {
      // prettier-ignore
      document.getElementById("fmfpic1").style.backgroundImage = `url(${data[index].images[2]})`;
      // prettier-ignore
      document.getElementById("fmfpic2").style.backgroundImage = `url(${data[index].images[1]})`;
      // prettier-ignore
      document.getElementById("fmfpic3").style.backgroundImage = `url(${data[index].images[3]})`;
    }
  }, [index, data]);

  return (
    <div className="feature">
      {data && (
        <div>
          <div className="fhead">
            <p className="ffeature">Feature</p>
            <Link to={"/properties"} className="fallbtn">
              VIEW ALL
            </Link>
          </div>
          <div className="fmid">
            <div className="fmflex">
              <div className="fmfpic" id="fmfpic1">
                <div className="fmfdetails">
                  <h2 className="fmfdtitle">{data[index].feature2}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  <Link to={"/property/" + data[index].id} className="fmfdlink">
                    VIEW
                  </Link>
                </div>
              </div>
              <div className="fmfpic" id="fmfpic2">
                <div className="fmfdetails" id="fmfdeets2">
                  <h2 className="fmfdtitle">{data[index].feature1}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  {/* prettier-ignore */}
                  <Link to={"/property/" + data[index].id} className="fmfdlink" id="fmfbtn2">
                    VIEW
                  </Link>
                </div>
              </div>
              <div className="fmfpic" id="fmfpic3">
                <div className="fmfdetails">
                  <h2 className="fmfdtitle">{data[index].feature3}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  <Link to={"/property/" + data[index].id} className="fmfdlink">
                    VIEW
                  </Link>
                </div>
              </div>
            </div>
            <div className="fmbtns">
              <button className="btnminus fmbtn" onClick={HandleMinus}>
                {"<"}
              </button>
              <button className="fmbtn btnplus" onClick={HandlePlus}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
