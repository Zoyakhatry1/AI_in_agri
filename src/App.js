import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Registration from "./components/Registration";
import Venue from "./components/Venue";
import AuthorGuidelines from "./components/AuthorGuidelines";
import Gallery from "./components/Gallery";
import ContactPage from "./components/ContactPage";
import Keynote from "./components/Keynote";
import International from "./components/International";
import National from "./components/National";
import Members2 from "./components/Members2";

// const tracks = [
//   {
//     heading: "AI Application to Signal Processing",
//     list: [
//       "Adaptive and Statistical Signal Processing",
//     " Soft Computing & Pattern Recognition",
// "Signal Processing for Communications and Networking",
// "Computer Vision and Machine Learning",
// "MIMO and Space-Time Signal Processing ",
// "Detection and Estimation",
// "Adaptive and Array Signal Processing",
// "Compressive Sensing and Sparse Signal Processing",
// "Audio and Speech Signal Processing",	
// "Image and Video Processing",
// "Computational Imaging/Photography and Inverse Problems",
// "VLSI for Communication and Signal Processing"	,
// "Systems, Standards and Implementations",
// "Biological signal Processing"	,
// "Biological Network and Data Analysis/Modeling",
// "Natural Language Processing",
// "Autonomous Navigation and Robotics"	,
// "Neuromorphic Systems",
//  ],
//   },
//   {
//     heading: "AI Application to Cyber Security and Communication",
//     list: [
//       "Wireless and Mobile Communications",
//       "Cooperative and D2D Communications",
//       "Cognitive Radio",
//       "Network Coding",	
//       "Information Theory",
//       "Coding for Data Communications and Storage",	
//       "Sensor Networks",
//       "Optical Communications and Networks",	
//       "Next-Generation Networking and QoS",
//       "Cyber-Physical Systems",
//       "Multi-hop and Heterogeneous Networks",
//       "Vehicular Networks",	
//       "THz and RF Systems for Communications",
//       "Green Communications",
//       "Energy and Smart Grid",
//       "Physical Layer Security",
//       "Source Coding and Data Compression",
//       "Forensics and Security",
//       "Artificial Intelligence for Communications",
//       "5G and Green Communications",
//       "AI & Big data Analytics in Smart Grid",
//       "IoT Application in renewable energies sources (RES)",
//       "Cyber Security System in Micro Grid",
//       "Cyber Security in Modern Power Systems",
//       "Block Chain Technologies in Smart Grid",
//       "System Identification and Modeling",
//       "Internet of Things and Smart Cities",
//       "PACS and Imaging Informatics",
//       "Ambient Intelligence and Applications",  
//     ],
//   },
  
//   {
//     heading: "AI in Agriculture and Healthcare Technology",
//     list: [
//       "Artificial Intelligence for Personalized Medicine",
//       "Healthcare Information Systems",
// "Explainable AI models for Health, Biology and Medicine",
// "Data Mining and Knowledge Discovery in Healthcare",
// "Data Analytics for Healthcare",
// "Machine Learning as a tool to Support Medical Diagnosis and Decisions",
// "Neural Networks in Medicine",
// "Knowledge Management of Health Data",
// "Decision Support Systems for Healthcare and Wellbeing",
// "Optimization for Healthcare problems",
// "Regression and Forecasting for Medical and/or Biomedical Signals",
// "Healthcare Information Systems",
// "Wellness Information Systems",
// "Medical Signal and Image Processing and Techniques",
// "Medical Expert Systems",
// "Biomedical Applications",
// "AI for Healthcare Social Networks",
// "Healthcare Devices and Circuits for Artificial Intelligence",
// "Optimization for Healthcare problems",
// "Regression and Forecasting for Medical and/or Biomedical Signals",
// "AI Applications in Crop Management",
// "AI applications is Soil Health Monitoring",
// "AI in Precision Agriculture",
// "AI in Crop Yield and Pricing Forecast",
// "AI Applications in Livestock Management",
// "AI in Food Processing and Supply Chain",
// "AI for Climate Resiliency and Adaptations",
// "AI Applications in Livestock Management",
// "AI-driven Agriculture / Data Security, Data Privacy, Ownership, and Ethics",
// "AI Applications in Agricultural Extension",

//     ],
//   },
// ];
const tracks=[
    {
      heading: "Thrust Areas",
      list:[
         "Artificial Intelligence and Machine Learning",
          "Bioinformatics",
          "Computer Vision and Pattern Recognition",
          "Cyber-physical system",
          "Agriculture Centric Data Mining",
          "Drone Technology and its Application",
          "Human Machine Interface",
          "IoT in Precision Agriculture",
          "Remote Sensing and Forecasting",
          "Robotics & Control",
          "Appropriate Technology for Sustainable Agriculture",
          "Supply Chain Management in Agriculture",
          "Food Processing"
      ]
    }
];
function App() {
  let scrollToTarget = (target) => {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home scrollToTarget={scrollToTarget} trackArray={tracks} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Members2 />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/venue" element={<Venue />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/keynotes" element={<Keynote />}></Route>
          <Route path="/international" element={<International />}></Route>
          <Route path="/national" element={<National />}></Route>
          <Route
            path="/submissiondetails"
            element={<AuthorGuidelines trackArray={tracks} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
