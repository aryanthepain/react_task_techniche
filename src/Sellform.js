import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Sellform.css";

const Sellform = () => {
  const [isRent, SetIsRent] = useState(false);
  const { sell } = useParams(); //get if form is to sell or rent
  const navigate = useNavigate();

  // to work with the sell and rent radio buttions properly
  useEffect(() => {
    if (sell === "rent") {
      SetIsRent(true);
    } else SetIsRent(false);
  }, [sell]);

  useEffect(() => {
    if (isRent) {
      document.sellform.sellrent.value = "rent";
    } else document.sellform.sellrent.value = "sell";
  }, [isRent]);

  const handleSellRent = () => {
    let sellrent = document.sellform.sellrent.value;
    if (sellrent === "rent") {
      SetIsRent(true);
    } else SetIsRent(false);
  };

  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [area, setArea] = useState("");
  const [feature1, setf1] = useState("");
  const [feature2, setf2] = useState("");
  const [feature3, setf3] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageInputs = [
      document.getElementById("sfmimg").files[0],
      document.getElementById("sfimg1").files[0],
      document.getElementById("sfimg2").files[0],
      document.getElementById("sfimg3").files[0],
    ];

    const readFileAsBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    try {
      const base64Images = await Promise.all(imageInputs.map(readFileAsBase64));

      const response = await fetch("http://localhost:8000/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isRent,
          address,
          type,
          price,
          bed,
          bath,
          area,
          feature1,
          feature2,
          feature3,
          images: base64Images,
        }),
      });

      if (!response.ok) {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the upload.");
    }
    navigate("/");
  };

  return (
    <div className="sellform">
      {isRent && <h1 className="sftitle">RENT</h1>}
      {!isRent && <h1 className="sftitle">SELL</h1>}
      <div className="sfcontainer">
        <form
          className="sform"
          name="sellform"
          onSubmit={handleSubmit}
          id="sellform"
        >
          <div className="sfsellrent">
            <div>
              <input
                type="radio"
                name="sellrent"
                value={"sell"}
                id="sell"
                defaultChecked
                onClick={handleSellRent}
              />
              <label htmlFor="sell">Sell</label>
            </div>
            <div>
              <input
                type="radio"
                name="sellrent"
                value={"rent"}
                id="rent"
                onClick={handleSellRent}
              />
              <label htmlFor="rent">Rent</label>
            </div>
          </div>
          <div>
            <div>
              <label className="sflabel" htmlFor="sfaddress">
                Property Address
              </label>
              <input
                type="text"
                className="sfinput"
                required
                id="sfaddress"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="sflabel" htmlFor="sftype">
                Property type
              </label>
              <input
                type="text"
                className="sfinput"
                required
                id="sftype"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div>
              {!isRent && (
                <label className="sflabel" htmlFor="sfprice">
                  Price(in INR)
                </label>
              )}
              {isRent && (
                <label className="sflabel" htmlFor="sfrent">
                  Rent per Month(in INR)
                </label>
              )}
              <input
                type="number"
                className="sfinput"
                required
                id="sfprice"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="sfmainimgdiv">
            <div>
              <label className="sflabel" htmlFor="sfmimg">
                Upload property image
              </label>
              <input
                type="file"
                className="sfuimg"
                accept="image/*"
                required
                id="sfmimg"
              />
            </div>
          </div>

          <div className="sfdetaildiv">
            <div>
              <label className="sflabel" htmlFor="sfbed">
                Number of bedrooms
              </label>
              <input
                type="number"
                className="sfinput"
                required
                id="sfbed"
                onChange={(e) => setBed(e.target.value)}
              />
            </div>
            <div>
              <label className="sflabel" htmlFor="sfbath">
                Number of bathrooms
              </label>
              <input
                type="number"
                className="sfinput"
                id="sfbath"
                required
                onChange={(e) => setBath(e.target.value)}
              />
            </div>
            <div>
              <label className="sflabel" htmlFor="sfarea">
                Home area (in m^2)
              </label>
              <input
                type="number"
                className="sfinput"
                id="sfarea"
                required
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
          </div>

          <div className="sffeaturehead">
            <label className="sflabel" htmlFor="sfimg1">
              Features(upload some more pictures)
            </label>
          </div>
          <div>
            <div>
              <label className="sflabel" htmlFor="sff1">
                Feature 1
              </label>
              <input
                type="text"
                id="sff1"
                className="sfinput"
                required
                onChange={(e) => setf1(e.target.value)}
              />
              <input type="file" required accept="image/*" id="sfimg1" />
            </div>

            <div>
              <label className="sflabel" htmlFor="sff2">
                Feature 2
              </label>
              <input
                type="text"
                id="sff2"
                className="sfinput"
                required
                onChange={(e) => setf2(e.target.value)}
              />
              <input type="file" required accept="image/*" id="sfimg2" />
            </div>

            <div>
              <label className="sflabel" htmlFor="sff3">
                Feature 3
              </label>
              <input
                type="text"
                id="sff3"
                className="sfinput"
                required
                onChange={(e) => setf3(e.target.value)}
              />
              <input type="file" required accept="image/*" id="sfimg3" />
            </div>
          </div>

          <input type="submit" value="Submit" className="sfsubmit" />
        </form>
      </div>
    </div>
  );
};

export default Sellform;
