import getAllCVs from "../services/cv.json.service.js";


// catching HTTP related errors via try/catch
export async function handleCVs(req, res) {
    try {
        const cvs = await getAllCVs();
        res.json(cvs);
    } catch (error) {
        console.error("Error : ", error);
        res.status(500).json({error: error.message()});
    }
}