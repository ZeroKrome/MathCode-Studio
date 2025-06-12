// backend/controllers/projectController.js
import supabase from "../supabase/client.js";

// GET /api/projects
export const getProjects = async (req, res) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

// POST /api/projects
export const addProject = async (req, res) => {
  const { title, description, image, url } = req.body;

  if (!title || !url) {
    return res.status(400).json({ error: "Title and URL are required" });
  }

  const { data, error } = await supabase
    .from("projects")
    .insert([{ title, description, image, url }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json(data[0]);
};

// DELETE /api/projects/:id
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ message: "Projet supprimé" });
};
