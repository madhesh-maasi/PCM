import * as React from "react";
import PlaybookGrid from "./PlaybookGrid";
import HomePage from "./HomePageDesign";
import PlaybookDetails from "./PlaybookDetails";
import { useState } from "react";
import WhyPlayBook from "./WhyPlayBook";
import DecisionTree from "./DecisionTree";
const App = (props) => {
  // const [navState, setNavState] = useState("ToHome");
  const [navState, setNavState] = useState("ToHome");
  const [selectedPhase, setSelectedPhase] = useState("");
  const switchHomeScreenHandler = (str) => {
    setNavState(str);
  };
  const selectedPhaseHandler = (phase) => {
    setSelectedPhase(phase);
  };
  return (
    <div className="App">
      {navState == "ToHome" ? (
        <HomePage sp={props.sp} switchPlayBook={switchHomeScreenHandler} />
      ) : navState == "ToPlayBook" ? (
        <PlaybookGrid
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          selectPhase={selectedPhaseHandler}
        />
      ) : navState == "ToPlayBookDetails" ? (
        <PlaybookDetails
          sp={props.sp}
          selectedItem={selectedPhase}
          navHandler={switchHomeScreenHandler}
        />
      ) : navState == "ToWhyPlayBook" ? (
        <WhyPlayBook sp={props.sp} navHandler={switchHomeScreenHandler} />
      ) : navState == "ToDecisionTree" ? (
        <DecisionTree sp={props.sp} navHandler={switchHomeScreenHandler} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
