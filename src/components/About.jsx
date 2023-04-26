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
        <h3 className={classes.heading}>About the Workshop</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
            Agriculture stands out as the most crucial economic pursuit of humankind, utilizing around 37.7% of the planet's land surface. Its significance emanates from its immense contribution to national revenue, besides being the fundamental source of subsistence. Agriculture is a pivotal player in the global marketplace, creating boundless job opportunities. Moreover, the betterment of agriculture has led to a substantial surge in the per capita income of rural communities. It is, therefore, a judicious and fitting decision to prioritize the agricultural sector. These reasons justify the need to enhance and promote agriculture further. 
            The ever-increasing population has exerted enormous pressure on the available arable land. The Food and Agriculture Organization (FAO) predicts that the world's population will expand by over a third, reaching a staggering 10 billion by 2050. To cater to the dietary requirements of such a burgeoning population, food production must increase by approximately 70%. Conventional farming methods are unlikely to meet these escalating demands. Therefore, technological intervention has become an indispensable necessity. The optimal approach to introduce technological advancements in agriculture is through Artificial Intelligence (AI), Computer Vision, and Robotics.

            </p>
          </div>
          {/* <div>
            <img className={classes.image} src={require("../assets/abtwksp.jpg")} alt="nit-image" />
          </div> */}
        </div>
      </div>
      <div className={classes.about}>
        <h3 className={classes.heading}>About AWADH</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
            AWaDH (Agriculture and Water Technology Development Hub) is an interdisciplinary research and innovation hub established by IIT Ropar, with a focus on developing cutting-edge technologies for agriculture and rural development. Farmers and rural communities in India dedicate the center to creating innovative solutions that can help address the challenges faced. The center conducts research and development activities in various fields, including precision agriculture, agricultural robotics, soil and water management, and rural electrification.

            </p>
          </div>
          {/* <div>
            <img className={classes.image} src={pic} alt="nit-image" />
          </div> */}
        </div>
      </div>
      <div className={classes.about}>
        <h3 className={classes.heading}>About NIT SRINAGAR</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
            The National Institute of Technology (NIT) Srinagar is a premier technical institute located in the beautiful valley of Kashmir. Established in 1960, NIT Srinagar offers undergraduate, postgraduate, and doctoral programs in various disciplines of engineering, technology, and sciences. The institute is known for its state-of-the-art infrastructure, experienced faculty, and excellent research facilities. NIT Srinagar has been consistently ranked among the top engineering colleges in India.

            </p>
          </div>
          {/* <div>
            <img className={classes.image} src={pic} alt="nit-image" />
          </div> */}
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>About IIT ROPAR</h3>
        <div className={classes.info}>
          {/* <div>
            <img className={classes.image} src={iit} alt="nit-image" />
          </div> */}
          <div>
            <p className={classes.text}>
            The Indian Institute of Technology (IIT) Ropar is a leading institute of national importance located in the northwestern state of Punjab. Established in 2008, IIT Ropar offers undergraduate, postgraduate, and doctoral programs in various engineering and technology fields. The institute is known for its excellent research facilities, top-notch faculty, and excellent industry collaborations. IIT Ropar has been consistently ranked among the top engineering colleges in India.

            </p>
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>About IIT DELHI</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
            The Indian Institute of Technology (IIT) Delhi is a premier technical institute located in the national capital region of India. Established in 1961, IIT Delhi offers undergraduate, postgraduate, and doctoral programs in various fields of engineering, technology, and sciences. The institute is known for its cutting-edge research facilities, experienced faculty, and strong industry-academia collaborations. IIT Delhi has been consistently ranked among the top engineering colleges in India and the world.

            </p>
          </div>
          {/* <div>
            <img className={classes.image} src={abic} alt="nit-image" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
