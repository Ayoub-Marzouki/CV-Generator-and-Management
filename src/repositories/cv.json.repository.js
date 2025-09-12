import fs from "fs/promises";

const source = "src/data/cvs.json";

export default async function selectAll() {
    const data = await fs.readFile(source, "utf-8");
    return JSON.parse(data);
}

export async function save(cv, isUpdate = false) {
    let cvs = await selectAll();

    if (isUpdate) {
        // Update existing CV
        const index = cvs.findIndex(existingCv => existingCv.id === cv.id);
        if (index !== -1) {
            cvs[index] = cv; // Replace the existing CV
        } else {
            // If CV not found, treat as new
            cv.id = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
            cvs.push(cv);
        }
    } else {
        // Create new CV
        if (!cv.id) {
            cv.id = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
        }
        cvs.push(cv); // Push the cv to the cv.json file
    }
    
    await fs.writeFile(source, JSON.stringify(cvs)); // rewrite the file
}