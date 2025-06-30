import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="bg-darkBlue text-white min-h-screen flex flex-col justify-center items-center text-center px-4 py-10 relative overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            particles: {
              number: { value: 70, density: { enable: true, area: 800 } },
              color: { value: "#00B2FF" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1.5,
                outModes: { default: "bounce" },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#00B2FF",
                opacity: 0.4,
                width: 1,
              },
            },
          }}
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-10 px-4 z-10"
        >
          <img
            src="/Logo-Slogan-Light.png"
            alt="Logo MathCode Studio"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 z-10"
        >
          Bienvenue chez <span className="text-accent">MathCode Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-8 z-10"
        >
          Je conçois des sites web modernes, performants et sur mesure pour
          donner vie à vos projets numériques.
        </motion.p>

        <motion.a
          href="/projets"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-darkBlue font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-transform duration-300 z-10"
        >
          Voir mes projets
        </motion.a>
      </section>

      {/* === À PROPOS SECTION === */}
      <section className="bg-white text-darkBlue py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          À propos de <span className="text-accent">MathCode Studio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Je m'appelle Mathieu, développeur web passionné après une reconversion
          réussie depuis le monde de la cuisine. Fort de 12 ans d'expérience en
          restauration, je mets aujourd’hui la même exigence et rigueur au
          service de vos projets digitaux. Chez{" "}
          <span className="text-accent font-semibold">MathCode Studio</span>, je
          crois en une approche sur-mesure, humaine, et tournée vers la
          performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col md:flex-row justify-center gap-6"
        >
          <div className="bg-darkBlue text-white px-6 py-4 rounded-xl shadow w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">🎯 Innovation</h3>
            <p>
              Des solutions modernes, performantes et adaptées aux dernières
              tendances du web.
            </p>
          </div>
          <div className="bg-darkBlue text-white px-6 py-4 rounded-xl shadow w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">⚡ Performance</h3>
            <p>
              Optimisation du code, rapidité de chargement, et expérience
              utilisateur fluide.
            </p>
          </div>
          <div className="bg-darkBlue text-white px-6 py-4 rounded-xl shadow w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">🤝 Accompagnement</h3>
            <p>
              Un suivi humain, disponible, pour construire ensemble un projet à
              votre image.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
