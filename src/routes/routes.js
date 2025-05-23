import path from "path";
import { fileURLToPath } from "url";
import express from "express";

import { handleCVs } from "../controllers/cv.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEWS_DIR = path.join(__dirname, "../views");

const router = express.Router();

router.get("/cv", (req, res) => {
    res.sendFile(path.join(VIEWS_DIR, "../views/cv.html"));
})

// REST end-points
router.get("/api/cvs", handleCVs);


export default router;