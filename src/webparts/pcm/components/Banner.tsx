import * as React from "react";
import styles from "./HomePageDesign.module.scss";
import "../../../ExternalRef/css/style.css";

const Banner = (props) => {
  return <img src={props.src} className={styles.BannerImg} alt="banner img" />;
};

export default Banner;
