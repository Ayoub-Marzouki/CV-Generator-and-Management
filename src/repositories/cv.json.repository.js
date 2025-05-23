import fs from "fs/promises";

const source = "src/data/cvs.json";

export default async function selectAll() {
    const data = await fs.readFile(source, "utf-8");
    return JSON.parse(data);
}