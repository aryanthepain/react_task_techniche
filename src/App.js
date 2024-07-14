import Navbar from "./navbar";
import Home from "./Home";
import Services from "./Services";
import Question from "./Question";
import { HashRouter, Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Sellform from "./Sellform";
import Property from "./Property";
import AllProperties from "./AllProperties";
import Error from "./Error";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/react_task_techniche" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sellorrent/:sell" element={<Sellform />} />
            <Route path="/property/:id" element={<Property />} />
            {/* <Route path="/property" element={<AllProperties />} /> */}
            <Route path="/properties" element={<AllProperties />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Question />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
