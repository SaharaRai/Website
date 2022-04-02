import Displaybox from "../displaybox/displaybox";
import TheHeading from "../heading/heading";
import { ProjectsStyled } from "./project-styled";
import { projectData } from "./projectsdata";

function Projects() {
  return (
    <ProjectsStyled>
      <TheHeading text="My Projects" />

      {projectData.map((project) => {
        return (
          <Displaybox
            key={project.title}
            title={project.title}
            about={project.about}
            description={project.description}
            image={project.image}
            altimage={project.altimage}
            gitrepo={project.github}
            website={project.website}
          />
        );
      })}
    </ProjectsStyled>
  );
}
export default Projects;
