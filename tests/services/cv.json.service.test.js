import getAllCVs, { getCvByLastName, getFilteredCvs, saveCV } from "../../src/services/cv.json.service.js";
import selectAll, { save } from "../../src/repositories/cv.json.repository.js";


jest.mock("../../src/repositories/cv.json.repository.js", () => ({
    __esModule: true,
    default: jest.fn(),
    save: jest.fn(),
}));
  
const sampleCvs = [
  {
    profile: {
        photo: "/img1.png",
        firstName: "James",
        lastName: "Hunt",
        birthday: { day: 29, month: 8, year: 1947 },
        jobTitle: "Racer",
        address: "London",
        phone: "",
        email: "",
    },
    technologySkills: [
        { skill: "driving", details: ["persevering", "persistent", "fast", "aggressive"] }
    ],
  },
  {
    profile: {
        photo: "/img2.png",
        firstName: "Nikki",
        lastName: "Lauda",
        birthday: { day: 22, month: 2, year: 1949 },
        jobTitle: "Racer",
        address: "Austria",
        phone: "",
        email: "",
    },
    technologySkills: [
        { skill: "driving", details: ["steady", "meticulous"] }
    ],
  },
];
  
describe("cv.json.service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        selectAll.mockResolvedValue(sampleCvs);
    });

    describe("getAllCVs", () => {
            test("returns CVs array", async () => {
            await expect(getAllCVs()).resolves.toEqual(sampleCvs);
            expect(selectAll).toHaveBeenCalledTimes(1);
        });
    });

    describe("saveCV", () => {
        test("calls save with given CV", async () => {
            const cv = { firstName: "James", lastName: "Hunt", jobTitle: "Racer" };
            await saveCV(cv);
            expect(save).toHaveBeenCalledWith(cv);
        });
    });

    test("actually adds a new CV to the sampleCvs array", async () => {
        const newCv = {
            profile: {
                photo: "/img3.png",
                firstName: "Ayrton",
                lastName: "Senna",
                birthday: { day: 21, month: 3, year: 1960 },
                jobTitle: "Racer",
                address: "São Paulo",
                phone: "",
                email: "",
          },
            technologySkills: [
                { skill: "driving", details: ["legendary", "smooth"] }
          ],
        };
    
        save.mockImplementation(async (cv) => {
          sampleCvs.push(cv);
        });
    
        await saveCV(newCv);
    
        expect(sampleCvs).toContain(newCv);
    });

    describe("getFilteredCvs", () => {
        test("filters by lastName", async () => {
            const result = await getFilteredCvs({ lastName: "hunt" });
            expect(result).toEqual([sampleCvs[0]]);
        });

        test("filters by year born", async () => {
            const result = await getFilteredCvs({ year: "1949" });
            expect(result).toEqual([sampleCvs[1]]);
        });

        test("filters by technologyDetails array", async () => {
            const result = await getFilteredCvs({ technologyDetails: ["aggr"] });
            expect(result).toEqual([sampleCvs[0]]);
        });

        test("returns multiple matches for jobTitle", async () => {
            const result = await getFilteredCvs({ jobTitle: "racer" });
            expect(result).toEqual(sampleCvs);
        });
    });

    describe("getCvByLastName", () => {
        test("returns the first matching CV", async () => {
            const result = await getCvByLastName("laud");
            expect(result).toEqual(sampleCvs[1]);
        });

        test("returns undefined when no match", async () => {
            const result = await getCvByLastName("prost");
            expect(result).toBeUndefined();
        });
    });
});
