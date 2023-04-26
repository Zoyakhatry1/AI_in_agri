import "../styles/nav.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
/* MAKE NAVBAR STICKY WHEN SCROLL-DOWN */
function NavBar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navBar = useRef();
  const location = useLocation();
  useEffect(() => {
    let header = navBar.current;
    function myFunction() {
      if (window.scrollY > 10) {
        header.classList.add("sticky-navbar");
      } else if (window.pageYOffset < 10) {
        header.classList.remove("sticky-navbar");
      }
    }
    window.onscroll = function () {
      myFunction();
    };
    const update = (e) => {
      if (open || open2) {
        setOpen(false);
        setOpen2(false);
      }
    };
    window.addEventListener("click", update);
    return () => window.removeEventListener("click", update);
  }, [open, open2]);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar" ref={navBar}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-container"></div>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className={
              window.location.pathname === "/"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/" className="nav-links" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/about"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/about" className="nav-links" onClick={handleClick}>
              About
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/keynotes"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/keynotes" className="nav-links" onClick={handleClick}>
              Keynotes
            </Link>
          </li>
          <li
            className={
              location.pathname === "/blog"
                ? "nav-item selected"
                : open
                ? "nav-item people"
                : "nav-item"
            }
          >
            <Link
              to=""
              className="nav-links"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              Committee
              <i className={open ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
            </Link>
            <div className={open ? "dropdown open" : "dropdown"}>
              <Link
                // to={{
                //   pathname: "/",
                //   hash: "speakers",
                // }}
                to="/blog"
                onClick={() => {
                  setOpen(!open);
                  handleClick();
                }}
              >
                Organizing Committee
              </Link>
              {/* <Link
                to="/blog"
                onClick={() => {
                  setOpen(!open);
                  handleClick();
                }}
              >
                Advisory Committee
              </Link> */}

              <div
                style={{ color: "#1bbbac", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen2(!open2);
                }}
              >
                Advisory Committee{" "}
                <i
                  className={open2 ? "fa fa-angle-up" : "fa fa-angle-down"}
                ></i>
                <div className={open2 ? "dropdown open" : "dropdown"}>
                  <Link
                    to="/international"
                    onClick={() => {
                      setOpen2(!open2);
                      setOpen(!open);
                      handleClick();
                    }}
                  >
                    International
                  </Link>

                  <Link
                    to="/national"
                    onClick={() => {
                      setOpen2(!open2);
                      setOpen(!open);
                      handleClick();
                    }}
                  >
                    National
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li
            className={
              window.location.pathname === "/registration"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link
              to="/registration"
              className="nav-links"
              onClick={handleClick}
            >
              Registration
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/venue"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/venue" className="nav-links" onClick={handleClick}>
              Venue
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/gallery"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/gallery" className="nav-links" onClick={handleClick}>
              Gallery
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/submissiondetails"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link
              to="/submissiondetails"
              className="nav-links"
              onClick={handleClick}
            >
              Submission Details
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/contacts"
                ? "nav-item selected"
                : "nav-item"
            }
          >
            <Link to="/contacts" className="nav-links" onClick={handleClick}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
