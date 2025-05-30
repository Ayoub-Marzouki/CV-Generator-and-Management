import express from "express";

import { chosenLayout, handleCVs, handlePeopleCVs, handleCreateCV, chosenCV } from "../controllers/cv.controller.js";

import multer from "multer";

const router = express.Router();

// Views
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/create-cv", chosenLayout);


// Handling the image uploaded by the user
const upload = multer({ 
    dest: './public/uploads/',
    limits: {
        fileSize:10 * 1024 * 1024,
    }
});

router.post("/create-cv", upload.single('profile[photo]'), handleCreateCV);


router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/cv-templates", (req, res) => {
    res.render("cv-templates");
});

router.get("/people-cvs", handlePeopleCVs);

router.get("/preview",chosenCV)

router.get("/faqs", (req, res) => {
    res.render("faqs");
})

// REST end-points
router.get("/api/cvs", handleCVs);


export default router;