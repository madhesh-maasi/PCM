import * as React from "react";
import styles from "./HomePageDesign.module.scss";
import "../../../ExternalRef/css/style.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import PlaybookDetails from "./PlaybookDetails";
import { Icon } from "office-ui-fabric-react";

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

const HomePage = (props) => {
  const [homeMain, setHomeMain] = useState([]);

  useEffect(() => {
    props.sp.web.lists
          .getByTitle("Home main sections")
          .items.get()
          .then((homemain) => {
            setHomeMain(homemain);
          });
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
        <div className={styles.cardSec}>
          {homeMain.map((e) => {
            return <div className={styles.bodyContent}>
              <div
                style={{
                  backgroundImage: `url(${JSON.parse(e.PCMImage).serverRelativeUrl})`,
                }}
              >
                <div className={styles.topCornerArrowCover}>
                  <div
                    className={styles.topCornerArrow}
                    style={{ backgroundImage: `url(${topCornerIcon})`}}
                  ></div>
                </div>
                <div
                  className={styles.bodyContentIcon}
                  style={{ backgroundImage: `url(${JSON.parse(e.PCMIcon).serverRelativeUrl})`}}
                ></div>
                <h1 className={styles.bodyContentHeading}>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = `${e.PCMLink}`)
                    }
                  >
                    {e.Title}
                  </div>
                </h1>
                <p className={styles.bodyCardContent}>
                  <div className={styles.bodyContentLeft}>
                    {e.PCMDescr}
                  </div>
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
                        onClick={() =>
                          props.pageURL(window.location.href = `${e.PCMBtnLink}`)
                        }
                      >
                        Click Here
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
            </div>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
