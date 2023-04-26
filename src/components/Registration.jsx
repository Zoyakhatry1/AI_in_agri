import React, { useEffect } from "react";
import classes from "../styles/Registration.module.css";

function Registration() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.registration}>
      <div className="page-heading">
        <span>Registration</span>
      </div>
      <div className={classes.content}>
        <div className={classes.fee}>
          <h1 className={classes.headingfee}>Registration Fees</h1>
          <span className={classes.span2}>(exclusive of GST @18%)</span>
          <div className={classes.tablecontainer}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Industry Experts</td>
                  <td>₹7,000</td>
                </tr>
                <tr>
                  <td>Academicians</td>
                  <td>₹6,000</td>
                </tr>
                <tr>
                  <td>PhD Scholars</td>
                  <td>₹5,000</td>
                </tr>
                
                <tr>
                  <td>Additional Paper (for one additional paper only)</td>
                  <td>₹4,000</td>
                </tr>
                <tr>
                  <td>Co-Author</td>
                  <td>₹3,000</td>
                </tr>
                <tr>
                  <td>Listeners</td>
                  <td>₹1,500</td>
                </tr>
                <tr>
                  <td>Foreign Authors</td>
                  <td>$200 or €150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={classes.links}>
          <h1 className={classes.headingfee}>Registration Links</h1>
          <div className={classes.linkscontent}>
            <p>
              <span className={classes.spanlink}>Registration link:</span>{" "}
              <a href="/">To be updated soon</a>{" "}
            </p>
            {/*<p>
              <span className={classes.spanlink}>
                To modify your registration, click:{" "}
              </span>{" "}
              <a href="https://cvent.me/m7q7Ma">https://cvent.me/m7q7Ma</a>
            </p>
            <p>
              <span className={classes.spanlink}>Please email</span>{" "}
              <a href="registration+ICTAI@computer.org">
                registration+ICTAI@computer.org
              </a>
              <span className={classes.spanlink}>
                if you need any registration assistance. Please contact
              </span>{" "}
              <a href="nikolaos.bourbakis@wright.edu">
                nikolaos.bourbakis@wright.edu
              </a>
              <span className={classes.spanlink}>
                (CC alexiou.2@wright.edu) for questions regarding author
                submissions.
              </span>
           </p> */}
          </div>
        </div>

          {/* <div className={classes.note}>
          <h4 className={classes.noteheading}>Please note the following:</h4>
          <p className={classes.notepara}>
            All deadlines in Cvent are set to 11:59 PM Eastern Time Zone (GMT
            -5:00).
          </p>
          <p className={classes.notepara}>
            CC:{" "}
            <a href="registration+ICTAI@computer.org">
              registration+ICTAI@computer.org
            </a>{" "}
            for all registration inquiries/questions
          </p>
            </div> */}

        {/* <div className={classes.end}>
          <p>
            One Important Note is that Author Registration requires the paper ID
            from easychair.
          </p>
          </div> */}
            </div> 
    </div>
  );
}

export default Registration;
