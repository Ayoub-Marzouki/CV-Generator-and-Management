import selectAll, {save} from "../repositories/cv.json.repository.js";


// catching I/O/JSON related errors via try/catch
export default async function getAllCVs() {
    try { 
        const CVs = await selectAll();
        return CVs;
    } catch (error) {
        console.error("Error : ", error);
    }
}

export async function saveCV(cv) {
    try {
        await save(cv);
    } catch (error) {
        console.log(error);
    }
}