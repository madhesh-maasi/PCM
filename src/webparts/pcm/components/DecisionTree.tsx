import * as React from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { useState, useCallback } from "react";
import styles from "./DecisionTree.module.scss";
import "../../../ExternalRef/css/style.css";
import "@material-ui/core";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";
const prevbtnBlue = require("../../../ExternalRef/img/DecisionTree/prevbtnBlue.png");
const nextbtnBlue = require("../../../ExternalRef/img/DecisionTree/nextbtnBlue.png");
const PrevButtonDisabled = require("../../../ExternalRef/img/DecisionTree/PrevButtonDisabled.png");
const NextButtonDisabled = require("../../../ExternalRef/img/DecisionTree/NextButtonDisabled.png");
const bgi = require("../../../ExternalRef/img/DecisionTree/background.png");
const homeIcon = require("../../../ExternalRef/img/DecisionTree/homeBlue.png");
const quesbg = require("../../../ExternalRef/img/DecisionTree/quesBG.png");
const quesOne = require("../../../ExternalRef/img/DecisionTree/Question1.png");
const quesOneNum = require("../../../ExternalRef/img/DecisionTree/1.png");
const quesTwo = require("../../../ExternalRef/img/DecisionTree/Question2.png");
const cardBg = require("../../../ExternalRef/img/DecisionTree/cardbg.png");
const quesTwoNum = require("../../../ExternalRef/img/DecisionTree/2.png");
const l1 = require("../../../ExternalRef/img/DecisionTree/l1.png");
const l2 = require("../../../ExternalRef/img/DecisionTree/l2.png");
const l3 = require("../../../ExternalRef/img/DecisionTree/l3.png");
const l4 = require("../../../ExternalRef/img/DecisionTree/l4.png");
const r1 = require("../../../ExternalRef/img/DecisionTree/r1.png");
const r2 = require("../../../ExternalRef/img/DecisionTree/r2.png");
const r3 = require("../../../ExternalRef/img/DecisionTree/r3.png");
const r4 = require("../../../ExternalRef/img/DecisionTree/r4.png");

const DecisionTree = (props) => {
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
    <div className={styles.quesWrap} style={{ backgroundImage: `url(${bgi})` }}>
      <div className={styles.ques}>
        <div
          className={styles.quesImg}
          style={{ backgroundImage: `url(${quesbg})` }}
        >
          <img
            src={`${quesOne}`}
            alt="Question one image"
            style={{ width: "120px", marginLeft: "-20px" }}
          />
          <img
            className={styles.numImg}
            src={`${quesOneNum}`}
            alt="Question one image"
            style={{ width: "40px" }}
          />
        </div>

        <p>What phase is your project in ?</p>
      </div>

      <div className="select" style={{ position: "relative" }}>
        <Box>
          <FormControl>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value="Select your option">Select your option</option>
              <option value="initiation & Discovery">
                initiation & Discovery
              </option>
              <option value="Define & Design">Define & Design</option>
              <option value="Develop & Build">Develop & Build</option>
              <option value="Deployment & Implementation">
                Deployment & Implementation
              </option>
              <option value="Pst Deployment / Optimization">
                Pst Deployment / Optimization
              </option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
    </div>,
    <div className={styles.quesWrap} style={{ backgroundImage: `url(${bgi})` }}>
      <div className={styles.ques}>
        <div
          className={styles.quesImg}
          style={{ backgroundImage: `url(${quesbg})` }}
        >
          <img
            src={`${quesTwo}`}
            alt="Question one image"
            style={{ width: "120px", marginLeft: "-20px" }}
          />
          <img
            className={styles.numImg}
            src={`${quesTwoNum}`}
            alt="Question one image"
            style={{ width: "40px" }}
          />
        </div>

        <p>
          What are you deploying or changing <br /> (select all that apply)?
        </p>
      </div>

      <div className="selectBox">
        {/* <select>
          <option value="Select your option">Select your option</option>
          <option value="initiation & Discovery">initiation & Discovery</option>
          <option value="Define & Design">Define & Design</option>
          <option value="Develop & Build">Develop & Build</option>
          <option value="Deployment & Implementation">
            Deployment & Implementation
          </option>
          <option value="Pst Deployment / Optimization">
            Pst Deployment / Optimization
          </option> 
        </select> */}
        <Box>
          <FormControl>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value="Select your option">Select your option</option>
              <option value="Technology">Technology</option>
              <option value="Process">Process</option>
              <option value="Policies">Policies</option>
              <option value="Org Structure and/or Op Model">
                Org Structure and/or Op Model
              </option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
    </div>,
    <div
      className={styles.quesWrap}
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className={styles.Tcard}>
        <div className={styles.text}>
          <h1>Thank You !</h1>
          <h4>You've completed your survey</h4>
        </div>
        <div className={styles.btnSection}>
          <div className={styles.lArrows}>
            <img src={`${l1}`} alt="arrow" />
            <img src={`${l2}`} alt="arrow" />
            <img src={`${l3}`} alt="arrow" />
            <img src={`${l4}`} alt="arrow" />
          </div>
          <button>YOUR REPORT</button>
          <div className={styles.rArrows}>
            <img src={`${r1}`} alt="arrow" />
            <img src={`${r2}`} alt="arrow" />
            <img src={`${r3}`} alt="arrow" />
            <img src={`${r4}`} alt="arrow" />
          </div>
        </div>
        <p>Please click the button to download your report</p>
      </div>
    </div>,
  ];

  const [length, setLength] = useState(slideData.length);
  const slides = slideData.slice(0, length).map((slide, index) => slide);

  return (
    <>
      {/* top nav bar */}
      <div className={styles.topNav}>
        <div className={styles.nav} onClick={() => props.navHandler("ToHome")}>
          <img src={`${homeIcon}`} alt="home image" /> <p>{`>`}</p>{" "}
          <p>Decision Tree</p>
        </div>
      </div>
      {/* heading */}
      <div>
        <div className={styles.header}>
          <h1>Decision Tree</h1>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div
          className={styles.prevBtn}
          onClick={() => {
            setSlideIndex(slideIndex == 0 ? 0 : slideIndex - 1);
            console.log(slideIndex);
          }}
        >
          {" "}
          {slideIndex == 0 ? (
            <img src={`${PrevButtonDisabled}`} />
          ) : (
            <img src={`${prevbtnBlue}`} />
          )}
        </div>
        <div
          className={styles.nxtBtn}
          onClick={() => {
            setSlideIndex(
              slideIndex == slideData.length - 1
                ? slideData.length - 1
                : slideIndex + 1
            );
            console.log(slideIndex);
          }}
        >
          {slideIndex == slideData.length - 1 ? (
            <img src={`${NextButtonDisabled}`} />
          ) : (
            <img src={`${nextbtnBlue}`} />
          )}
        </div>
        {slides[slideIndex]}
        <div className={styles.status}>
          <div
            className={styles.statusBar}
            style={
              slideIndex == 0
                ? { width: "16px", backgroundColor: "#ca001b" }
                : {} && slideIndex == 1
                ? { width: "50%", backgroundColor: "#ca001b" }
                : {} && slideIndex == 2
                ? { width: "100%", backgroundColor: "#000099" }
                : {}
            }
          ></div>
          <div className={styles.statusPercentage}>
            <p>0%</p>
            <p>{slideIndex == 1 ? "50%" : ""}</p>
            <p>100%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DecisionTree;
