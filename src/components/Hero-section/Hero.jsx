import "./Hero.css";
import Navbar from "./Navbar";
import profileImg from "../../assets/project-photos/img-kashif.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="circle">
          <img src={profileImg} alt="kashif-img" />
        </div>
        <div className="hero-text">
          <p className="hero-role">React Developer</p>
          <h1>Hello, my name is Kashif Mehmood</h1>
          <p className="hero-intro">
            I’m a React.js developer focused on building clean, responsive, and
            user-friendly web applications. I enjoy turning ideas into
            functional interfaces using modern frontend tools and best
            practices.
          </p>
          <button className="btn-P">Projects</button>
          <button className="btn-L">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
