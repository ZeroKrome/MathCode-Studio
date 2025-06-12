import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await emailjs.send(
        "service_lbcpxzj", // ← à personnaliser
        "template_839rgex", // ← à personnaliser
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "adnG7Uh0oAokTyPQf" // ← à personnaliser
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      // Redirection après 3 secondes
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setError("Erreur lors de l'envoi du message.");
      console.error(err);
    }
  };

  return (
    <section className="bg-white text-darkBlue py-20 px-6 md:px-20 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Me <span className="text-accent">contacter</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-green-600 font-semibold text-lg"
          >
            ✅ Merci pour votre message !<br />
            Vous allez être redirigé vers l’accueil...
          </motion.div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div>
              <label className="block text-sm font-semibold mb-1">Nom</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Votre message..."
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              Envoyer le message
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
