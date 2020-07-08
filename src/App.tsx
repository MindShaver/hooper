import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./Dashboard/Dashboard";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SculptureContainer } from "./Sculpture/SculptureContainer";
import { PotteryContainer } from "./Pottery/PotteryContainer";
import { AboutContainer } from "./About/AboutContainer";
import { ContactContainer } from "./Contact/ContactContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Dashboard} />
        <Route path="/sculpture" exact component={SculptureContainer} />
        <Route path="/pottery" exact component={PotteryContainer} />
        <Route path="/about" exact component={AboutContainer} />
        <Route path="/contact" exact component={ContactContainer} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
