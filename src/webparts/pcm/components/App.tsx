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
  const [homeLinks, setHomeLinks] = useState(siteLinks);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [PlayBookLink, setPlayBookLink] = useState("");
  const [WhyPlayBooklink, setWhyPlayBooklink] = useState("");
  const [DecisionTreeLink, setDecisionTreeLink] = useState("");

  useEffect(() => {
    props.sp.web.lists
      .getByTitle("Home main sections")
      .items.get()
      .then((data) => {
        console.log(data);
        siteLinks = data;
        setHomeLinks(siteLinks);
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
  }, []);
  useEffect(() => {
    // if (url.indexOf("?") != -1 && homeLinks.length > 0) {
    //   const paramsString = window.location.href.split("?")[1].toLowerCase();
    //   const searchParams = new URLSearchParams(paramsString);
    //   console.log(searchParams.has("topage"));
    //   searchParams.has("topage")
    //     ? searchParams.get("topage").toLocaleLowerCase() == "home"
    //       ? (startPage = "ToHome")
    //       : searchParams.get("topage").toLocaleLowerCase() == `${PBLink}`
    //       ? (startPage = "ToPlayBook")
    //       : searchParams.get("topage").toLocaleLowerCase() == `${DTLink}`
    //       ? (startPage = "ToDecisionTree")
    //       : searchParams.get("topage").toLocaleLowerCase() == `${WPBLink}`
    //       ? (startPage = "ToWhyPlayBook")
    //       : ""
    //     : (startPage = "ToHome");
    //   setNavState(startPage);
    // } else {
    //   startPage = "ToHome";
    //   setNavState(startPage);
    // }
    console.log(props.context.pageContext.web.absoluteUrl);

    let url = window.location.href.split("/");
    let page = url[url.length - 1].split(".")[0];
    console.log(page);
    // if (page.toLocaleLowerCase() == "playbook") {
    //   startPage = "ToPlayBook";
    // } else if (page.toLocaleLowerCase() == "whyplaybook") {
    //   startPage = "ToWhyPlayBook";
    // } else if (page.toLocaleLowerCase() == "decisiontree") {
    //   startPage = "ToDecisionTree";
    // } else {
    //   startPage = "ToHome";
    // }
    startPage = "ToPlayBook";
    setNavState(startPage);
  }, []);

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
          absoluteUrl={props.context.pageContext.web.absoluteUrl}
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
          absoluteUrl={props.context.pageContext.web.absoluteUrl}
        />
      ) : navState == "ToPlayBookDetails" ? (
        <PlaybookDetails
          sp={props.sp}
          selectedItem={selectedPhase}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
          absoluteUrl={props.context.pageContext.web.absoluteUrl}
        />
      ) : navState == "ToWhyPlayBook" ? (
        <WhyPlayBook
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
          absoluteUrl={props.context.pageContext.web.absoluteUrl}
          PlayBookLink={PBLink}
          WhyPlayBooklink={WPBLink}
          DecisionTreeLink={DTLink}
        />
      ) : navState == "ToDecisionTree" ? (
        <DecisionTree
          sp={props.sp}
          navHandler={switchHomeScreenHandler}
          siteUrl={siteUrl}
          absoluteUrl={props.context.pageContext.web.absoluteUrl}
          PlayBookLink={PBLink}
          WhyPlayBooklink={WPBLink}
          DecisionTreeLink={DTLink}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
