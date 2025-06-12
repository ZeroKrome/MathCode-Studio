import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCogs,
  FaPalette,
  FaHandshake,
  FaPenNib,
  FaRocket,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Site Vitrine",
      description:
        "Création de sites modernes et responsives pour mettre en valeur votre activité.",
      icon: (
        <FaGlobe className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
    {
      title: "Application Web",
      description:
        "Développement d'applications interactives, performantes et sur mesure.",
      icon: (
        <FaCogs className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
    {
      title: "Design & UI/UX",
      description:
        "Conception d’interfaces élégantes, ergonomiques et axées utilisateur.",
      icon: (
        <FaPalette className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
    {
      title: "Accompagnement & Conseil",
      description:
        "Conseils stratégiques et accompagnement technique pour réussir vos projets.",
      icon: (
        <FaHandshake className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
    {
      title: "Création de Logo",
      description:
        "Logos vectoriels uniques et adaptés à votre image de marque.",
      icon: (
        <FaPenNib className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
    {
      title: "Ouvert à tout projet",
      description:
        "Je m’adapte à vos idées, besoins spécifiques et défis techniques.",
      icon: (
        <FaRocket className="text-4xl group-hover:text-darkBlue transition-colors duration-300" />
      ),
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "TypeScript",
    "PHP",
    "Symfony",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "EasyMyAdmin",
    "Git",
    "GitHub",
    "Figma",
    "Adobe XD",
    "SEO de base",
    "Responsive Design",
    "Déploiement Vercel/Netlify",
    "Maintenance & Debugging",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-darkBlue">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre animé */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes Services
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          className="text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          De la conception à la réalisation, je vous accompagne à chaque étape
          pour concrétiser vos idées numériques.
        </motion.p>

        {/* Cartes de services */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-darkBlue text-white p-6 rounded-2xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                rotate: 0.5,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Liste des compétences */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Compétences techniques & outils professionnels
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            J’utilise une stack moderne et flexible pour concevoir des solutions
            web performantes, élégantes et évolutives. Du front-end au back-end,
            je m’adapte à votre projet et vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-darkBlue">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:text-white hover:bg-[#00B2FF] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
