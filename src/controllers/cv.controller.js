import getAllCVs, { getCvByLastName, getFilteredCvs, saveCV, getCvById } from "../services/cv.json.service.js";

// catching HTTP related errors via try/catch

// /api/cvs
export async function handleCVs(req, res) {
    let cvs;
    try {
        if (Object.keys(req.query).length === 0) {
            cvs = await getAllCVs();
        } else {
           cvs = await getFilteredCvs(req.query);
        }            
        res.json(cvs);
    } catch (error) {
        console.error("Error : ", error);
        res.status(500).json({error: error.message});
    }
}

// /people-cvs
export async function handlePeopleCVs(req, res) {
    let cvs;
    try {
        if (Object.keys(req.query).length === 0) {
        cvs = await getAllCVs();
        } else {
           cvs = await getFilteredCvs(req.query);
        }

        let context = {cvs, };
        res.render("people-cvs", context);
    } catch (error) {
        console.log("Error : ", error);    
    }
}


// catch the chosen template - /createcv?template=...
export async function chosenLayout(req, res) {
    try {
        const chosenLayout = req.query.template || "creative";
        let context = {chosenLayout, layout:false, };
        res.render("create-cv", context);
    } catch (error) {
        console.log("Error : ", error);
    }
}


// POST /create-cv?template=...
export async function handleCreateCV(req, res) {
    try {
        const cv = req.body; // cv's data, but doesn't include the photo
        if (req.file) { // photo is in req.file instead of req.body, thus needs special treatment
            cv.profile.photo = `/uploads/${req.file.filename}`;
        }
        
        await saveCV(cv);
        res.redirect("/people-cvs");
    } catch (error) {
        console.log(error);
    }
}

export async function chosenCV(req, res) {
    try {
        const id = req.query.id;
        let cv;
        if (id) {
            cv = await getCvById(id);
        }
        if (!cv) {
            cv = await getCvByLastName(req.query.lastName);
        }
        if (!cv) {
            return res.status(404).send("CV not found");
        }
        res.render("preview", {cv, layout:false});
    } catch (error) {
        console.log(error);
    }
}