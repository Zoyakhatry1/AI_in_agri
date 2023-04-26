import "../styles/home.css";
import "../styles/TextGlow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ProfileCard from "./ProfileCard";
import TrackCard2 from "./TrackCard2";
import Contact from "./Contact";
import { Link } from "react-router-dom";
function Home({ scrollToTarget, trackArray }) {
  const location = useLocation();
  const tracks = useRef();
  const speakers = useRef();
  const [slidePercent, setSlidePercent] = useState("");
  function setWidth(width) {
    if (width > 1110) {
      return 30;
    } else if (width > 600) {
      return 50;
    }
  }
  useEffect(() => {
    if (location.hash === "#tracks") scrollToTarget(tracks.current);
    else if (location.hash === "#speakers") scrollToTarget(speakers.current);
    else
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    let screen = setWidth(window.innerWidth);
    if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    window.onresize = function () {
      let screen = setWidth(window.innerHeight);
      if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    };
  }, [location, scrollToTarget, slidePercent]);
  return (
    <>
      <section className="main-carousel">
        <Carousel
          {...{
            showArrows: false,
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            autoPlay: true,
            useKeyboardArrows: true,
            transitionTime: 1000,
            interval: 3000,
            dynamicHeight: false,
            stopOnHover: false,
          }}
          width="100vw"
          animationHandler="fade"
          swipeable={false}
        >
          <div className="slide-item">
            <img src={require("../assets/nit_image.jpg")} alt="" />
          </div>
          <div className="slide-item">
            <img src={require("../assets/scene.jpg")} alt="" />
          </div>
          <div className="slide-item">
            <img
              src={require("../assets/jason-blackeye-10ui0BryWK8-unsplash.jpg")}
              alt=""
            />
          </div>
        </Carousel>
        <div className="slide-content">
          <div className="slide-text-content">
            <div className="sub-text">
              The 1<sup>st</sup> International Conference on{" "}
            </div>
            <h1>Intelligent Computing</h1>
            <div className="sub-text">
              <h2 className="date-new">28 <sup>th</sup> - 29 <sup>th</sup> September, 2022</h2>
              <table>
                <tbody>
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <td>ORGANISED BY:-</td>
                    <td>COLLABORATION WITH:-</td>
                  </tr>
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <td>DEPARTMENT OF CSE - NIT SRINAGAR</td>
                    <td>IIT JAMMU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="moving-text">
            <p class="example-right">
              Last date of paper submission - 30<sup>th</sup> June, 2022. Paper
              submission link:{" "}
              <a href="https://easychair.org/conferences/?conf=iconic20221">
                https://easychair.org/conferences/?conf=iconic20221
              </a>{" "}
              Last date of paper submission - 30<sup>th</sup> June, 2022. Paper
              submission link:{" "}
              <a href="https://easychair.org/conferences/?conf=iconic20221">
                https://easychair.org/conferences/?conf=iconic20221
              </a>
            </p>
          </div>
          <div className="logos">
            <div className="logo">
              <img
                src={require("../assets/NIT Srinagar.png")}
                alt="nit srinagar"
              />
            </div>
            {/* <div className="logo">
              <img src={require("../assets/R (24).png")} alt="springer" />
            </div> */}
            <div className="logo">
              <img src={require("../assets/iit-jammu.png")} alt="iit jammu" />
            </div>
          </div>
        </div>
      </section>
      <section id="section-two">
        <div className="about-iconic">
          <img src={require("../assets/nit_image.jpg")} alt="" />
          <div className="about-text">
            <div className="text-heading">About IConIC</div>
            The Ist International Conference on Internaltional Conference on
            Intelligent Computing (IConIC) is being conducted by the Department
            of Computer Science and Engineering, National Institute of
            Technology, Srinagar, India (In Virtual Mode). IConIC- 2022 aims to
            bring together Academicians, Researchers, Industry Experts,
            Enthusiasts, and Professionals to explore emerging trends and
            innovations <Link to="/about">...read more</Link>
          </div>
        </div>
      </section>
      <section id="speakers-carousel" ref={speakers}>
        <Carousel
          centerMode
          {...{
            showArrows: false,
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            autoPlay: true,
            useKeyboardArrows: true,
            transitionTime: 1000,
            interval: 3000,
            centerSlidePercentage: 35,
          }}
          width="100vw"
        >
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
        </Carousel>
      </section>
      <section id="quote">
        <div className="quote-content">
          <blockquote>
            <i className="fas fa-quote-left"></i>
            Predicting the future isn't magic, it's Artificial Intelligence.
            <i className="fa fa-quote-right"></i>
          </blockquote>
          <cite>~ Dave Waters</cite>
        </div>
      </section>
      <section id="tracks-container" ref={tracks}>
        <h3 className="date-table-heading contacts">Tracks</h3>
        <div id="tracks">
          {trackArray.map((item, index) => (
            <TrackCard2 track={item} key={index} />
          ))}
        </div>
      </section>
      <section id="table">
        <h3 className="date-table-heading">Important Dates</h3>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td rowSpan={2}>Main Conference</td>
                <td>Paper Submission Deadlines</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  25th June 2022 <span className="glow-text">open</span>{" "}
                </td>
              </tr>
              <tr>
                <td>Notification for Paper Acceptance</td>
                <td>17th July 2022</td>
              </tr>
              <tr>
                <td colSpan={2}>Camera Ready Submission Deadline</td>
                <td>24th August 2022</td>
              </tr>
              <tr>
                <td colSpan={2}>Late Registration Deadline</td>
                <td>25th August 2022</td>
              </tr>
              <tr>
                <td colSpan={2}>Conference Dates</td>
                <td>28th-29th September 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Contact />
    </>
  );
}
export default Home;
