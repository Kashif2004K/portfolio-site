import "./Footer.css";
import githubicon from "../../assets/icons/github.svg";
import instagramicon from "../../assets/icons/instagram.svg";
import linkedinicon from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="social-icons">
          <img className="social-icon" src={githubicon} alt="GitHub" />
          <img className="social-icon" src={instagramicon} alt="Instagram" />
          <img className="social-icon" src={linkedinicon} alt="LinkedIn" />
        </div>
        <p className="footer-text">Kashif Mehmood 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
