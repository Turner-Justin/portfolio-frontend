import { useState, useEffect } from 'react'
import './App.css'
import ProjectCard from './components/ui/ProjectCard'
import { getProjects } from './services/portfolioService';


function App() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
      <main>
        <h1> Justin Turner's Portfolio</h1>
        {loading && <p>Loading projects...</p>}
        {!loading && (
          projects.length === 0 ? (
            <p>No projects available.</p>
          ) : (
            <ul>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          )
        )}
      </main>
    );
  }

export default App
