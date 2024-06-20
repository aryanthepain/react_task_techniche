import { useState } from "react";
import { useParams } from "react-router-dom";

const Sellform = () => {
const {sell} = useParams();
const [isRent, SetIsRent] = useState(false);
    return (
        <div className="sellform">
            <h1 className="sftitle">SELL</h1>
            <h1 className="sftitle">RENT</h1>
            <div className="sfcontainer">
                <form className="sform">
                <div className="sfsellrent">
                        <input type="radio" name="sellrent" value={"sell"} id="sell" checked />
                        <label htmlFor="sell">Sell</label>
                        <input type="radio" name="sellrent" value={"rent"} id="rent" />
                        <label htmlFor="rent">Rent</label>
                    </div>
                    <label className="sflabel">Property Address</label>
                    <input type="text" className="sfinput" />
                    <label className="sflabel">Property type</label>
                    <input type="text" className="sfinput" />
                    <label className="sflabel">Price</label>
                    <input type="number" className="sfinput" />
                    <label className="sflabel">Rent per Month</label>
                    <input type="number" className="sfinput" />
                    {/* react select for currency */}

                    <div className="sfcurrency">
                        <input type="radio" name="currency" value={"INR"} id="INR" checked />
                        <label htmlFor="INR">INR</label>
                        <input type="radio" name="currency" value={"USD"} id="USD" />
                        <label htmlFor="USD">USD</label>
                    </div>
                    <label className="sflabel">Upload property image</label>
                    <input type="file" className="sfuimg" accept="image/*,.pdf" required />

                    <label className="sflabel">Number of bedrooms</label>
                    <input type="number" className="sfinput" required />
                    <label className="sflabel">Number of bathrooms</label>
                    <input type="number" className="sfinput" required />
                    <label className="sflabel">Home area (in m^2)</label>
                    <input type="number" className="sfinput" required />

                    <label className="sflabel">Features(upload some more pictures)</label>
                    <label className="sflabel">Feature 1</label>
                    <input type="text" id="" className="sfinput" required />
                    <input type="file" required accept="image/*, .pdf" id="" />
                    <label className="sflabel">Feature 2</label>
                    <input type="text" id="" className="sfinput" />
                    <input type="file" required accept="image/*, .pdf" id="" />
                    <label className="sflabel">Feature 3</label>
                    <input type="text" id="" className="sfinput" />
                    <input type="file" required accept="image/*, .pdf" id="" />
                </form>
            </div>
        </div>
    );
}
 
export default Sellform;