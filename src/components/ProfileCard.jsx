import "../styles/Profilecard.css";
function ProfileCard() {
  return (
    <div className="card">
      <div className="img-container">
        <div className="skewed">
          <div id="img"></div>
        </div>
      </div>
      <div className="card-content">
        <h2>Name</h2>
        <p>About the speaker here</p>
        <p>To be updated...</p>
        <div className="links">
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="/">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
