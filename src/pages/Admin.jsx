import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

function Admin() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState("");
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        navigate("/login");
      } else {
        setAccessToken(session.access_token);
      }
    };

    getSession();
  }, [navigate]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = { title, url, image, description };

    try {
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newProject),
      });

      const result = await res.json();

      if (!res.ok) {
        alert("Erreur : " + result.error);
      } else {
        alert("✅ Projet ajouté !");
        setTitle("");
        setUrl("");
        setImage("");
        setDescription("");
        setProjects([result, ...projects]); // ajoute le nouveau projet à la liste
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau ou serveur.");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Voulez-vous vraiment supprimer ce projet ?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        alert("Erreur : " + result.error);
      } else {
        alert("✅ Projet supprimé !");
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau ou serveur.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-darkBlue p-8">
      <div className="text-right mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Se déconnecter
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Ajout d’un projet</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md p-6 rounded space-y-4"
      >
        <input
          type="text"
          placeholder="Titre du projet"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Lien du projet"
          className="w-full p-2 border rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lien de l’image"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Ajouter le projet
        </button>
      </form>

      <hr className="my-10" />

      <h2 className="text-2xl font-bold text-center mb-4">Projets existants</h2>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full bg-white shadow-lg border border-gray-200 rounded">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-semibold text-darkBlue">
              <th className="p-3">Titre</th>
              <th className="p-3">Lien</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t text-sm">
                <td className="p-3">{project.title}</td>
                <td className="p-3 text-blue-600 truncate max-w-xs">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
