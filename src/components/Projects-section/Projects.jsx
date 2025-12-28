import "./Projects.css";
import Card from "./Card";
import content from "./content";

const Projects = () => {
  return (
    <div>
      <h1 className="p-h">Projects</h1>
      <section>
        {content.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            // image={project.image}
            video={project.video}
            variant={project.variant}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
