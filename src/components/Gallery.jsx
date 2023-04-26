import React, { useEffect } from "react";
import "../styles/Gallery.css";
import nitimg from "../assets/nit_image.jpg";
import decimg from "../assets/DEC.jpg";
import junimg from "../assets/JUN2.jpg";
import labimg from "../assets/lab.jpg";
import fullimg from "../assets/nit.jpg";
import deptimg from "../assets/dept.jpg";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal8 from "../assets/gal8.jpg";
import gal9 from "../assets/gal9.jpg";

function Gallery() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="main-gallery">
      <div className="page-heading">
        <span>Gallery</span>
      </div>
      <div className="container">
        <div className="gallery">
          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal1} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={decimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal4} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal2} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={fullimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal3} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={junimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal5} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal6} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal7} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal8} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={gal9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
