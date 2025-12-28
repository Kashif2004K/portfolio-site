import "./Projects.css";
import cardImg from "../../assets/tame-impala.jpeg";

const Projects = () => {
  return (
    <div>
      <h1 className="p-h">Projects</h1>
      <div className="project-card">
        <div className="card-text">
          <h3>Project Name</h3>
          <p>
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button>View Project</button>
        </div>
        <div className="card-img">
          <img src={cardImg} alt="tame-impala" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
