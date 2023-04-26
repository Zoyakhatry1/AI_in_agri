import React, { useEffect } from "react";
import classes from "../styles/Members2.module.css";
import Card from "./Card";
import dirimg from "../assets/director.jpg";
import iitdir from "../assets/iit_director.png";
import hodimg from "../assets/prof.jpg";
import tech1 from "../assets/16.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";
import tech4 from "../assets/tech4.jpg";
import org1 from "../assets/org1.jpg";
import org2 from "../assets/org2.jpg";
import org3 from "../assets/org3.jpg";
import org4 from "../assets/org4.jpg";
import org5 from "../assets/org5.jpg";

function Members2() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
      <div className="page-heading">
        <span>Members</span>
      </div>
      <div className={classes.content}>
        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Patron</button>
        </div>
        <div className={classes.patron}>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={dirimg} alt="" />
            </div>
            <p className={classes.name}>
             <b> Prof(Dr.) Rakesh Sehgal </b> <br /> Director, NIT Srinagar
            </p>
          </Card>

          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={iitdir} alt="" />
            </div>
            <p className={classes.name}>
              {" "}
              <b> Prof(Dr.) Manoj Singh Gaur </b> <br />
              Director, IIT Jammu
            </p>
          </Card>
        </div>
        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Conference chair</button>
        </div>
        <div className={classes.patron}>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={hodimg} alt="" />
            </div>
            <p className={classes.name}>
            <b> Prof. Roohie Naaz Mir </b> <br /> HOD, CSE , NIT Srinagar
            </p>
          </Card>
        </div>

        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Technical chair</button>
        </div>
        <div className={classes.patron}>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech1} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Shaima Qureshi </b> <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech2} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Dharitri Rath </b> <br /> IIT Jammu
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech3} alt="" />
            </div>
            <p className={classes.name}>
             <b> Dr. Badri N subudhi </b> <br /> IIT Jammu
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech4} alt="" />
            </div>
            <p className={classes.name}>
             <b> Dr. Vinit Jakhetiya </b> <br /> IIT Jammu
            </p>
          </Card>
        </div>

        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Organizing Secretary</button>
        </div>
        <div className={classes.patron}>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org1} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Ranjeet Kumar Rout </b> <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org2} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Sparsh Sharma </b><br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org3} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Pramod Kumar Yadav </b> <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org4} alt="" />
            </div>
            <p className={classes.name}>
            <b> Dr. Veningston K </b>  <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org5} alt="" />
            </div>
            <p className={classes.name}>
             <b>Dr. Saiyed Umer</b>  <br /> Aliah University, Kolkata
            </p>
          </Card>
        </div>

        <div className={classes.flex}>
          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Publication Chair
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
          
               <b>Dr. Ranjeet Kumar Rout </b> (NIT Srinagar)
              </p>
              <p className={classes.name2}>
               <b>Dr. Saiyed Umer</b>  (Aliah University,Kolkata)
                <br />
              </p>
            </div>
          </div>

          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>Publicity Chair</button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                <b>Dr. Pramod Kumar Yadav</b>
                 (NIT Srinagar)
              </p>
              <p className={classes.name2}><b>Dr. Veningston K</b>  (NIT Srinagar)</p>
            </div>
          </div>

          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Finance Committee
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
               <b>
               Dr. Ranjeet Kumar Rout
               </b>
                 (NIT Srinagar)
              </p>
              <p className={classes.name2}><b>Dr. Sparsh Sharma</b>  (NIT Srinagar)</p>
              <p className={classes.name2}>
               <b>Dr. Saiyed Umer</b>  (Aliah University,Kolkata){" "}
              </p>
            </div>
          </div>

          <div className={classes.flexfull}>
            <div>
              <div className={classes.buttonbox}>
                <button className={classes.shadowbutton}>
                  Local Organizing Committee
                </button>
              </div>
              <div className={classes.names2}>
                <div className={classes.margin}>
                  <p className={classes.name2}><b> Dr. Annu Priya</b> </p>
                  <p className={classes.name2}><b> Dr. Surbhi Sharma</b> </p>
                  <p className={classes.name2}><b> Sania Iqbal</b> </p>
                  <p className={classes.name2}><b> Sadia Showkat</b> </p>
                  <p className={classes.name2}><b> Monica</b> </p>
                  <p className={classes.name2}><b> Anam Iqbal</b> </p>
                </div>
                <div>
                  <p className={classes.name2}><b> Tausees Iqbal</b> </p>
                  <p className={classes.name2}><b> Mehraj Tali</b> </p>
                  <p className={classes.name2}><b> Sameer Dixit</b> </p>
                  <p className={classes.name2}><b> Imtiaz Ahmad</b> </p>
                  <p className={classes.name2}><b> Aafaq Dar</b> </p>
                  <p className={classes.name2}><b> Nazir Shabbir</b> </p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.buttonbox}>
                <button className={classes.shadowbutton}>
                  Local Technical Committee
                </button>
              </div>
              <div className={classes.names2}>
                <div className={classes.margin}>
                  <p className={classes.name2}><b>Mahin Sagotra</b></p>
                  <p className={classes.name2}><b>Yavar Mushtaq</b></p>
                  <p className={classes.name2}><b>Isha Tamarkar</b></p>
                </div>
                <div>
                  <p className={classes.name2}><b>Zoya Khatry</b></p>
                  <p className={classes.name2}><b>Namita Rastogi</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members2;
