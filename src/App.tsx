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
import { AccaliaContainer } from "./SculptureContainers/AccaliaContainer/AccaliaContainer";
import { BFAContainer } from "./SculptureContainers/BFAContainer/BFAContainer";
import { FoundObjectContainer } from "./SculptureContainers/FoundObjectContainer/FoundObjectContainer";
import { HeisenvictusContainer } from "./SculptureContainers/HeisenvictusContainer/HeisenvictusContainer";
import { HelpYourselfContainer } from "./SculptureContainers/HelpYourselfContainer/HelpYourselfContainer";
import { LikeNoTomorrowContainer } from "./SculptureContainers/LikeNoTomorrowContainer/LikeNoTomorrowContainer";
import { OtherSculpturesContainer } from "./SculptureContainers/OtherSculpturesContainer/OtherSculpturesContainer";
import { ProcessPhotosContainer } from "./SculptureContainers/ProcessPhotosContainer/ProcessPhotosContainer";
import { RorschachContainer } from "./SculptureContainers/RorschachContainer/RorschachContainer";
import { SomberSomeoneContainer } from "./SculptureContainers/SomberSomoneContainer/SomberSomoneContainer";

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
          <Route path="/accalia" exact component={AccaliaContainer} />
          <Route path="/bfa-senior-exhibition" exact component={BFAContainer} />
          <Route
            path="/found-object-insects"
            exact
            component={FoundObjectContainer}
          />
          <Route path="/heisenvictus" exact component={HeisenvictusContainer} />
          <Route
            path="/help-yourself"
            exact
            component={HelpYourselfContainer}
          />
          <Route
            path="/like-no-tomorrow"
            exact
            component={LikeNoTomorrowContainer}
          />
          <Route
            path="/other-sculptures"
            exact
            component={OtherSculpturesContainer}
          />
          <Route
            path="/process-photos"
            exact
            component={ProcessPhotosContainer}
          />
          <Route path="/rorschach" exact component={RorschachContainer} />
          <Route
            path="/somber-someone"
            exact
            component={SomberSomeoneContainer}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
