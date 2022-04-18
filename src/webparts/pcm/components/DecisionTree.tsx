import * as React from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { useState, useCallback, useEffect } from "react";
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
import { forEach } from "lodash";
const prevbtnBlue = require("../../../ExternalRef/img/DecisionTree/prevbtnBlue.png");
const nextbtnBlue = require("../../../ExternalRef/img/DecisionTree/nextbtnBlue.png");
const PrevButtonDisabled = require("../../../ExternalRef/img/DecisionTree/PrevButtonDisabled.png");
const NextButtonDisabled = require("../../../ExternalRef/img/DecisionTree/NextButtonDisabled.png");
const bgi = require("../../../ExternalRef/img/DecisionTree/background.png");
const homeIcon = require("../../../ExternalRef/img/DecisionTree/homeBlue.png");
const cardBg = require("../../../ExternalRef/img/DecisionTree/cardbg.png");
const leftArrows = require("../../../ExternalRef/img/DecisionTree/Group359.png");
const rigthArrows = require("../../../ExternalRef/img/DecisionTree/Group358.png");
let questionsArr = [];
let answersArr = [];
let Q1Ans = [];
let Q2Ans = [];
let Q1 = "";
let Q2 = "";
let selectedAnsOne = 0;
let selectedAnsTwo = 0;
let currentUserName = "";
let arrReport = [];
let selectedAnswer;
const DecisionTree = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [questions, setQuestions] = useState(questionsArr);
  const [answersOne, setAnswersOne] = useState([]);
  const [answersTwo, setAnswersTwo] = useState([]);
  const [q1val, setq1Val] = useState(0);
  const [q2val, setq2Val] = useState(0);
  const [SelectedCombination, setSelectedCombination] = useState();
  // useEffect
  useEffect(() => {
    props.sp.web.currentUser.get().then((data) => {
      currentUserName = data.Title;
    });

    props.sp.web.lists
      .getByTitle("Answers")
      .items.select("*,PCMQuest/Title")
      .expand("PCMQuest")
      .get()
      .then((data) => {
        answersArr = data;
      })
      .catch((error) => {
        console.log(error);
      });

    props.sp.web.lists
      .getByTitle("Questions")
      .items.get()
      .then((data) => {
        questionsArr = data;
        Q1 = questionsArr.filter((item) => item.PCMOrder == 1)[0].Title;
        Q2 = questionsArr.filter((item) => item.PCMOrder == 2)[0].Title;
        setQuestions(questionsArr);
      })
      .then(() => {
        props.sp.web.lists
          .getByTitle("Answers")
          .items.select("*,PCMQuest/Title")
          .expand("PCMQuest")
          .get()
          .then((data) => {
            answersArr = data;
            Q1Ans = answersArr.filter((item) => item.PCMQuest.Title == Q1);
            Q2Ans = answersArr.filter((item) => item.PCMQuest.Title == Q2);
            setAnswersOne(Q1Ans);
            setAnswersTwo(Q2Ans);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    props.sp.web.lists
      .getByTitle("Reports")
      .items.select(
        "*,PCMFirstAnswer/Title,PCMFirstAnswer/ID,PCMSecAnswer/Title,PCMSecAnswer/ID"
      )
      .expand("PCMFirstAnswer,PCMSecAnswer")
      .get()
      .then((data) => {
        arrReport = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const SubmitReportHandler = () => {
    selectedAnswer = arrReport.filter(
      (item) =>
        item.PCMFirstAnswer.ID == selectedAnsOne &&
        item.PCMSecAnswer.ID == selectedAnsTwo
    )[0];
    console.log(selectedAnswer);

    props.sp.web.lists
      .getByTitle("UserResults")
      .items.add({
        Title: currentUserName,
        PCMReportId: selectedAnswer.ID,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const slideData = [
    <div className={styles.quesWrap} style={{ backgroundImage: `url(${bgi})` }}>
      <div className={styles.ques}>
        <div className={styles.quesText}>
          <p>Question</p>
          <h1>1</h1>
        </div>

        <p>
          {questions.length > 0
            ? questions.filter((item) => item.PCMOrder == 1)[0].Title
            : ""}
        </p>
      </div>

      {/* s1 */}

      <div className="select">
        <Box>
          <FormControl>
            <NativeSelect
              value={selectedAnsOne}
              onChange={(e) => {
                selectedAnsOne = +e.target.value;
                setq1Val(selectedAnsOne);
              }}
              inputProps={{
                name: "ques1",
                id: "ques1",
              }}
            >
              <option value={0}>Select your option</option>
              {answersOne.map((ans, i) => {
                return (
                  <option value={ans.ID} key={ans.id}>
                    {ans.Title}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
    </div>,
    <div className={styles.quesWrap} style={{ backgroundImage: `url(${bgi})` }}>
      <div className={styles.ques}>
        <div className={styles.quesText}>
          <p>Question</p>
          <h1>2</h1>
        </div>
        <p style={{ marginRight: "130px" }}>
          {questions.length > 0
            ? questions.filter((item) => item.PCMOrder == 2)[0].Title
            : ""}
        </p>
      </div>

      {/* s2 */}
      <div className="selectBox">
        <Box>
          <FormControl>
            <NativeSelect
              value={selectedAnsTwo}
              onChange={(e) => {
                selectedAnsTwo = +e.target.value;
                setq2Val(selectedAnsTwo);
              }}
              inputProps={{
                name: "ques2",
                id: "ques2",
              }}
            >
              <option value="Select your option">Select your option</option>
              {answersTwo.map((ans, i) => {
                return (
                  <option value={ans.ID} key={ans.id}>
                    {ans.Title}
                  </option>
                );
              })}
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
            <img src={`${leftArrows}`} alt="arrow" />
          </div>
          <button
            onClick={() => {
              window.open(`${selectedAnswer.PCMLink}&download=1`);
            }}
          >
            YOUR REPORT
          </button>
          <div className={styles.rArrows}>
            <img src={`${rigthArrows}`} alt="arrow" />
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
        <div className={styles.nav}>
          <img
            src={`${homeIcon}`}
            alt="home image"
            onClick={() => props.navHandler("ToHome")}
          />{" "}
          <p>{`>`}</p> <p>Decision Tree</p>
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
            if (slideIndex != 2) {
              setSlideIndex(slideIndex == 0 ? 0 : slideIndex - 1);
            }
          }}
        >
          {" "}
          {slideIndex == 0 ? (
            <img
              style={{ cursor: "not-allowed" }}
              src={`${PrevButtonDisabled}`}
            />
          ) : slideIndex == 2 ? (
            <img
              style={{ cursor: "not-allowed" }}
              src={`${PrevButtonDisabled}`}
            />
          ) : (
            <img src={`${prevbtnBlue}`} />
          )}
        </div>
        <div
          className={styles.nxtBtn}
          onClick={() => {
            if (slideIndex == 1) {
              SubmitReportHandler();
            }
            setSlideIndex(
              slideIndex == slideData.length - 1
                ? slideData.length - 1
                : slideIndex + 1
            );
          }}
        >
          {slideIndex == slideData.length - 1 ? (
            <img
              style={{ cursor: "not-allowed" }}
              src={`${NextButtonDisabled}`}
            />
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
