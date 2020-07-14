import "./App.css";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PotteryContainer } from "./Pottery/PotteryContainer";
import { AboutContainer } from "./About/AboutContainer";
import { ContactContainer } from "./Contact/ContactContainer";
import { HomeComponent } from "./Home/HomeComponent";
import { ReusableGrid } from "./ReusableGrid/ReusableGrid";
import { ScultpureDirectory } from "./SiteData/DirectoryContent/SculptureDirectory";
import { HeisenvictusContent } from "./SiteData/ScultpureContent/HeisenvictusContent";
import { HelpYourselfContent } from "./SiteData/ScultpureContent/HelpYourselfContent";
import { LikeNoTomorrowContent } from "./SiteData/ScultpureContent/LikeNoTomorrowContent";
import { SomberSomeoneContent } from "./SiteData/ScultpureContent/SomberSomeoneContent";
import { RorschachContent } from "./SiteData/ScultpureContent/RorschachContent";
import { ProcessPhotosContent } from "./SiteData/ScultpureContent/ProcessPhotosContent";
import { OtherSculpturesContent } from "./SiteData/ScultpureContent/OtherSculpturesContent";
import { AccaliaContent } from "./SiteData/ScultpureContent/AccaliaContent";
import { BFAContent } from "./SiteData/ScultpureContent/BFAContent";
import { FoundObjectContent } from "./SiteData/ScultpureContent/FoundObjectContent";
import { ReusableCarousel } from "./ReusableCarousel/ReusableCarousel";
import { MugCarouselContent } from "./SiteData/CarouselContent/MugCarouselContent";
import { PlatterCarouselContent } from "./SiteData/CarouselContent/PlatterCarouselContent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route
            path="/sculpture"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={ScultpureDirectory} />
            )}
          />
          <Route path="/pottery" exact component={PotteryContainer} />
          <Route path="/about" exact component={AboutContainer} />
          <Route path="/contact" exact component={ContactContainer} />
          <Route
            path="/mugs"
            exact
            render={(props) => (
              <ReusableCarousel {...props} items={MugCarouselContent} />
            )}
          />
          <Route
            path="/platters-and-more"
            exact
            render={(props) => (
              <ReusableCarousel {...props} items={PlatterCarouselContent} />
            )}
          />
          <Route
            path="/accalia"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={AccaliaContent} />
            )}
          />
          <Route
            path="/bfa-senior-exhibition"
            exact
            render={(props) => <ReusableGrid {...props} items={BFAContent} />}
          />
          <Route
            path="/found-object-insects"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={FoundObjectContent} />
            )}
          />
          <Route
            path="/heisenvictus"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={HeisenvictusContent} />
            )}
          />
          <Route
            path="/help-yourself"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={HelpYourselfContent} />
            )}
          />
          <Route
            path="/like-no-tomorrow"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={LikeNoTomorrowContent} />
            )}
          />
          <Route
            path="/other-sculptures"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={OtherSculpturesContent} />
            )}
          />
          <Route
            path="/process-photos"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={ProcessPhotosContent} />
            )}
          />
          <Route
            path="/rorschach"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={RorschachContent} />
            )}
          />
          <Route
            path="/somber-someone"
            exact
            render={(props) => (
              <ReusableGrid {...props} items={SomberSomeoneContent} />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
