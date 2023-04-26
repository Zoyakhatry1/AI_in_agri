import React, { useEffect } from "react";
import Contact from "./Contact";

function ContactPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contact-page">
      <div className="page-heading">
        <span>Contact Us</span>
      </div>
      <Contact />
    </div>
  );
}
export default ContactPage;
