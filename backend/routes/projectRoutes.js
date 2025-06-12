// backend/routes/projectRoutes.js
import express from "express";
import {
  getProjects,
  addProject,
  deleteProject,
} from "../controllers/projectController.js";
import { verifyAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getProjects);

// Privé
router.post("/", verifyAuth, addProject);
router.delete("/:id", verifyAuth, deleteProject);

export default router;
