import React, { useEffect } from "react";
import pic from "../assets/nit_image.jpg";
import cseimg from "../assets/cse_image.jpg";
import classes from "../styles/About.module.css";
import abic from "../assets/abic.jpg";
import iit from "../assets/IIT-jammucam.png";


function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
      <div className="page-heading">
        <span>About</span>
      </div>
      <div className={classes.about}>
        <h3 className={classes.heading}>About NIT SRINAGAR</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
              National Institute of Technology Srinagar is one of the premier
              Educational Institutes in the Northern Region of the Country. It
              was established in 1960 and has been one of the eighteen Regional
              Engineering Colleges sponsored by the Govt. of India during the
              2nd Plan. The Institute acquired the status of National Institute
              of Technology with deemed to be University status during August,
              2003 and attained full autonomy in its Academics. The Institute is
              situated at the the banks of world-famous Dal Lake, with the
              far-famed Hazratbal Shrine on other side of the campus. NIT
              Srinagar is a residential Institute with accommodation facility in
              Hostels and Staff-Quarters. Besides running the B.Tech Programme
              the Institute also offers M.Tech programme in many streams.In
              addition to that a large number of students are registered for
              M.Phil and Ph.D Programmes.
            </p>
          </div>
          <div>
            <img className={classes.image} src={pic} alt="nit-image" />
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>About IIT JAMMU</h3>
        <div className={classes.info}>
          <div>
            <img className={classes.image} src={iit} alt="nit-image" />
          </div>
          <div>
            <p className={classes.text}>
            The Indian Institute of Technology Jammu was inaugurated on 6th August 2016, and welcomed the first batch of students into the campus in Paloura, Jammu. In the initial phases, the establishment of IIT Jammu was done under the mentorship of IIT Delhi.

            In 2018, IIT Jammu shifted the primary operations to the Main Campus in Jagti, Nagrota. The State Government, Jammu and Kashmir has provided land for the establishment of a permanent campus of the Indian Institute of Technology in Jammu, which consists of 400 acres. Currently the Phase 1 A of the main campus, spread across 25 acres, is operational. Phase 1 B and 1 C are undergoing construction.
            
            The campus in Paloura currently houses the PhD scholars and is being developed into a high-end research facility.
            
            The main campus of the Institute is located on National Highway 44 and is about 15 kilometers from the Airport
            </p>
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>About IConIC</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
              The Ist International Conference on
              Intelligent Computing (IConIC 2022) is being conducted by the
              Department of Computer Science and Engineering, National Institute
              of Technology Srinagar, India (In Virtual Mode). IConIC- 2022
              aims to bring together Academicians, Researchers, Industry
              Experts, Enthusiasts, and Professionals to explore emerging trends
              and innovations, as well as discuss research findings and future
              directions in the area of next-generation innovations. This
              technical conference intends to provide an opportunity for
              academia and industry to share research and development
              advancements in emerging fields of Intelligent Computing. It
              offers a common platform to an interdisciplinary group of
              researchers through a strategically designed network of premier
              institutions across India. The conference will also have Expert Panel
              discussions and Plenary Talks. The goal of the
              Internaltional Conference on Intelligent Computing (IConIC) is to
              promote and bring together the Indian and global researchers
              across the areas of Artificial Intelligence, computer vision,
              computational biology, natural language processing, and deep
              learning.
            </p>
          </div>
          <div>
            <img className={classes.image} src={abic} alt="nit-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
