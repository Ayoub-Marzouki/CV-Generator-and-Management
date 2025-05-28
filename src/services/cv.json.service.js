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

export async function getFilteredCvs(filters) {
    console.log(filters);
    let cvs;
    let filteredCvs = [];
    // Filters coming from user
    let lastName, firstName, address, yearBorn, jobTitle, skill, technologyDetails;

    if (filters.lastName) {
        lastName = normalize(filters.lastName);
    }
    if (filters.firstName) {
        firstName = normalize(filters.firstName);
    }
    if (filters.address) {
        address = normalize(filters.address);
    }
    if (filters.jobTitle) {
        jobTitle = normalize(filters.jobTitle);
    }
    if (filters.skill) {
        skill = normalize(filters.skill);
    }

    if (Array.isArray(filters.technologyDetails)) {
        technologyDetails = [];
        for (let i = 0; i < filters.technologyDetails.length; i++) {
            technologyDetails.push(normalize(filters.technologyDetails[i]));
        }
    
    } else if (filters.technologyDetails) {
      technologyDetails = [normalize(filters.technologyDetails)];
    
    } else {
      technologyDetails = [];
    }
    

    if (filters.year) {
        yearBorn = parseInt(filters.year);
    }

    try {
        cvs = await selectAll();
        cvs.forEach(cv => {
            let exists = false;
            if (filters.lastName && cv.profile.lastName && normalize(cv.profile.lastName).includes(lastName)) {
                exists = true;
            }
            if (filters.firstName && cv.profile.firstName && normalize(cv.profile.firstName).includes(firstName)) {
                exists = true;
            }
            if (filters.jobTitle && cv.profile.jobTitle && normalize(cv.profile.jobTitle).includes(jobTitle)) {
                exists = true;
            }
            if (filters.address && cv.profile.address && normalize(cv.profile.address).includes(address)) {
                exists = true;
            }

            // year is stored as a number in CV objects unlike the others which are strings
            if (filters.year && cv.profile.birthday.year && cv.profile.birthday.year === yearBorn) {
                exists = true;
            }

            if (filters.skill) {
                cv.technologySkills.forEach(s => {
                    if (s.skill && normalize(s.skill).includes(skill)) {
                        exists = true;
                    }
                });
            }
            // Check if all technology details entered exist
            if (technologyDetails.length > 0) {
                let allFound = true;

                for (const tech of technologyDetails) {
                    let techFound = false;
                    for (const technologySkill of cv.technologySkills) {
                        for (const detail of technologySkill.details) {
                            if (detail && normalize(detail).includes(tech)) {
                                techFound = true;
                                break;
                            }
                        }
                        if (techFound) break;
                    }
                    if (!techFound) {
                        allFound = false;
                        break;
                    }
                }
                if (allFound) exists = true;
            }
                                
            if (exists) {
                filteredCvs.push(cv);
            }
        });
        return filteredCvs;
    } catch (error) {
        console.log(error);
    }
}

// Helper function
function normalize(string) {
    return string.trim().toLowerCase();
}