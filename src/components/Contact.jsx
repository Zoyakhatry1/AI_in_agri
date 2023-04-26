import "../styles/Contact.css";
function Contact() {
  return (
    <section id="contacts">
      <h3 className="date-table-heading contacts">Contact Us</h3>
      <div className="contact-container">
        <div className="contact-details">
          <div className="address">
            National Institute of Technology Srinagar
            <br />
            Hazratbal, Srinagar
            <br /> Jammu and Kashmir, 190006,
            <br /> INDIA.
          </div>
          <div className="email">
            <div className="contact-heading">Email</div>
            <div>
              For any query, mail at:{" "}
              <a href="mailto:iconic2022@nitsri.net">iconic2022@nitsri.net</a>
            </div>
          </div>
          <div className="phone-numbers">
            <div className="contact-heading">Contact</div>
            <div className="details">
              For Registration, contact:
              <br /> Dr. Ranjeet K. Rout:{" "}
              <a href="tel:+91-8895125180">
                <b>+91-8895125180</b>
              </a>{" "}
              <br />
              For Submission, contact: <br /> Dr. Sparsh Sharma:{" "}
              <a href="tel:+91-7006232933">
                <b>+91-7006232933</b>
              </a>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13211.306237068737!2d74.8375422!3d34.1251897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf5ec84b1ac8f98d!2sNational%20Institute%20of%20Technology%20(NIT)%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1649234069186!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="nit-srinagar"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default Contact;
