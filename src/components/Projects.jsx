import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import useFetchContent from "../fetchContent";

const Projects = () => {
  const { data, isLoading, isError, error } = useFetchContent();

  // Ensure we only access projects from the combined data
  const projects = data?.projects || [];

  // Normalize projects data to match the required structure
  const normalizedProjects = projects.map((project) => ({
    ...project,
    img: project.image?.startsWith("http")
      ? project.image
      : `https:${project.image}`,
  }));

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />

      {isLoading && <p>Loading projects...</p>}
      {isError && <p>Error loading projects: {error.message}</p>}

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {normalizedProjects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
