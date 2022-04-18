import * as React from "react";
import styles from "./PlaybookGrid.module.scss";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import PlaybookDetails from "./PlaybookDetails";
import Banner from "./Banner";
let homeIcon = require("../../../ExternalRef/img/homeIcon.png");
const greyPattern = require("../../../ExternalRef/img/greyPatternBackground.png");
const DiscoverArrow = require("../../../ExternalRef/img/DiscoverArrow.png");
const DesignArrow = require("../../../ExternalRef/img/DesignArrow.png");
const BuildArrow = require("../../../ExternalRef/img/BuildArrow.png");
const ImplementArrow = require("../../../ExternalRef/img/ImplementArrow.png");
const OptimizeArrow = require("../../../ExternalRef/img/OptimizeArrow.png");
const DiscoverProgress = require("../../../ExternalRef/img/DiscoverProgress.png");
const DesignProgress = require("../../../ExternalRef/img/DesignProgress.png");
const BuildProgress = require("../../../ExternalRef/img/BuildProgress.png");
const ImplementProgress = require("../../../ExternalRef/img/ImplementProgress.png");
const OptimizeProgress = require("../../../ExternalRef/img/OptimizeProgress.png");
const LegendProgress = require("../../../ExternalRef/img/LegendProgress.png");
const BuDotImg = require("../../../ExternalRef/img/BuDotImg.png");
const CtDotImg = require("../../../ExternalRef/img/CtDotImg.png");
const CenterImg = require("../../../ExternalRef/img/CenterImg.png");
const ContentBannerImg = require("../../../ExternalRef/img/BannerImages/ContentsBannerImg.png");
let arrDescriptions = [];
let arrCMDescr = [];
let arrCmDescrOptions = [];
let arrBottomDescrOptions = [];
const PlaybookGrid = (props) => {
  const [isArrowPage, setIsArrowPage] = useState(true);
  const [descriptions, setDescriptions] = useState(arrDescriptions);
  const [cmDescr, setCmDescr] = useState(arrCMDescr);
  const [descrOptions, setDescrOptions] = useState([]);
  const [bottomDescrOptions, setbottomDescrOptions] = useState([]);
  const [bottomDescr, setBottomDescr] = useState([]);
  useEffect(() => {
    props.sp.web.lists
      .getByTitle("Lifecycle description")
      .fields.filter("EntityPropertyName eq 'PCMDescrLabel'")
      .get()
      .then((types) => {
        arrCmDescrOptions = types[0].Choices;
        console.log(arrCmDescrOptions);
        setDescrOptions(arrCmDescrOptions);
      })
      .then(async () => {
        await props.sp.web.lists
          .getByTitle("ArrowBottom")
          .fields.filter("EntityPropertyName eq 'PCMDescrLabel'")
          .get()
          .then((types) => {
            arrBottomDescrOptions = types[0].Choices;
            setbottomDescrOptions(arrBottomDescrOptions);
          });
        await props.sp.web.lists
          .getByTitle("Lifecycle description")
          .items.select("*,PCMOrderNo/PCMOrder,PCMOrderNo/Title")
          .expand("PCMOrderNo")
          .get()
          .then((data) => {
            arrDescriptions = data;
            setDescriptions(arrDescriptions);
            arrCMDescr = arrDescriptions.filter(
              (li) => li.PCMDescrType == "Change management Description"
            );
            console.log(arrCMDescr);
            setCmDescr(arrCMDescr);
          })
          .then(async () => {
            await props.sp.web.lists
              .getByTitle("ArrowBottom")
              .items.select("*,PCMOrderNo/PCMOrder,PCMOrderNo/Title")
              .expand("PCMOrderNo")
              .get()
              .then((liItem) => {
                console.log(liItem);
                setBottomDescr(liItem);
              });
          })
          .catch((error) => console.log(error));
      });
  }, []);
  return (
    <>
      <Banner src={ContentBannerImg} />
      {isArrowPage ? (
        <div className={styles.playbookGrid}>
          {/* BreadCrumb Section */}
          <div className={styles.breadCrumbSection}>
            <div
              onClick={() => props.navHandler("ToHome")}
              className={styles.homeIcon}
              style={{ backgroundImage: `url(${homeIcon})` }}
            ></div>
            <div className={styles.crumbMenu}>
              <div className={styles.crumbArrow}>{">"}</div>
              <div className={styles.crumbMenuItem}>Playbook</div>
            </div>
          </div>
          {/* BreadCrumb Section */}
          {/* HeadingSection */}
          <div className={styles.pageHeadingSection}>
            Apply Change Management Framework to FPx Project Lifecycle Phases
            <div className={styles.redUnderline}></div>
          </div>
          {/* HeadingSection */}
          {/* Arrow Design */}
          <div
            className={styles.arrowSection}
            style={{ backgroundImage: `url(${greyPattern})` }}
          >
            <div className={styles.arrowGrid}>
              <div className={`${styles.leftSidebar} leftSidebar`}>
                <div className={styles.headerLabel}>
                  {" "}
                  Change Management Framework Process Steps
                </div>
              </div>
              <div className={`${styles.coloredHeaderGrey} coloredHeaderGrey`}>
                <div className={styles.headerLabel}>CT/BU/GS - Led</div>
              </div>
              <div
                className={`${styles.coloredHeaderLightBlue} coloredHeaderLightBlue`}
              >
                <div className={styles.headerLabel}>
                  Corporate Tier (CT) - Led
                </div>
              </div>
              <div
                className={`${styles.coloredHeaderPurple} coloredHeaderPurple`}
              >
                <div className={styles.headerLabel}>
                  Business Unit (BU) Tier + Global Services (GS) - Led
                </div>
              </div>
              <div className={`${styles.rightSidebar} rightSidebar`}>
                <div className={styles.headerLabel}>
                  {" "}
                  Primary FPx Stage Gate Processes
                </div>
              </div>
              <div className={styles.ScopeDiscover}>
                <div>
                  <div className={`${styles.scopeTopSection} scopeTopSection`}>
                    <div
                      className={`${styles.scopeTopListSection} scopeTopListSection`}
                    >
                      {/* <div>
                        <ul>
                          {cmDescr.length > 0
                            ? cmDescr
                                .filter((li) => li.PCMOrderNo.PCMOrder == 1)
                                .map((li) => {
                                  return <li>{li.PCMDescr}</li>;
                                })
                            : ""}
                        </ul>
                      </div> */}
                      <div>
                        {descrOptions.length && cmDescr.length > 0
                          ? descrOptions.map((option) => {
                              return cmDescr.filter(
                                (desc) =>
                                  desc.PCMDescrLabel == option &&
                                  desc.PCMOrderNo.PCMOrder == 1
                              ).length > 0 ? (
                                <div>
                                  <div className={styles.coloredHeaderBlue}>
                                    {option}
                                  </div>
                                  <ul>
                                    {cmDescr
                                      .filter(
                                        (li) =>
                                          li.PCMOrderNo.PCMOrder == 1 &&
                                          li.PCMDescrLabel == option
                                      )
                                      .map((li) => {
                                        return <li>{li.PCMDescr}</li>;
                                      })}
                                  </ul>
                                </div>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </div>
                    </div>
                    <div
                      className={`${styles.imageSection} imageSection`}
                      style={{ height: "14.5rem" }}
                      onClick={() => {
                        props.navHandler("ToPlayBookDetails");
                        props.selectPhase("Scope");
                      }}
                    >
                      <div
                        style={{ right: "0.2rem" }}
                        className={styles.plusIcon}
                      >
                        +
                      </div>
                      <div
                        className={styles.arrowTitleSection}
                        style={{
                          top: "35%",
                          left: "50%",
                          transform: "rotate(330deg)",
                        }}
                      >
                        <div className={styles.arrowTitle}>Scope</div>
                        <div className={styles.arrowSubTitle}>Discover</div>
                      </div>
                      <img src={`${DiscoverArrow}`} />
                      <img
                        src={`${DiscoverProgress}`}
                        style={{
                          height: "132px",
                          position: "absolute",
                          left: 0,
                          bottom: -25,
                          transform: "rotateX(26deg)",
                          zIndex: 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.scopeBottomListSection} scopeBottomListSection`}
                >
                  <div
                    className={`${styles.BottomSectionContent} BottomSectionContent`}
                  >
                    {/* <div className={styles.coloredHeaderRed}>Co-Led</div>
                    <ol>
                      <li>Phase 0 business case</li>
                      <li>Key Questions</li>
                      <li>Charter definition</li>
                    </ol> */}
                    {bottomDescrOptions.length > 0 && bottomDescr.length > 0
                      ? bottomDescrOptions.map((option) => {
                          return bottomDescr.filter(
                            (desc) =>
                              desc.PCMOrderNo.PCMOrder == 1 &&
                              desc.PCMDescrLabel == option
                          ).length > 0 ? (
                            <div>
                              <div className={styles.coloredHeaderRed}>
                                {option}
                              </div>
                              <ol>
                                {bottomDescr
                                  .filter(
                                    (li) =>
                                      li.PCMOrderNo.PCMOrder == 1 &&
                                      li.PCMDescrLabel == option
                                  )
                                  .map((li) => {
                                    return <li>{li.PCMDescr}</li>;
                                  })}
                              </ol>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <div className={styles.DefineDesign}>
                <div>
                  <div
                    className={`${styles.DefineTopSection} DefineTopSection`}
                  >
                    <div
                      className={`${styles.DefineTopListSection} DefineTopListSection`}
                    >
                      <div>
                        {descrOptions.length && cmDescr.length > 0
                          ? descrOptions.map((option) => {
                              return cmDescr.filter(
                                (desc) =>
                                  desc.PCMDescrLabel == option &&
                                  desc.PCMOrderNo.PCMOrder == 2
                              ).length > 0 ? (
                                <div>
                                  <div className={styles.coloredHeaderBlue}>
                                    {option}
                                  </div>
                                  <ul>
                                    {cmDescr
                                      .filter(
                                        (li) =>
                                          li.PCMOrderNo.PCMOrder == 2 &&
                                          li.PCMDescrLabel == option
                                      )
                                      .map((li) => {
                                        return <li>{li.PCMDescr}</li>;
                                      })}
                                  </ul>
                                </div>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </div>
                    </div>
                    <div
                      className={`${styles.imageSection} imageSection`}
                      style={{ height: "13.6rem" }}
                      onClick={() => {
                        props.navHandler("ToPlayBookDetails");
                        props.selectPhase("Define");
                      }}
                    >
                      <div
                        style={{ right: "0.2rem" }}
                        className={styles.plusIcon}
                      >
                        +
                      </div>
                      <div
                        className={styles.arrowTitleSection}
                        style={{
                          top: "40%",
                          left: "34%",
                          transform: "rotate(342deg)",
                        }}
                      >
                        <div className={styles.arrowTitle}>Define</div>
                        <div className={styles.arrowSubTitle}>Design</div>
                      </div>
                      <img src={`${DesignArrow}`} />
                      <img
                        src={`${DesignProgress}`}
                        style={{
                          height: "92px",
                          position: "absolute",
                          left: 0,
                          bottom: -39,
                          transform: "rotateX(26deg)",
                          zIndex: 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.DefineBottomListSection} DefineBottomListSection`}
                >
                  <div
                    className={`${styles.BottomSectionContent} BottomSectionContent`}
                  >
                    {/* <div className={styles.coloredHeaderRed}>CT-Led</div>
                    <ul>
                      <li>Develop project governance</li>
                      <li>Develop project plan & schedule</li>
                      <li>Determine scope & budget</li>
                      <li>Establish project team</li>
                    </ul> */}
                    {bottomDescrOptions.length > 0 && bottomDescr.length > 0
                      ? bottomDescrOptions.map((option) => {
                          return bottomDescr.filter(
                            (desc) =>
                              desc.PCMOrderNo.PCMOrder == 2 &&
                              desc.PCMDescrLabel == option
                          ).length > 0 ? (
                            <div>
                              <div className={styles.coloredHeaderRed}>
                                {option}
                              </div>
                              <ol>
                                {bottomDescr
                                  .filter(
                                    (li) =>
                                      li.PCMOrderNo.PCMOrder == 2 &&
                                      li.PCMDescrLabel == option
                                  )
                                  .map((li) => {
                                    return <li>{li.PCMDescr}</li>;
                                  })}
                              </ol>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <div className={styles.ExecuteBuild}>
                <div>
                  <div className={`${styles.BuildTopSection} BuildTopSection`}>
                    <div
                      className={`${styles.BuildTopListSection} BuildTopListSection`}
                    >
                      {/* <div>
                        <ul>
                          {cmDescr.length > 0
                            ? cmDescr
                                .filter((li) => li.PCMOrderNo.PCMOrder == 3)
                                .map((li) => {
                                  return <li>{li.PCMDescr}</li>;
                                })
                            : ""}
                        </ul>
                      </div> */}
                      <div>
                        {descrOptions.length && cmDescr.length > 0
                          ? descrOptions.map((option) => {
                              return cmDescr.filter(
                                (desc) =>
                                  desc.PCMDescrLabel == option &&
                                  desc.PCMOrderNo.PCMOrder == 3
                              ).length > 0 ? (
                                <div>
                                  <div className={styles.coloredHeaderBlue}>
                                    {option}
                                  </div>
                                  <ul>
                                    {cmDescr
                                      .filter(
                                        (li) =>
                                          li.PCMOrderNo.PCMOrder == 3 &&
                                          li.PCMDescrLabel == option
                                      )
                                      .map((li) => {
                                        return <li>{li.PCMDescr}</li>;
                                      })}
                                  </ul>
                                </div>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </div>
                    </div>
                    <div
                      className={`${styles.imageSection} imageSection`}
                      style={{ height: "13.6rem" }}
                    >
                      <div
                        style={{ right: "6rem" }}
                        className={styles.plusIcon}
                        onClick={() => {
                          props.navHandler("ToPlayBookDetails");
                          props.selectPhase("Execute");
                        }}
                      >
                        +
                      </div>
                      <div
                        className={styles.arrowTitleSection}
                        style={{
                          top: "40%",
                          left: "25%",
                          transform: "rotate(351deg)",
                        }}
                        onClick={() => {
                          props.navHandler("ToPlayBookDetails");
                          props.selectPhase("Execute");
                        }}
                      >
                        <div className={styles.arrowTitle}>Execute</div>
                        <div className={styles.arrowSubTitle}>Build</div>
                      </div>
                      <img
                        src={`${BuildArrow}`}
                        onClick={() => {
                          props.navHandler("ToPlayBookDetails");
                          props.selectPhase("Execute");
                        }}
                      />
                      <img
                        src={`${BuildProgress}`}
                        style={{
                          height: "70px",
                          position: "absolute",
                          left: 0,
                          bottom: -39,
                          transform: "rotateX(26deg)",
                          zIndex: 0,
                        }}
                        onClick={() => {
                          props.navHandler("ToPlayBookDetails");
                          props.selectPhase("Execute");
                        }}
                      />
                      <img src={`${CenterImg}`} className={styles.centerImg} />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.BuildBottomListSection} BuildBottomListSection`}
                >
                  <div
                    className={`${styles.BottomSectionContent} BottomSectionContent`}
                  >
                    {/* <div className={styles.coloredHeaderRed}>CT-Led</div>
                    <ul>
                      <li>Develop & manage project team</li>
                      <li>Manage execution</li>
                      <li>Develop solution/product</li>
                      <li>Monitor & Control project</li>
                    </ul>
                    <div className={styles.coloredHeaderRed}>BU/GS-Led</div>
                    <ul>
                      <li>
                        Dedicate project resources & initiate awareness and
                        understanding with the business or employees
                      </li>
                    </ul> */}
                    {bottomDescrOptions.length > 0 && bottomDescr.length > 0
                      ? bottomDescrOptions.map((option) => {
                          return bottomDescr.filter(
                            (desc) =>
                              desc.PCMOrderNo.PCMOrder == 3 &&
                              desc.PCMDescrLabel == option
                          ).length > 0 ? (
                            <div>
                              <div className={styles.coloredHeaderRed}>
                                {option}
                              </div>
                              <ol>
                                {bottomDescr
                                  .filter(
                                    (li) =>
                                      li.PCMOrderNo.PCMOrder == 3 &&
                                      li.PCMDescrLabel == option
                                  )
                                  .map((li) => {
                                    return <li>{li.PCMDescr}</li>;
                                  })}
                              </ol>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <div className={styles.ExecuteImplement}>
                <div
                  className={`${styles.ExecuteImplementTopSection} ExecuteImplementTopSection`}
                >
                  <div
                    className={`${styles.ExecuteImplementTopListSection} ExecuteImplementTopListSection`}
                  >
                    {/* <div>
                      <ul>
                        {cmDescr.length > 0
                          ? cmDescr
                              .filter((li) => li.PCMOrderNo.PCMOrder == 4)
                              .map((li) => {
                                return <li>{li.PCMDescr}</li>;
                              })
                          : ""}
                      </ul>
                    </div> */}
                    <div>
                      {descrOptions.length && cmDescr.length > 0
                        ? descrOptions.map((option) => {
                            return cmDescr.filter(
                              (desc) =>
                                desc.PCMDescrLabel == option &&
                                desc.PCMOrderNo.PCMOrder == 4
                            ).length > 0 ? (
                              <div>
                                <div className={styles.coloredHeaderBlue}>
                                  {option}
                                </div>
                                <ul>
                                  {cmDescr
                                    .filter(
                                      (li) =>
                                        li.PCMOrderNo.PCMOrder == 4 &&
                                        li.PCMDescrLabel == option
                                    )
                                    .map((li) => {
                                      return <li>{li.PCMDescr}</li>;
                                    })}
                                </ul>
                              </div>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </div>
                  </div>
                  <div
                    className={`${styles.imageSection} imageSection`}
                    style={{ height: "11.7rem" }}
                    onClick={() => {
                      props.navHandler("ToPlayBookDetails");
                      props.selectPhase("Implement");
                    }}
                  >
                    <div
                      style={{ right: "0.2rem", top: "-1rem " }}
                      className={styles.plusIcon}
                    >
                      +
                    </div>
                    <div
                      className={styles.arrowTitleSection}
                      style={{
                        top: "35%",
                        left: "44%",
                        transform: "rotate(360deg)",
                      }}
                    >
                      <div className={styles.arrowTitle}>Execute</div>
                      <div className={styles.arrowSubTitle}>Implement</div>
                    </div>
                    <img src={`${ImplementArrow}`} />
                    <img
                      src={`${ImplementProgress}`}
                      style={{
                        height: "32px",
                        position: "absolute",
                        left: 0,
                        bottom: -37,
                        transform: "rotateX(26deg)",
                        zIndex: 0,
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.ExecuteImplementBottomListSection} ExecuteImplementBottomListSection`}
                >
                  <div
                    className={`${styles.BottomSectionContent} BottomSectionContent`}
                  >
                    {/* <div className={styles.coloredHeaderRed}>CT-Led</div>
                    <ul>
                      <li>Develop & manage project team</li>
                      <li>Manage execution</li>
                      <li>Develop solution/product</li>
                      <li>Monitor & Control project</li>
                    </ul>

                    <ul>
                      <li>Execute go-live comms plans</li>
                      <li>Execute hypercare comms plan</li>
                    </ul> */}
                    {bottomDescrOptions.length > 0 && bottomDescr.length > 0
                      ? bottomDescrOptions.map((option) => {
                          return bottomDescr.filter(
                            (desc) =>
                              desc.PCMOrderNo.PCMOrder == 4 &&
                              desc.PCMDescrLabel == option
                          ).length > 0 ? (
                            <div>
                              <div className={styles.coloredHeaderRed}>
                                {option}
                              </div>
                              <ol>
                                {bottomDescr
                                  .filter(
                                    (li) =>
                                      li.PCMOrderNo.PCMOrder == 4 &&
                                      li.PCMDescrLabel == option
                                  )
                                  .map((li) => {
                                    return <li>{li.PCMDescr}</li>;
                                  })}
                              </ol>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <div className={styles.RealizeOptimize}>
                <div
                  className={`${styles.OptimizeTopSection} OptimizeTopSection`}
                >
                  <div
                    className={`${styles.OptimizeTopListSection} OptimizeTopListSection`}
                  >
                    {/* <div>
                      <ul>
                        {cmDescr.length > 0
                          ? cmDescr
                              .filter((li) => li.PCMOrderNo.PCMOrder == 5)
                              .map((li) => {
                                return <li>{li.PCMDescr}</li>;
                              })
                          : ""}
                      </ul>
                    </div> */}
                    <div>
                      {descrOptions.length && cmDescr.length > 0
                        ? descrOptions.map((option) => {
                            return cmDescr.filter(
                              (desc) =>
                                desc.PCMDescrLabel == option &&
                                desc.PCMOrderNo.PCMOrder == 5
                            ).length > 0 ? (
                              <div>
                                <div className={styles.coloredHeaderBlue}>
                                  {option}
                                </div>
                                <ul>
                                  {cmDescr
                                    .filter(
                                      (li) =>
                                        li.PCMOrderNo.PCMOrder == 5 &&
                                        li.PCMDescrLabel == option
                                    )
                                    .map((li) => {
                                      return <li>{li.PCMDescr}</li>;
                                    })}
                                </ul>
                              </div>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </div>
                  </div>
                  <div
                    className={`${styles.imageSection} imageSection`}
                    style={{ height: "12.2rem" }}
                    onClick={() => {
                      props.navHandler("ToPlayBookDetails");
                      props.selectPhase("Optimize");
                    }}
                  >
                    <div
                      style={{ right: "8.5rem" }}
                      className={styles.plusIcon}
                    >
                      +
                    </div>
                    <div
                      className={styles.arrowTitleSection}
                      style={{
                        top: "40%",
                        left: "20%",
                        transform: "rotate(360deg)",
                      }}
                    >
                      <div className={styles.arrowTitle}>Realize</div>
                      <div className={styles.arrowSubTitle}>Optimize</div>
                    </div>
                    <img src={`${OptimizeArrow}`} />
                    <img
                      src={`${OptimizeProgress}`}
                      style={{
                        height: "125px",
                        position: "absolute",
                        left: 0,
                        bottom: -42,
                        transform: "rotateX(26deg)",
                        zIndex: 0,
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.OptimizeBottomListSection} OptimizeBottomListSection`}
                >
                  <div
                    className={`${styles.BottomSectionContent} BottomSectionContent`}
                  >
                    {/* <div className={styles.coloredHeaderRed}>BU/GS-Led</div>
                    <ul>
                      <li>
                        Advancing buy-in / adoption / ownership with business
                        and/or respective procurement employees and identifying
                        expansion / scaling opportunities
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Anchor and sustain change by implementing permanent
                        supporting structures and business processes
                      </li>
                    </ul> */}
                    {bottomDescrOptions.length > 0 && bottomDescr.length > 0
                      ? bottomDescrOptions.map((option) => {
                          return bottomDescr.filter(
                            (desc) =>
                              desc.PCMOrderNo.PCMOrder == 5 &&
                              desc.PCMDescrLabel == option
                          ).length > 0 ? (
                            <div>
                              <div className={styles.coloredHeaderRed}>
                                {option}
                              </div>
                              <ol>
                                {bottomDescr
                                  .filter(
                                    (li) =>
                                      li.PCMOrderNo.PCMOrder == 5 &&
                                      li.PCMDescrLabel == option
                                  )
                                  .map((li) => {
                                    return <li>{li.PCMDescr}</li>;
                                  })}
                              </ol>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.arrowSecLegend}>
              <div className={`${styles.clickProgress} clickProgress`}>
                <div style={{ width: 236 }}>
                  <div>Group Workload Indicator</div>
                  <div className={styles.legendStatus}>
                    <img src={`${LegendProgress}`} alt="ProgressBar" />
                    <div className={styles.legendLabels}>
                      <div className={styles.buAndgs}>
                        <div
                          className={styles.buDotIcon}
                          style={{ backgroundImage: `url(${BuDotImg})` }}
                        ></div>
                        <div>BU & GS</div>
                      </div>
                      <div className={styles.ct}>
                        <div
                          className={styles.buDotIcon}
                          style={{ backgroundImage: `url(${CtDotImg})` }}
                        ></div>
                        <div>CT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.clickAdvice} clickAdvice`}>
                <div style={{ width: 206 }}>
                  Click on each section to go to the details
                </div>
              </div>
            </div>
          </div>
          {/* Arrow Design */}
        </div>
      ) : (
        <PlaybookDetails selectedItem={"Scope"} />
      )}

      <Footer />
    </>
  );
};

export default PlaybookGrid;
