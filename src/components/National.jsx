import React,{useEffect} from 'react';
import "../styles/App.css";
import Button from './Button';
import classes from "../styles/National.module.css";


function National() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
    <div className="page-heading">
    <span>National Committee</span>
     </div>
        <div className={classes.flex}>
          <Button>Prof. Shanlean k. Pal (ISI Kolkata) </Button>
          <Button>Prof. Pushpak Bhattacharya (IIT Bombay)</Button>
          <Button>Prof. Shantanu Chaudhary (IIT Jodhpur)</Button>
          <Button>Prof. C.V. Jawahar (IIT Hyderabad)</Button>
          <Button>Prof. S.D. Joshi (IIT Delhi)</Button>
          <Button>Prof. Sukumar Mishra (IIT Delhi)</Button>
          <Button>Prof. Pabitra Pal Choudhury (ISI Kolkata)</Button>
          <Button>Prof. Bhabatosh Chanda (ISI Kolkata)</Button>
          <Button>Prof. Santi Prasad Maity (IIEST Shibpur)</Button>
          <Button>Prof. B S Dayasagar (ISI Banglore)</Button>
          <Button>Dr. Saroj Meher (ISI Banglore)</Button>
          <Button>Prof. Bibhas Chandra Dhara ( Jadavpur University)</Button>
          <Button>Prof. S.N. Singh (IIT Kanpur)</Button>
          <Button>Prof. Hanish Kannik (IIT Kanpur)</Button>
          <Button>Prof. Suresh (IIT Jammu)</Button>
          <Button>Prof. Devesh Jinwala (NIT Surat)</Button>
          <Button>Prof. S.K. Patra (IIT Vadodara)</Button>
          <Button>Dr. Ankur Miglani (IIT Indore)</Button>
          <Button>Prof. Vinkil Arora (NIFTEM, Haryana)</Button>
          <Button>Dr. Rudra Pratap (Plaksha University)</Button>
          
          <Button>Dr. Sudhakar Sahoo (IMA Bhubaneswar)</Button>
          <Button>Prof. A. L. Sangal (NIT Jalandhar)</Button>
          <Button>Prof. Harsh K Verma (NIT Jalandhar)</Button>
          <Button> Dr. Dilbag Singh (NIT Jalandhar)</Button>
          
          <Button>Dr. Renu Dhir (NIT Jalandhar)</Button>
          <Button>Dr. Subhasis Bhattacharjee (IIT Jammu)</Button>
          <Button>Dr. Kailash C. Jena (IIT Ropar)</Button>
          <Button>Dr. Shailendra Tiwari (Thapar Institute of Engineering & Technology)</Button>
          <Button>Dr. Pushpendra P. Singh (IIT Ropar)</Button>
          <Button>Dr. Nitin Auluck (IIT Ropar)</Button>
          <Button>Dr. Amitash Ojha (IIT Jammu)</Button>
          <Button>Dr. Sitara K (NIT Trichy)</Button>
          <Button>Dr. Sharvan Kumar Pahuja (NIT Jalandhar)</Button>
          
          
         
        </div>
    </div>
  )
}

export default National;