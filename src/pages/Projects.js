import Project from '../components/Project';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description of project one.' },
    { title: 'Project Two', description: 'Description of project two.' },
    { title: 'Project Three', description: 'Description of project three.' },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default Projects;
