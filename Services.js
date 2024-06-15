import './services.css';


const Services = () => {
    return (
      <div className="services">
            <div className="sparas">
            <h1 className="stitle">Our Services</h1>
            <p className="ssubtitle">With us, you can expect a transparent and trustworthy partnership</p>
            </div>
            <div className="soptions">
                <div className="sitem">
                    <div className="siimg">
                    {/* add svg here */}
                    </div>
                    <h2 className="sititle">Property Insurance</h2>
                    <div className="sisub">Protect your home and peace of mind with our comprehensive property insurance coverage.</div>
                </div>
                <div className="sitem">
                    <div className="siimg">
                    {/* add svg here */}
                    </div>
                    <h2 className="sititle">Easy Payment</h2>
                    <div className="sisub">Experience hassle free payments with our easy payment options. Simplify your life and manage your finances effortlessly.</div>
                </div>
                <div className="sitem">
                    <div className="siimg">
                    {/* add svg here */}
                    </div>
                    <h2 className="sititle">Quick Process</h2>
                    <div className="sisub">Experience swift and efficient service with our quick process. Say goodbye to long waits and hello to instant results.</div>
                </div>
            </div>
      </div>
    );
}
 
export default Services;
