import Navbar from "./navbar";
import Home from "./Home";
import Services from "./Services";
import Question from "./Question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        </Routes>
      </div>
      <Question />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
