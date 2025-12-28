import "./Card.css";
// import content from "./content";

const Card = ({ title, description, image, video, variant }) => {
  return (
    <div>
      <div className={`project-card ${variant}`}>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <button>View Project</button>
        </div>
        <div className="card-img">
          {/* <img src={image} alt={title} /> */}
          <div>
            <video src={video} autoPlay loop muted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
