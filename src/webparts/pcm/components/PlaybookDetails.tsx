import * as React from "react";
import styles from "./PlaybookDetails.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import "../../../ExternalRef/css/style.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";
const FirstArrowUnselected = require("../../../ExternalRef/img/PlayBookPhases/FirstArrowUnselected.png");
const ArrowUnselected = require("../../../ExternalRef/img/PlayBookPhases/ArrowUnselected.png");
const ScopeArrowSelected = require("../../../ExternalRef/img/PlayBookPhases/ScopeArrowselected.png");
const DefineArrowSelected = require("../../../ExternalRef/img/PlayBookPhases/DefineArrowselected.png");
const ExecuteArrowSelected = require("../../../ExternalRef/img/PlayBookPhases/ExecuteArrowselected.png");
const ImplementArrowSelected = require("../../../ExternalRef/img/PlayBookPhases/ImplementArrowselected.png");
const OptimizeArrowSelected = require("../../../ExternalRef/img/PlayBookPhases/OptimizeArrowselected.png");
const ScopeNav = require("../../../ExternalRef/img/PlayBookPhases/ScopeNav.png");
const DefineNav = require("../../../ExternalRef/img/PlayBookPhases/DefineNav.png");
const ExecuteNav = require("../../../ExternalRef/img/PlayBookPhases/ExecuteNav.png");
const ImplementNav = require("../../../ExternalRef/img/PlayBookPhases/ImplementNav.png");
const OptimizeNav = require("../../../ExternalRef/img/PlayBookPhases/OptimizeNav.png");
let HomeIcon = require("../../../ExternalRef/img/homeIcon.png");
let arrLifecycleList = [];
let arrLifeycleDescr = [];
let arrFilteredDescr = [];
let arrLifecycleDoc = [];
let arrFilteredtable = [];
const PlaybookDetails = (props) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  const [lifecylceList, setLifecycleList] = useState(arrLifecycleList);
  const [lifecycleDoc, setLifecycleDoc] = useState(arrLifecycleDoc);
  const [filteredTableContent, setFilteredTableContent] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  useEffect(() => {
    props.sp.web.lists
      .getByTitle("Lifecycles")
      .items.get()
      .then((data) => {
        arrLifecycleList = data;
        setLifecycleList(arrLifecycleList);
      })
      .catch((error) => console.log(error));
    props.sp.web.lists
      .getByTitle("Lifecycle description")
      .items.select("*,PCMOrderNo/PCMOrder")
      .expand("PCMOrderNo")
      .get()
      .then((data) => {
        arrLifeycleDescr = data;
        arrFilteredDescr = arrLifeycleDescr.filter(
          (li) =>
            li.PCMOrderNo.PCMOrder ==
            (selectedItem == "Scope"
              ? 1
              : selectedItem == "Define"
              ? 2
              : selectedItem == "Execute"
              ? 3
              : selectedItem == "Implement"
              ? 4
              : selectedItem == "Optimize"
              ? 5
              : "")
        );
        console.log(arrFilteredDescr);
        setDescriptions(arrFilteredDescr);
      })
      .catch((error) => console.log(error));
    props.sp.web.lists
      .getByTitle("Lifecycle documents")
      .items.get()
      .then((data) => {
        arrLifecycleDoc = data;
        setLifecycleDoc(arrLifecycleDoc);
        arrFilteredtable = arrLifecycleDoc.filter(
          (item) =>
            item.PCMOrder ==
            (selectedItem == "Scope"
              ? 1
              : selectedItem == "Define"
              ? 2
              : selectedItem == "Execute"
              ? 3
              : selectedItem == "Implement"
              ? 4
              : selectedItem == "Optimize"
              ? 5
              : "")
        );
        setFilteredTableContent(arrFilteredtable);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <input autoFocus={true} style={{ height: 0, width: 0, opacity: 0 }} />
      <div className={`${styles.container}`}>
        <div
          className={
            selectedItem == "Scope"
              ? styles.Scope
              : selectedItem == "Define"
              ? styles.Define
              : selectedItem == "Execute"
              ? styles.Execute
              : selectedItem == "Implement"
              ? styles.Implement
              : selectedItem == "Optimize"
              ? styles.Optimize
              : ""
          }
        >
          <div className={styles.Nav}>
            <div
              onClick={() => props.navHandler("ToHome")}
              className={styles.homeIcon}
              style={{ backgroundImage: `url(${HomeIcon})` }}
            ></div>
            <div className={styles.navCrumbArrow}>{">"}</div>
            <div
              className={styles.navContent}
              onClick={() => props.navHandler("ToPlayBook")}
            >
              {" "}
              {"Playbook "}
            </div>
            <div className={styles.navCrumbArrow}>{">"}</div>
            <div className={styles.navContent}>
              {" "}
              {`${
                selectedItem == "Scope"
                  ? "Discovery Phase"
                  : selectedItem == "Define"
                  ? "Define Phase"
                  : selectedItem == "Execute"
                  ? "Execute (Bulid) Phase"
                  : selectedItem == "Implement"
                  ? "Implement Phase"
                  : selectedItem == "Optimize"
                  ? "Optimize Phase"
                  : ""
              }`}
            </div>
          </div>
          <div className={styles.navArrow}>
            <div
              onClick={() => setSelectedItem("Scope")}
              className={styles.navArrowOneCover}
              style={{
                backgroundImage: `url(${
                  selectedItem == "Scope"
                    ? ScopeArrowSelected
                    : FirstArrowUnselected
                })`,
              }}
            >
              <div
                className={styles.navArrowOne}
                onClick={() => {
                  arrFilteredtable = arrLifecycleDoc.filter(
                    (item) => item.PCMOrder == 1
                  );
                  setFilteredTableContent(arrFilteredtable);
                  arrFilteredDescr = arrLifeycleDescr.filter(
                    (li) => li.PCMOrderNo.PCMOrder == 1
                  );
                  console.log(arrFilteredDescr);
                  setDescriptions(arrFilteredDescr);
                }}
              >
                <div className={styles.navArrowHeading}>
                  {lifecylceList.length > 0
                    ? lifecylceList.filter((item) => item.PCMOrder == 1)[0]
                        .Title
                    : ""}
                  <span>
                    {" "}
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 1)[0]
                          .PCMSubtitle
                      : ""}
                  </span>
                </div>
                <div className={styles.navArrowNumber}>1</div>
              </div>
            </div>
            <div
              onClick={() => setSelectedItem("Define")}
              className={styles.navArrowTwoCover}
              style={{
                backgroundImage: `url(${
                  selectedItem == "Define"
                    ? DefineArrowSelected
                    : ArrowUnselected
                })`,
              }}
            >
              <div
                className={styles.navArrowTwo}
                onClick={() => {
                  arrFilteredtable = arrLifecycleDoc.filter(
                    (item) => item.PCMOrder == 2
                  );
                  setFilteredTableContent(arrFilteredtable);
                  arrFilteredDescr = arrLifeycleDescr.filter(
                    (li) => li.PCMOrderNo.PCMOrder == 2
                  );
                  console.log(arrFilteredDescr);
                  setDescriptions(arrFilteredDescr);
                }}
              >
                <div className={styles.navArrowHeading}>
                  {lifecylceList.length > 0
                    ? lifecylceList.filter((item) => item.PCMOrder == 2)[0]
                        .Title
                    : ""}{" "}
                  <span>
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 2)[0]
                          .PCMSubtitle
                      : ""}
                  </span>
                </div>
                <div className={styles.navArrowNumber}>2</div>
              </div>
            </div>
            <div
              onClick={() => setSelectedItem("Execute")}
              className={styles.navArrowThreeCover}
              style={{
                backgroundImage: `url(${
                  selectedItem == "Execute"
                    ? ExecuteArrowSelected
                    : ArrowUnselected
                })`,
              }}
            >
              <div
                className={styles.navArrowThree}
                onClick={() => {
                  arrFilteredtable = arrLifecycleDoc.filter(
                    (item) => item.PCMOrder == 3
                  );
                  setFilteredTableContent(arrFilteredtable);
                  arrFilteredDescr = arrLifeycleDescr.filter(
                    (li) => li.PCMOrderNo.PCMOrder == 3
                  );
                  console.log(arrFilteredDescr);
                  setDescriptions(arrFilteredDescr);
                }}
              >
                <div className={styles.navArrowHeading}>
                  {lifecylceList.length > 0
                    ? lifecylceList.filter((item) => item.PCMOrder == 3)[0]
                        .Title
                    : ""}
                  <span>
                    {" "}
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 3)[0]
                          .PCMSubtitle
                      : ""}
                  </span>
                </div>
                <div className={styles.navArrowNumber}>3</div>
              </div>
            </div>
            <div
              onClick={() => setSelectedItem("Implement")}
              className={styles.navArrowFourCover}
              style={{
                backgroundImage: `url(${
                  selectedItem == "Implement"
                    ? ImplementArrowSelected
                    : ArrowUnselected
                })`,
              }}
            >
              <div
                className={styles.navArrowFour}
                onClick={() => {
                  arrFilteredtable = arrLifecycleDoc.filter(
                    (item) => item.PCMOrder == 4
                  );
                  setFilteredTableContent(arrFilteredtable);
                  arrFilteredDescr = arrLifeycleDescr.filter(
                    (li) => li.PCMOrderNo.PCMOrder == 4
                  );
                  console.log(arrFilteredDescr);
                  setDescriptions(arrFilteredDescr);
                }}
              >
                <div className={styles.navArrowHeading}>
                  {lifecylceList.length > 0
                    ? lifecylceList.filter((item) => item.PCMOrder == 4)[0]
                        .Title
                    : ""}
                  <span>
                    {" "}
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 4)[0]
                          .PCMSubtitle
                      : ""}
                  </span>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.navArrowNumber}>4</div>
              </div>
            </div>
            <div
              onClick={() => setSelectedItem("Optimize")}
              className={styles.navArrowFiveCover}
              style={{
                backgroundImage: `url(${
                  selectedItem == "Optimize"
                    ? OptimizeArrowSelected
                    : ArrowUnselected
                })`,
              }}
            >
              <div
                className={styles.navArrowFive}
                onClick={() => {
                  arrFilteredtable = arrLifecycleDoc.filter(
                    (item) => item.PCMOrder == 5
                  );
                  setFilteredTableContent(arrFilteredtable);
                  arrFilteredDescr = arrLifeycleDescr.filter(
                    (li) => li.PCMOrderNo.PCMOrder == 5
                  );
                  console.log(arrFilteredDescr);
                  setDescriptions(arrFilteredDescr);
                }}
              >
                <div className={styles.navArrowHeading}>
                  {lifecylceList.length > 0
                    ? lifecylceList.filter((item) => item.PCMOrder == 5)[0]
                        .Title
                    : ""}
                  <span>
                    {" "}
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 5)[0]
                          .PCMSubtitle
                      : ""}
                  </span>
                </div>
                <div className={styles.navArrowNumber}>5</div>
              </div>
            </div>
          </div>
          <div className={styles.bodyContent}>
            <div className={styles.bodyContentHeader}>
              {lifecylceList.length > 0
                ? lifecylceList.filter(
                    (item) =>
                      item.PCMOrder ==
                      (selectedItem == "Scope"
                        ? 1
                        : selectedItem == "Define"
                        ? 2
                        : selectedItem == "Execute"
                        ? 3
                        : selectedItem == "Implement"
                        ? 4
                        : selectedItem == "Optimize"
                        ? 5
                        : "")
                  )[0].PCMParTitle
                : ""}
              <div className={styles.line}></div>
            </div>

            <div className={styles.bodyContentLists}>
              <ul>
                {descriptions.length > 0
                  ? descriptions
                      .filter(
                        (des) => des.PCMDescrType == "Paragraph Description"
                      )
                      .map((filteredItem) => {
                        return <li>{filteredItem.PCMDescr}</li>;
                      })
                  : ""}
              </ul>
            </div>
          </div>
          <div className={styles.playBookScopePhases}>
            <div className={styles.verticalTitle}>
              <div>{`${
                selectedItem == "Scope"
                  ? "Scope (Discovery) Phase"
                  : selectedItem == "Define"
                  ? "Define (Design) Phase"
                  : selectedItem == "Execute"
                  ? "Execute (Build) Phase"
                  : selectedItem == "Implement"
                  ? "Implement phase"
                  : selectedItem == "Optimize"
                  ? "Optimize phase"
                  : ""
              }`}</div>
            </div>
            <div className={styles.phases}>
              <div className={styles.phaseTop}>
                <div className={styles.phaseOne}>
                  <div className={styles.phaseOneHeading}>
                    {lifecylceList.length > 0
                      ? lifecylceList.filter(
                          (item) =>
                            item.PCMOrder ==
                            (selectedItem == "Scope"
                              ? 1
                              : selectedItem == "Define"
                              ? 2
                              : selectedItem == "Execute"
                              ? 3
                              : selectedItem == "Implement"
                              ? 4
                              : selectedItem == "Optimize"
                              ? 5
                              : "")
                        )[0].PCMPMTitle
                      : ""}
                    <div className={styles.line}></div>
                  </div>
                  <div>
                    {
                      <ul>
                        {descriptions.length > 0
                          ? descriptions
                              .filter(
                                (des) =>
                                  des.PCMDescrType ==
                                  "Project Management Description"
                              )
                              .map((filteredItem) => {
                                return <li>{filteredItem.PCMDescr}</li>;
                              })
                          : ""}
                      </ul>
                    }
                  </div>
                </div>
                <div className={styles.phaseTwo}>
                  <div className={styles.phaseTwoHeading}>
                    {/* What do I do: Change Management Process Areas */}
                    {lifecylceList.length > 0
                      ? lifecylceList.filter((item) => item.PCMOrder == 1)[0]
                          .PCMCMTitle
                      : ""}
                    <div className={styles.line}></div>
                  </div>
                  <div>
                    <ul>
                      {descriptions.length > 0
                        ? descriptions
                            .filter(
                              (des) =>
                                des.PCMDescrType ==
                                "Change management Description"
                            )
                            .map((filteredItem) => {
                              return <li>{filteredItem.PCMDescr}</li>;
                            })
                        : ""}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.phaseBottom}>
                <div className={styles.phaseThree}>
                  <table>
                    <tr>
                      <th
                        className={styles.tableHeadingOne}
                        style={{ width: "70%" }}
                      >
                        {selectedItem == "Scope"
                          ? `How do I do it: Change Management Process Steps & Tools`
                          : `Change Management Process Steps & Tools (follow these steps in order)`}
                      </th>
                      <th
                        className={styles.tableHeadingTwo}
                        style={{ width: "20%" }}
                      >
                        Change Lever
                      </th>
                      <th
                        className={styles.tableHeadingThree}
                        style={{ width: "10%" }}
                      >
                        Owner
                      </th>
                    </tr>
                    {filteredTableContent.map((table, idx) => {
                      return (
                        <tr>
                          <td>
                            {`${table.PCMOrder}.${idx + 1} ${table.Title}`}
                            {table.PCMLinkocLink != "" ? (
                              <a
                                href={`${table.PCMLink}`}
                                style={{ marginLeft: "0.3rem" }}
                                target="_blank"
                              >
                                [Tools & More]
                              </a>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            <a href={`${table.PCMLeverLink}`} target="_blank">
                              {table.PCMSubtitle}
                            </a>
                          </td>
                          <td>{table.PCMOwner}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PlaybookDetails;
