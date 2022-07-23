import * as React from 'react'
import styles from './HomePageDesign.module.scss'
import { useState, useEffect } from 'react';
import Footer from "./Footer";

const cardsBG = require("../../../ExternalRef/img/cardsBg.png");
let homeIcon = require("../../../ExternalRef/img/homeIcon.png");


const BrowseLevers = (props) => {
    const [cardSection, setCardSection] = useState([]);
    useEffect(() => {
        props.sp.web.lists
            .getByTitle("Home links")
            .items.get()
            .then((data) => {
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
                                    backgroundImage: `url(${JSON.parse(li.PCMIcon).serverRelativeUrl})`,
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
            .then(async (res) => {
                console.log(res);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div className={styles.breadCrumbSection}>
                <div
                    onClick={() =>
                        (window.location.href = `${props.absoluteUrl}/SitePages/Home.aspx`)
                    }
                    className={styles.homeIcon}
                    style={{ backgroundImage: `url(${homeIcon})` }}
                ></div>
                <div className={styles.crumbMenu}>
                    <div className={styles.crumbArrow}>{">"}</div>
                    <div className={styles.crumbMenuItem}>Browse Levers</div>
                </div>
            </div>
            <div
                className={styles.cardSection}
                style={{ backgroundImage: `url(${cardsBG})` }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        paddingTop: "2rem",
                        textDecoration: "underline",
                    }}
                >
                    Browse Change Levers
                </h2>
                <div className={styles.cards}>{cardSection}</div>
            </div>
            <Footer />
        </>
    )
}

export default BrowseLevers
