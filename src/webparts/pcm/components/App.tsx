import * as React from "react";
import PlaybookGrid from "./PlaybookGrid";
import HomePage from "./HomePageDesign";
import PlaybookDetails from "./PlaybookDetails";
import { useState, useEffect } from "react";
import WhyPlayBook from "./WhyPlayBook";
import DecisionTree from "./DecisionTree";
let startPage;
let siteUrl = window.location.href.split("?")[0];
let url = window.location.href;
console.log(url.indexOf("?"));
let siteLinks = [];
let PBLink;
let WPBLink;
let DTLink;
const App = (props) => {
  const [navState, setNavState] = useState(startPage);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [PlayBookLink, setPlayBookLink] = useState();
  const [WhyPlayBooklink, setWhyPlayBooklink] = useState();
  const [DecisionTreeLink, setDecisionTreeLink] = useState();

  useEffect(() => {
    props.sp.web.lists
      .getByTitle("Home main sections")
      .items.get()
      .then((data) => {
        console.log(data);
        siteLinks = data;

        PBLink = siteLinks.filter((item) => item.Title == "Playbook")[0]
          .PCMLink;

        WPBLink = siteLinks.filter((item) => item.Title == "Playbook")[0]
          .PCMBtnLink;

        DTLink = siteLinks.filter((item) => item.Title == "Decision Tree")[0]
          .PCMLink;

        setPlayBookLink(PBLink);
        setWhyPlayBooklink(WPBLink);
        setDecisionTreeLink(DTLink);
      })
      .catch((error) => {
        console.log(error);
      });

    if (url.indexOf("?") != -1) {
      const paramsString = window.location.href.split("?")[1].toLowerCase();
      const searchParams = new URLSearchParams(paramsString);
      console.log(searchParams.has("topage"));
      searchParams.has("topage")
        ? searchParams.get("topage").toLocaleLowerCase() == "home"
          ? (startPage = "ToHome")
          : searchParams.get("topage").toLocaleLowerCase() == `${PBLink}`
          ? (startPage = "ToPlayBook")
          : searchParams.get("topage").toLocaleLowerCase() == `${DTLink}`
          ? (startPage = "ToDecisionTree")
          : searchParams.get("topage").toLocaleLowerCase() == `${WPBLink}`
          ? (startPage = "ToWhyPlayBook")
          : ""
        : (startPage = "ToHome");
      setNavState(startPage);
      console.log(searchParams.get("topage"));
    } else {
      startPage = "ToHome";
      setNavState(startPage);
    }
  }, []);

  // console.log(PlayBookLink);
  // console.log(WhyPlayBooklink);
  // console.log(DecisionTreeLink);

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
          PlayBookLink={PBLink}
          WhyPlayBooklink={WPBLink}
          DecisionTreeLink={DTLink}
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
