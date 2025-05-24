import path from "path";
import { fileURLToPath } from "url";
import express from "express";

import { handleCVs } from "../controllers/cv.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEWS_DIR = path.join(__dirname, "../views");

const router = express.Router();

// Views
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/cv", (req, res) => {
    res.render("cv", {
        layout:false,
    });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/cv-templates", (req, res) => {
    res.render("cv-templates");
});

// REST end-points
router.get("/api/cvs", handleCVs);


export default router;