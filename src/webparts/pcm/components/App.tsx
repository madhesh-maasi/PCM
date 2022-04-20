import * as React from "react";
import PlaybookGrid from "./PlaybookGrid";
import HomePage from "./HomePageDesign";
import PlaybookDetails from "./PlaybookDetails";
import { useState } from "react";
import WhyPlayBook from "./WhyPlayBook";
import DecisionTree from "./DecisionTree";
let startPage = "ToHome";
let siteUrl = window.location.href.split("?")[0];

let url = window.location.href;
console.log(url.indexOf("?"));

const App = (props) => {
  const [navState, setNavState] = useState(startPage);
  const [selectedPhase, setSelectedPhase] = useState("");
  if (url.indexOf("?") != -1) {
    const paramsString = window.location.href.split("?")[1].toLowerCase();
    const searchParams = new URLSearchParams(paramsString);
    console.log(searchParams.has("topage"));
    searchParams.has("topage")
      ? searchParams.get("topage").toLocaleLowerCase() == "home"
        ? (startPage = "ToHome")
        : searchParams.get("topage").toLocaleLowerCase() == `playbook`
        ? (startPage = "ToPlayBook")
        : searchParams.get("topage").toLocaleLowerCase() == "decisiontree"
        ? (startPage = "ToDecisionTree")
        : searchParams.get("topage").toLocaleLowerCase() == "whyplaybook"
        ? (startPage = "ToWhyPlayBook")
        : ""
      : (startPage = "ToHome");

    console.log(searchParams.get("topage"));
  }
  const switchHomeScreenHandler = (str) => {
    setNavState(str);
  };
  const selectedPhaseHandler = (phase) => {
    setSelectedPhase(phase);
  };
  return (
    <div className="App">
      {navState == "ToHome" ? (
        <HomePage
          sp={props.sp}
          switchPlayBook={switchHomeScreenHandler}
          siteUrl={siteUrl}
        />
      ) : navState == "ToPlayBook" ? (
        <PlaybookGrid
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          selectPhase={selectedPhaseHandler}
          siteUrl={siteUrl}
        />
      ) : navState == "ToPlayBookDetails" ? (
        <PlaybookDetails
          sp={props.sp}
          selectedItem={selectedPhase}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
        />
      ) : navState == "ToWhyPlayBook" ? (
        <WhyPlayBook
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
        />
      ) : navState == "ToDecisionTree" ? (
        <DecisionTree
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
