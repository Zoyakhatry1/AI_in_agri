import React,{useEffect} from 'react';
import ProfileCard from './ProfileCard';
import classes from "../styles/Keynote.module.css";
import "../styles/App.css";

function Keynote() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
     <div>
    <div className="page-heading">
    <span>Keynote Speakers</span>
  </div>
    <div className={classes.speaker}>
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
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
    </div>
    </div>
  )
}

export default Keynote;