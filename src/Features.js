import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Features = () => {
  const [index, setIndex] = useState(0);
  const { data: fulldata } = useFetch("http://localhost:8000/properties");
  const [data, setData] = useState(null);

  const HandlePlus = () => {
    if (index == 4) setIndex(0);
    else setIndex(index + 1);
  };
  const HandleMinus = () => {
    if (index == 0) setIndex(4);
    else setIndex(index - 1);
  };

  useEffect(() => {
    if (fulldata) setData(fulldata.slice(0, 5));
  }, [fulldata]);

  return (
    <div className="feature">
      {data && (
        <div>
          <div className="fhead">
            <p className="ffeature">Feature</p>
            <Link to={"properties"} className="fallbtn">
              VIEW ALL
            </Link>
          </div>
          <div className="fmid">
            <div className="fmflex">
              <div className="fmfpic">
                {/* prettier-ignore */}
                <img src={data[index].images[1]} alt={data[index].feature1} className="fmfpimg" />
                <div className="fmfdetails">
                  <h2 className="fmfdtitle">{data[index].feature1}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  <Link to={"property/" + data[index].id} className="fmfdlink">
                    VIEW
                  </Link>
                </div>
              </div>
              <div className="fmfpic">
                {/* prettier-ignore */}
                <img src={data[index].images[2]} alt={data[index].feature2} className="fmfpimg" />
                <div className="fmfdetails">
                  <h2 className="fmfdtitle">{data[index].feature2}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  <Link to={"property/" + data[index].id} className="fmfdlink">
                    VIEW
                  </Link>
                </div>
              </div>
              <div className="fmfpic">
                {/* prettier-ignore */}
                <img src={data[index].images[3]} alt={data[index].feature3} className="fmfpimg" />
                <div className="fmfdetails">
                  <h2 className="fmfdtitle">{data[index].feature3}</h2>
                  <h3 className="fmfdtype">{data[index].type}</h3>
                  <p className="fmfdprice">INR {data[index].price}</p>
                  <Link to={"property/" + data[index].id} className="fmfdlink">
                    VIEW
                  </Link>
                </div>
              </div>
            </div>
            <div className="fmbtns">
              <button className="btnminus" onClick={HandleMinus}>
                {"<"}
              </button>
              <button className="btnplus" onClick={HandlePlus}>
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
