import React from "react";
import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.logos} style={{ marginBottom: "30px" }}>
        <div className={classes.logo}>
          <img src={require("../assets/NIT Srinagar.png")} alt="nit srinagar" />
        </div>
        {/* <div className={classes.logo}>
          <img src={require("../assets/R (24).png")} alt="springer" />
        </div> */}
        <div className={classes.logo}>
          <img src={require("../assets/iitropar.png")} alt="iit jammu" />
        </div>
        <div className={classes.logo}>
          <img src={require("../assets/iitDelhi.png")} alt="iit jammu" />
        </div>
        <div className={classes.logo}>
          <img className="newlogo" src={require("../assets/awadh.png")} alt="iit jammu" />
        </div>
      </div>
      <p className={classes.footer_text}>
        Copyright © 2023. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
