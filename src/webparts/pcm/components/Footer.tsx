import * as React from "react";
import styles from "./HomePageDesign.module.scss";
import "../../../ExternalRef/css/style.css";
const brandName = require("../../../ExternalRef/img/brandName.png");
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        className={styles.footerContent}
        style={{ backgroundImage: `url(${brandName})` }}
      ></div>
    </div>
  );
};
export default Footer;
