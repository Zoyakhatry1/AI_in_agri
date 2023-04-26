import React, { useEffect } from "react";
import classes from "../styles/Members.module.css";
import dirimg from "../assets/director.jpg";
import iitdirimg from "../assets/iit_director.png";
import profimg from "../assets/prof.jpg";

function Members() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.members}>
      <div className="page-heading">
        <span>Members</span>
      </div>
      <div className={classes.content}>
        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Chief Patron</h1>
          <div className={classes.img1}></div>
          <p className={classes.name}>
            - Prof(Dr.) Rakesh Sehgal (Director, NIT Srinagar, India)
          </p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Patron</h1>
          <div className={classes.img2}></div>
          <p className={classes.name}>
            - Prof(Dr.) Manoj Singh Gaur (Director, IIT Jammu, India)
          </p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Conference Chair</h1>
          <div className={classes.img3}></div>
          <p className={classes.name}>
            - Prof. Roohie Naaz Mir (HOD, CSE , NIT Srinagar, India)
          </p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Technical Chair(s)</h1>
          <p className={classes.name}>- Dr. Shaima Qureshi (NIT Srinagar, India)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Dharitri Rath (IIT Jammu, India)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Badri N subudhi (IIT Jammu, India)</p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publication Chair(s)</h1>
          <p className={classes.name}>
            - Dr. Ranjeet Kumar Rout (NIT Srinagar, India)
          </p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Vinit Jakhetiya (IIT Jammu, India)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>
            - Dr. Saiyed Umer (Aliah University, Kolkata, India)
          </p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publicity Chair(s)</h1>
          <p className={classes.name}>
            - Dr. Pramod Kumar Yadav (NIT Srinagar, India)
          </p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Veningston K (NIT Srinagar, India)</p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Organizing Secretary</h1>
          <p className={classes.name}>
            - Dr. Pramod Kumar Yadav (NIT Srinagar)
          </p>
          <p className={classes.name}>- Dr. Sparsh Sharma (NIT Srinagar, India)</p>
          <p className={classes.name}>- Dr. Saiyed Umer (NIT Srinagar, India)</p>
          <p className={classes.name}>- Dr. Veningston K (NIT Srinagar, India)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Organizing Committee</h1>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Finance Committee</h1>
          <p className={classes.name}>
            - Dr. Ranjeet Kumar Rout (NIT Srinagar, India)
          </p>
          <p className={classes.name}>- Dr. Sudhir (NIT Srinagar, India)</p>
          
          <p className={classes.name}>- Dr. Saiyed Umer (NIT Srinagar, India)</p>
          <p className={classes.name}>- Dr. Sparsh Sharma (NIT Srinagar, India)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Technical Programme Committee</h1>
          <p className={classes.name}>- Dr. Shamimul Qamar (King Khalid University, Saudi Arabia)</p>
          <p className={classes.name}>- Dr. Laxmidhar Behera (IIT Kanpur, India)</p>
          <p className={classes.name}>- Dr. Sudip Roy (IIT Roorkee, India) </p>
          <p className={classes.name}>- Dr. Prem Chand Pandey (IIT Kharagpur, India)</p>
          <p className={classes.name}>- Dr. Swarup Kumar Mahapatra (IIT Bhubaneswar, India)</p>
          <p className={classes.name}>- Dr. S.K.Singh (IIT BHU, Banaras, India) </p>
          <p className={classes.name}>-Prof. Sadananda Sahu (IIT Bhubaneswar, India) </p>
          <p className={classes.name}>- Dr. M. Sabarimalai Manikandan (IIT Bhubaneswar, India) </p>
          <p className={classes.name}>- Dr. Kisor Kumar Sahu (IIT Bhubaneswar, India)</p>
          <p className={classes.name}>- Dr. V. Pandu Ranga (IIT Bhubaneswar, India)</p>
          <p className={classes.name}>- Dr.  S. Selvakumar (NIT Tiruchirappalli, India) </p>
          <p className={classes.name}>- Prof. J. J. Lohith (NIT Tiruchirappalli, India) </p>
          <p className={classes.name}>- Dr. Goutam Sanyal (NIT Durgapur, India) </p>
          <p className={classes.name}>- Dr. Gautam Kumar Mahanti (NIT Durgapur, India)</p>
          <p className={classes.name}>- Dr. Rama Shanker Yadav (MNIT, Allahabad, India) </p>
          <p className={classes.name}>- Prof. A.K.Misra (MNIT, Allahabad, India)</p>
          <p className={classes.name}>- Dr. Navjot Singh (MNIT, Allahabad, India)</p>
          <p className={classes.name}>- Dr. Krishna K. Mishra (MNIT, Allahabad, India)</p>
          <p className={classes.name}>- Dr. Duyshant Kumar Singh (MNIT, Allahabad, India)</p>
          <p className={classes.name}>- Dr. Ranjitha (MNIT, Allahabad, India)</p>
          <p className={classes.name}>- Dr. Durga Prasad Mohapatra (NIT Rourkela, India)</p>
          <p className={classes.name}>- Dr. Sandeep Kumar (NIT Delhi, India)</p>
          <p className={classes.name}>- Dr. Vineeta Malik (NIT Delhi, India)</p>
        </div>
      </div>
    </div>
  );
}

export default Members;
