// backend/middleware/authMiddleware.js
import supabase from "../supabase/client.js";

export const verifyAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token manquant ou invalide" });
  }

  const token = authHeader.split(" ")[1];

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: "Utilisateur non authentifié" });
  }

  // On attache l'utilisateur à la requête pour un usage ultérieur si nécessaire
  req.user = user;
  next();
};
