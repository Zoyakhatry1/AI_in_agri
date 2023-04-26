import React, { useEffect, useState, useRef } from "react";
import classes from "../styles/Venue.module.css";
import decimg from "../assets/DEC.jpg";

function Venue() {
  const videoRef = useRef();
  const [hide, setHide] = useState(false);
  const handleClick = (e) => {
    if (!hide) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/HK8cYxaRZP0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = "NIT SRINAGAR TOUR";
      videoRef.current.appendChild(iframe);
    } else {
      videoRef.current.removeChild(videoRef.current.lastElementChild);
    }
    setHide(!hide);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
      <div className="page-heading">
        <span>Venue</span>
      </div>
      <div className={classes.content}>
        <div className={classes.location}>
          <img src={decimg} alt="" className={classes.pic} />

          <div
            className={hide ? classes.hide : classes.playBtn}
            onClick={handleClick}
          ></div>
          <div className={!hide ? classes.hide : classes.video} ref={videoRef}>
            <i
              class="fa fa-window-close"
              aria-hidden="true"
              onClick={handleClick}
            ></i>
          </div>
        </div>
        <p className={classes.content2}>
          The Institute is located in Srinagar, the summer capital of J&K at
          Hazratbal, Srinagar 10 KMS from the city centre. The Campus is
          surrounded by the scenic Himalayan ranges, the Zabarwan Hills and
          world famous Dal Lake on its East side and the most revered shrine of
          the Country Hazratbal Shrine on the North side. Hazratbal is well
          connected with most parts of the city and valley by a motor-able road
          and other transport service. The campus is about 22 KMs away from the
          Srinagar International Airport. It falls on National Highway to
          Ladakh. The nearest railway station is Nowgam which is located about
          18 km from the Institute campus. The campus is connected with Jammu /
          Delhi by Srinagar-Jammu highway which passes through high mountain
          passes which are picturesque and enjoyable, and can be covered in
          about 7-8 hours by a private taxi/car. The Institute is having a lush
          green campus spread over 67 acres of land on the banks of world-famous
          Dal Lake. The Institute is residential with accommodation facility for
          students and staff in hostels and Residential Quarters. There are five
          boys and two girls hostels which accommodate about 2000 boys and 200
          girls with separate mess facility for each hostel. Almost all
          necessary facilities and amenities are available in the campus which
          include cafeteria, shops, bank, medical unit with ambulances, guest
          house, students activity centre, gymnasium, computer services centre
          with internet facility, bus facility, centralized library etc.
        </p>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13211.306237068737!2d74.8375422!3d34.1251897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf5ec84b1ac8f98d!2sNational%20Institute%20of%20Technology%20(NIT)%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1649234069186!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className={classes.map}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Venue;
