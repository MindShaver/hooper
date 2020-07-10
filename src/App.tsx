import "./App.css";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SculptureContainer } from "./Sculpture/SculptureContainer";
import { PotteryContainer } from "./Pottery/PotteryContainer";
import { AboutContainer } from "./About/AboutContainer";
import { ContactContainer } from "./Contact/ContactContainer";
import { HomeComponent } from "./Home/HomeComponent";
import { MugCarousel } from "./MugCarousel/MugCarousel";
import { MugContainer } from "./MugContainer/MugContainer";
import { PlatterContainer } from "./PlatterContainer/PlatterContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/sculpture" exact component={SculptureContainer} />
          <Route path="/pottery" exact component={PotteryContainer} />
          <Route path="/about" exact component={AboutContainer} />
          <Route path="/contact" exact component={ContactContainer} />
          <Route path="/mugs" exact component={MugContainer} />
          <Route path="/platters-and-more" exact component={PlatterContainer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
