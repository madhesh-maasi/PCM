import * as React from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { useState, useCallback } from "react";
import styles from "./WhyPlayBook.module.scss";
import "../../../ExternalRef/css/style.css";
import Footer from "./Footer";
import GearImageMapping from "./GearImageMapping";
import ArrowImageMapping from "./ArrowImageMapping";
import Banner from "./Banner";
const PageOneNav = require("../../../ExternalRef/img/WhyPlayBook/ContentOneNav.png");
const PrevButton = require("../../../ExternalRef/img/WhyPlayBook/PrevButton.png");
const PrevButtonDisabled = require("../../../ExternalRef/img/WhyPlayBook/PrevButtonDisabled.png");
const NextButton = require("../../../ExternalRef/img/WhyPlayBook/NextButton.png");
const NextButtonDisabled = require("../../../ExternalRef/img/WhyPlayBook/NextButtonDisabled.png");
const PageOneBg = require("../../../ExternalRef/img/WhyPlayBook/PageOneBG.png");
const RedDot = require("../../../ExternalRef/img/WhyPlayBook/RedDot.png");
const AbleSection = require("../../../ExternalRef/img/WhyPlayBook/AbleSection.png");
const ReadySection = require("../../../ExternalRef/img/WhyPlayBook/ReadySection.png");
const WillingSection = require("../../../ExternalRef/img/WhyPlayBook/WillingSection.png");
const PageThreeGraph = require("../../../ExternalRef/img/WhyPlayBook/PageThreeGraph.png");
const PageFourTable = require("../../../ExternalRef/img/WhyPlayBook/PageFourTable.png");
const PageFiveImg = require("../../../ExternalRef/img/WhyPlayBook/PageFiveImg.png");
const PageSixImg = require("../../../ExternalRef/img/WhyPlayBook/PageSixImg.png");
const PageSevenImg = require("../../../ExternalRef/img/WhyPlayBook/PageSevenImg.png");
const PageEightImg = require("../../../ExternalRef/img/WhyPlayBook/PageEightImg.png");
const homeIcon = require("../../../ExternalRef/img/WhyPlayBook/homeicon.png");
const ContentBannerImg = require("../../../ExternalRef/img/BannerImages/ContentsBannerImg.png");
const HeadingsArr = [
  <div className={styles.header}>
    <h1>Table of Contents</h1>
  </div>,
  <div className={styles.header}>
    <h1>What is Change Management? </h1>
    <p>
      Change Management is the process of getting individuals and groups Ready,
      <br />
      Willing and Able to implement and sustain new ways of <br />
      working.
    </p>
  </div>,
  <div className={styles.header}>
    <h1>Change Curve – Emotional Journey</h1>
    <p>
      The Commitment Curve can be used to identify the current level of
      commitment for each audience, and the desired level of <br />
      commitment to reach.
    </p>
  </div>,
  <div className={styles.header}>
    <h1>Consequences of NOT Using Change Management</h1>
  </div>,
  <div className={styles.header}>
    <h1>Key Players in Managing Change</h1>
  </div>,
  <div className={styles.header}>
    <h1>
      Apply CM techniques into each PM Process Group <br /> and Knowledge Area{" "}
    </h1>
  </div>,
  <div className={styles.header}>
    <h1>Global Procurement OCM Playbook</h1>
    <p>
      Follow the steps outlined below when using the Global Procurement OCM
      Playbook.{" "}
    </p>
  </div>,
  <div className={styles.header}>
    <h1>Procurement Change Management Framework</h1>
  </div>,
];

const navHeadingsArr = [
  "",
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>What is Change Management?</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Change Curve – Emotional Journey</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Consequences of NOT Using Change Management</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Key Players in Managing Change</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Apply CM techniques</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Global Procurement OCM Playbook</p>
  </div>,
  <div className={styles.navpage}>
    <p>{`>`}</p>
    <p>Procurement Change Management Framework</p>
  </div>,
];

const WhyPlayBook = (props) => {
  const [animation, setAnimation] = useState(undefined);
  const [heightMode, setHeightMode] = useState("max");
  const [scrollMode, setScrollMode] = useState("remainder");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState("scroll");
  const [underlineHeader, setUnderlineHeader] = useState(false);

  const handleImageClick = useCallback(() => {
    setUnderlineHeader((prevUnderlineHeader) => !prevUnderlineHeader);
  }, []);

  const slideData = [
    <div className={styles.firstSlide}>
      <div className={styles.wrapper}>
        <div
          className={styles.links}
          style={{ backgroundImage: `url(${PageOneBg})` }}
        >
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(1);
              }}
            >
              What is Change Management? <p>2</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(2);
              }}
            >
              Change Curve – Emotional Journey <p>3</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(3);
              }}
            >
              Consequences of NOT Using Change Management <p>4</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(4);
              }}
            >
              Key Players in Managing Change<p>5</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(5);
              }}
            >
              Apply CM Techniques into each PM Process Group and <br />
              Knowledge Area<p>6</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(6);
              }}
            >
              <p>Global Procurement OCM Playbook </p> <p>7</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setSlideIndex(7);
              }}
            >
              <p>Procurement Change Management Framework</p> <p>8</p>
            </a>
          </li>
        </div>
      </div>
    </div>,
    <div className={styles.secondSlide}>
      <div className={styles.cardImages}>
        <img src={`${ReadySection}`} alt="card-image" />
        <img src={`${WillingSection}`} alt="card-image" />
        <img src={`${AbleSection}`} alt="card-image" />
      </div>
    </div>,
    <div className={styles.thirdSlide}>
      <div className={styles.slideimg}>
        <img src={`${PageThreeGraph}`} alt="" />
      </div>
    </div>,
    <div className={styles.fourthSlide}>
      <table cellSpacing={"10px"}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "transparent" }}></th>
            <th>Short term</th>
            <th>Long term</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#000099",
                color: "#fff",
                borderRadius: "2px",
                padding: "10px 30px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Direct
            </td>
            <td style={{ borderBottom: "1px solid #000099" }}>
              <li>Resourses Wasted</li>
              <li>Buisness Objectives not met</li>
              <li>
                People finds work arounds that may <br /> increase risk
              </li>
              <li>Actiove and passive resistance</li>
            </td>
            <td style={{ borderBottom: "1px solid #000099" }}>
              <li>Strategies not accomplished</li>
              <li>Changes not fully implemented</li>
              <li>Lower productivity</li>
              <li>Change being totally scrapped</li>
            </td>
          </tr>

          <tr>
            <td
              style={{
                backgroundColor: "#000099",
                color: "#fff",
                borderRadius: "2px",
                padding: "10px 30px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Indirect
            </td>
            <td>
              <li>Morale suffers</li>
              <li>Job Security Threatened</li>
              <li>Divides are created between "us" and "them"</li>
              <li>Turnover of valued employees</li>
            </td>
            <td>
              <li>Lower Confidence </li>
              <li>Resistence increase</li>
              <li>Next change initiatives is likely to fail </li>
              <li>
                Lack of engagement and commitment <br /> for future stat
              </li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>,
    <div className={styles.fifthSlide}>
      <div className={styles.slideimg}>
        <img src={`${PageFiveImg}`} alt="" />
      </div>
    </div>,
    <div className={styles.sixthSlide}>
      <div className={styles.slideimg}>
        <img src={`${PageSixImg}`} alt="image" />
      </div>
    </div>,
    <ArrowImageMapping sp={props.sp} />,
    <GearImageMapping sp={props.sp} />,
  ];

  const [length, setLength] = useState(slideData.length);
  const slides = slideData.slice(0, length).map((slide, index) => slide);

  return (
    <>
      <Banner src={ContentBannerImg} />
      {/* top nav bar */}
      <div className={styles.topNav}>
        <div className={styles.nav}>
          <img
            // onClick={() => props.navHandler("ToHome")}
            // onClick={() =>
            //   (window.location.href = `${props.siteUrl}?topage=home`)
            // }
            onClick={() =>
              (window.location.href = `${props.absoluteUrl}/SitePages/Home.aspx`)
            }
            src={`${homeIcon}`}
            alt="home image"
          />{" "}
          <p>{`>`}</p>{" "}
          <button
            onClick={() => {
              setSlideIndex(0);
            }}
          >
            {" "}
            Table of Contents{" "}
          </button>{" "}
          {navHeadingsArr[slideIndex]}
        </div>
        <div className={styles.actionBtns}>
          <button
            //  onClick={() => props.navHandler("ToPlayBook")}
            onClick={() => (window.location.href = props.PlayBookLink)}
            // onClick={() =>
            //   (window.location.href = `${props.absoluteUrl}/SitePages/Playbook.aspx`)
            // }
          >
            Go to Playbook
          </button>
        </div>
      </div>
      {/* heading */}
      <div>{HeadingsArr[slideIndex]}</div>

      <div className={styles.carouselWrapper}>
        <Carousel
          className={styles.carousel}
          animation={animation}
          heightMode={"current"}
          slideIndex={slideIndex}
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
          transitionMode={"scroll"}
          renderCenterLeftControls={({ previousSlide }) => (
            <div
              className={styles.prevBtn}
              onClick={() => {
                // previousSlide();
                setSlideIndex(slideIndex == 0 ? 0 : slideIndex - 1);
                console.log(slideIndex);
              }}
              //style={themeBoxShadow}
            >
              {" "}
              {slideIndex == 0 ? (
                <img src={`${PrevButtonDisabled}`} />
              ) : (
                <img src={`${PrevButton}`} />
              )}
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div
              className={styles.nxtBtn}
              // onClick={nextSlide}
              onClick={() => {
                // previousSlide();
                setSlideIndex(
                  slideIndex == slideData.length - 1
                    ? slideData.length - 1
                    : slideIndex + 1
                );
                console.log(slideIndex);
              }}
              //style={themeBoxShadow}
            >
              {slideIndex == slideData.length - 1 ? (
                <img src={`${NextButtonDisabled}`} />
              ) : (
                <img src={`${NextButton}`} />
              )}
            </div>
          )}
        >
          {slides[slideIndex]}
        </Carousel>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px 0",
          }}
        >
          <div
            style={{
              transform: "translateY(40px)",
            }}
          >
            {slides.map((slide, idx) => (
              <button
                className={
                  slideIndex == idx
                    ? styles.pageIndicatorActive
                    : styles.pageIndicator
                }
                // id={`${idx}`}
                key={idx}
                // onClick={(e) => {
                //   setSlideIndex(+e.target["id"]);
                //   console.log(+e.target["id"]);
                // }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="controlsWrapper">
        <div
          style={{
            margin: "40px 10px",
            display: "flex",
            justifyContent: "space-around",
            height: "36px",
          }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default WhyPlayBook;
