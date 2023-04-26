import React,{useEffect} from 'react';
import "../styles/App.css";
import classes from "../styles/National.module.css";
import Button from './Button';

function International() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
    <div className="page-heading">
    <span>International Committee</span>
     </div>
      <div className={classes.flex}>
        <Button>Dr. Sarmistha Batra (McGill University</Button>
        <Button>Dr. Daniel (QueenLand University)</Button>
        <Button>Prof. Vijayan K. Asari (University of Dayton, Ohio, USA)</Button>
        <Button>Prof. Muhammad Khurram Khan (King Saud University, Riyadh, Saudi Arabia)</Button>
        <Button>Prof. Michele NAPPI (University of Salerno, Italy)</Button>
        <Button>Prof. Hari Mohan Pandey (Edge Hill University, United Kingdom)</Button>
        <Button>Prof. Amir H. Gandomi (University of Technology Sydney)</Button>
        <Button>Prof. Carmen Bisogni (Università Di Salerno, Italy)</Button>
        <Button>Prof. Aniello Castiglione (University of Naples Parthenope, Italy)</Button>
        <Button>Prof. Peerapong Uthansakul (Suranaree University of Technology, Thailand)</Button>
        <Button>Prof. Abdeld Jalil Ouahabi (Universiti De Tours, France)</Button>
        <Button>Prof. Fahd N. Al-Wesabi (King Khalid University, Saudi Arabia)</Button>
        <Button> Prof. Ahmad Ali AlZubi (King Saud University, Riyadh, Saudi Arabia)</Button>
      </div>
     
    </div>
  )
}

export default International;