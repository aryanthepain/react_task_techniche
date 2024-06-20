import Navbar from "./navbar";
import Home from "./Home";
import Services from "./Services";
import Question from "./Question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Sellform from "./Sellform";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="sellorrent/:sell" element={<Sellform />} />
        </Routes>
      </div>
      <Question />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
