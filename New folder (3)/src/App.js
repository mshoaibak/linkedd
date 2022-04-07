import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";

import Awards from "./components/Awards";
import Footer from "./components/Footer";
import SuccessStory from "./components/SuccessStory";
import About from "./components/About";
import All from "./components/All";
import Resources from "./components/Resources";
import Company from "./components/Company";
import ServicesPage from "./components/Services-page/ServicesPage";
import ServiseMain from "./components/ServiseMain";
import Ourcompany from "./components/ourcompany/Ourcompany";
import Hovercrad from "./components/hover/Hovercrad";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/services-page" element={<ServiseMain />} />
        </Routes>
      </Router>
      {/* <Hovercrad /> */}
      {/* <Ourcompany /> */}
      {/* <Technology /> */}
    </>
  );
}

export default App;
