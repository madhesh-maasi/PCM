import * as React from "react";
import styles from "./HomePageDesign.module.scss";
import "../../../ExternalRef/css/style.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import PlaybookDetails from "./PlaybookDetails";
const playBookBG = require("../../../ExternalRef/img/playBookBg.png");
const playBookIcon = require("../../../ExternalRef/img/playBookIcon.png");
const playBookArrow = require("../../../ExternalRef/img/playBookArrow.png");
const decisionTreeBG = require("../../../ExternalRef/img/decisionTreeBg.png");
const decisionTreeIcon = require("../../../ExternalRef/img/decicionTreeIcon.png");
const decisionTreeArrow = require("../../../ExternalRef/img/decisionTreeArrow.png");
const topCornerIcon = require("../../../ExternalRef/img/topCornerIcon.png");
const bottomCornerIcon = require("../../../ExternalRef/img/bottomCornerIcon.png");
const line = require("../../../ExternalRef/img/line.png");
const toRightArrow = require("../../../ExternalRef/img/rightArrow.png");
const toLeftArrow = require("../../../ExternalRef/img/leftArrow.png");
const cardsBG = require("../../../ExternalRef/img/cardsBg.png");
const card1Icon = require("../../../ExternalRef/img/card1Icon.png");
const card2Icon = require("../../../ExternalRef/img/card2Icon.png");
const card3Icon = require("../../../ExternalRef/img/card3Icon.png");
const card4Icon = require("../../../ExternalRef/img/card4Icon.png");
const card5Icon = require("../../../ExternalRef/img/card5Icon.png");
const HomeBannerImg = require("../../../ExternalRef/img/BannerImages/homeBannerImg.png");

let arrHomeLinks = [];
const HomePage = (props) => {
  const [homeLinks, setHomeLinks] = useState(arrHomeLinks);
  const [homeMain, setHomeMain] = useState([]);
  const [cardSection, setCardSection] = useState([]);
  useEffect(() => {
    props.sp.web.lists
      .getByTitle("Home links")
      .items.get()
      .then((data) => {
        setHomeLinks(data);
        let arrCardSection = data.map((li) => {
          return (
            <div
              className={styles.homeLinkCard}
              style={{ backgroundColor: li.PCMColor }}
              onClick={() => window.open(li.PCMLink)}
            >
              <div
                className={styles.cardSectionIcon}
                style={{
                  backgroundImage: `url(${
                    JSON.parse(li.PCMIcon).serverRelativeUrl
                  })`,
                }}
              ></div>
              <div className={styles.cardSectionHeading}>
                <p>{li.Title}</p>
              </div>
            </div>
          );
        });
        setCardSection(arrCardSection);
      })
      .then(async () => {
        await props.sp.web.lists
          .getByTitle("Home main sections")
          .items.get()
          .then((homemain) => {
            console.log(homemain);
            setHomeMain(homemain);
          });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Banner src={HomeBannerImg} />
      <div className={styles.header}>
        <div className={styles.headerPara}>
          <div>Dear Colleagues, welcome to Global Organizational Change</div>
          <div>
            Here you can find the information you need in two simple ways: the
            first one is using
          </div>
          <div>Playbook, the second is using a simple Decision Tree.</div>
        </div>
      </div>
      <div>
        <div className={styles.bodyContent}>
          <div
            className={styles.playBook}
            style={{
              backgroundImage: `url(${
                homeMain.length > 0
                  ? JSON.parse(
                      homeMain.filter((HM) => HM.Title == "Playbook")[0]
                        .PCMImage
                    ).serverRelativeUrl
                  : ""
              })`,
            }}
          >
            <div className={styles.topCornerArrowCover}>
              <div
                className={styles.topCornerArrow}
                style={{ backgroundImage: `url(${topCornerIcon})` }}
              ></div>
            </div>
            <div
              className={styles.bodyContentIcon}
              style={{ backgroundImage: `url(${playBookIcon})` }}
            ></div>
            <h1 className={styles.bodyContentHeading}>
              <div
                style={{ cursor: "pointer" }}
                // onClick={() => props.switchPlayBook("ToPlayBook")}
                onClick={() =>
                  (window.location.href = `${props.siteUrl}?topage=${props.PlayBookLink}`)
                }
              >
                {homeMain.length > 0
                  ? homeMain.filter((HM) => HM.Title == "Playbook")[0].Title
                  : ""}
              </div>
            </h1>
            <p className={styles.bodyCardContent}>
              <div className={styles.bodyContentLeft}>
                {homeMain.length > 0
                  ? homeMain.filter((HM) => HM.Title == "Playbook")[0].PCMDescr
                  : ""}
              </div>
              <div
                // onClick={() => props.switchPlayBook("ToPlayBook")}
                onClick={() =>
                  (window.location.href = `${props.siteUrl}?topage=${props.PlayBookLink}`)
                }
                className={styles.bodyContentRight}
                style={{ backgroundImage: `url(${playBookArrow})` }}
              ></div>
            </p>
            <div className={styles.playBookButtonSection}>
              <div
                className={styles.rightArrowIcon}
                style={{ backgroundImage: `url(${toRightArrow})` }}
              ></div>
              <div>
                <a href="#" className={styles.buttonContainer}>
                  <button
                    className={styles.playBookButton}
                    // onClick={() => props.switchPlayBook("ToWhyPlayBook")}
                    onClick={() =>
                      (window.location.href = `${props.siteUrl}?topage=${props.WhyPlayBooklink}`)
                    }
                  >
                    {homeMain.length > 0
                      ? homeMain.filter((HM) => HM.Title == "Playbook")[0]
                          .PCMLabel
                      : ""}
                  </button>
                </a>
              </div>
              <div
                className={styles.leftArrowIcon}
                style={{ backgroundImage: `url(${toLeftArrow})` }}
              ></div>
            </div>
            <div className={styles.bottomCornerArrowCover}>
              <div
                className={styles.bottomCornerArrow}
                style={{ backgroundImage: `url(${bottomCornerIcon})` }}
              ></div>
            </div>
          </div>
          <div className={styles.decisionTreeA}>
            <div
              className={styles.decisionTree}
              // style={{ backgroundImage: `url(${decisionTreeBG})` }}
              style={{
                backgroundImage: `url(${
                  homeMain.length > 0
                    ? JSON.parse(
                        homeMain.filter((HM) => HM.Title == "Decision Tree")[0]
                          .PCMImage
                      ).serverRelativeUrl
                    : ""
                })`,
              }}
            >
              <div className={styles.topCornerArrowCover}>
                <div
                  className={styles.topCornerArrow}
                  style={{ backgroundImage: `url(${topCornerIcon})` }}
                ></div>
              </div>
              <div
                className={styles.bodyContentIcon}
                // style={{ backgroundImage: `url(${decisionTreeIcon})` }}
                style={{
                  backgroundImage: `url(${
                    homeMain.length > 0
                      ? JSON.parse(
                          homeMain.filter(
                            (HM) => HM.Title == "Decision Tree"
                          )[0].PCMIcon
                        ).serverRelativeUrl
                      : ""
                  })`,
                }}
              ></div>
              <h1
                className={styles.bodyContentHeading}
                style={{ cursor: "pointer" }}
                // onClick={() => props.switchPlayBook("ToDecisionTree")}
                onClick={() =>
                  (window.location.href = `${props.siteUrl}?topage=${props.DecisionTreeLink}`)
                }
              >
                {homeMain.length > 0
                  ? homeMain.filter((HM) => HM.Title == "Decision Tree")[0]
                      .Title
                  : ""}
              </h1>
              <p className={styles.bodyCardContent}>
                <div className={styles.bodyContentLeft}>
                  {homeMain.length > 0
                    ? homeMain.filter((HM) => HM.Title == "Decision Tree")[0]
                        .PCMDescr
                    : ""}
                </div>
                <div
                  className={styles.bodyContentRight}
                  style={{ backgroundImage: `url(${decisionTreeArrow})` }}
                  // onClick={() => props.switchPlayBook("ToDecisionTree")}
                  onClick={() =>
                    (window.location.href = `${props.siteUrl}?topage=${props.DecisionTreeLink}`)
                  }
                ></div>
              </p>
              <div className={styles.bottomCornerArrowCover}>
                <div
                  className={styles.bottomCornerArrow}
                  style={{ backgroundImage: `url(${bottomCornerIcon})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.cardSection}
        style={{ backgroundImage: `url(${cardsBG})` }}
      >
        <div className={styles.cards}>{cardSection}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
