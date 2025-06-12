import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, url, index }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-110 hover:shadow-2xl transition-all duration-300 border border-gray-200 w-full max-w-sm"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-darkBlue">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </motion.a>
  );
}

export default function Projets() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-white text-darkBlue py-20 px-6 md:px-20 text-center min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Mes projets <span className="text-accent">réalisés</span>
      </motion.h2>

      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
