import fs from "fs/promises";

const source = "src/data/cvs.json";

export default async function selectAll() {
    const data = await fs.readFile(source, "utf-8");
    return JSON.parse(data);
}

export async function save(cv) {
    let cvs = await selectAll();

    if (!cv.id) {
        cv.id = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    }

    cvs.push(cv); // Push the cv to the cv.json file
    await fs.writeFile(source, JSON.stringify(cvs)); // rewrite the file (including the newly added cv)
}