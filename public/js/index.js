// Render Functions
function renderLinks() {
    let linksContent = ``;
    for (let i = 0; i <cv.profile.links.length; i++) {
        if (cv.profile.links[i].includes("github")) {
            linksContent += `
            <a class="link" id="link${i}" href="${cv.profile.links[i]}">
                <img class="icons" src="images/icons/github.png" alt="GitHub Icon">
                <span class="link-text">${cv.profile.links[i]}</span>
            </a>
            <br>`
        } else if (cv.profile.links[i].includes("linkedin")) {
            linksContent+= `
            <a class="link" id="link2" href="https://www.linkedin.com/in/ayoubmarzouki/">
                <img class="icons" src="images/icons/linkedin.png" alt="LinkedIn Icon">
                <span class="link-text">https://www.linkedin.com/in/ayoubmarzouki/</span>
            </a>
            <br>
            `
        } else {
            linksContent += `
            <a class="link" id="link1" href="${cv.profile.links[i]}">
            <span class="link-text">${cv.profile.links[i]}</span>
            </a>
            <br>
            `
        }
    }
    return linksContent;
}

function renderEducation() {
    educationContent = `
        <section id="education">
            <h2>EDUCATION</h2>
            <div id="education-list">
    `
    for (let i = 0; i< cv.education.length; i++) {
        educationContent += `
        <div class="education-section">
                <h3 class="education-diploma">${cv.education[i].diploma}</h3>
                <p class="education-organization">${cv.education[i].organisation}</p>
                <div class="flex year-location">
                    <p class="education-year">${cv.education[i].year}</p>
                    <p class="education-location">Fes, Morocco</p>
                </div>
        </div>
        `;
    }
    educationContent += `
    </div>
    </section>
    `;
    return educationContent;
}

function renderTechnologies() {
    let technologyContent = `
        <section id="technologies">
        <h2>SKILLS AND TECHNOLOGIES</h2>
        <div id="technologies-list">           
    `;

    for (let i = 0; i < cv.technologySkills.length; i++) {
        technologyContent += `
        <div class="technologies-section">
                <p class="skill">${cv.technologySkills[i].skill}</p>
                <ul class="details">
        `;
        for (let j = 0; j < cv.technologySkills[i].details.length; j++) {
            technologyContent += `
            <li>${cv.technologySkills[i].details[j]}</li>
            `
        }
        technologyContent +=`
                </ul>
                </div>
        `;
    }
    
    technologyContent += `
        </div>
        </section>
    `;
    return technologyContent;
}

function renderExperiences() {
    let experienceContent = `
    <section id="experience">
        <h2>Experience</h2>
        <div id="experience-list">
    `;

    for (let i = 0; i < cv.experiences.length; i++) {
        experienceContent += `
            <div class="experience-section">
                <h3 class="experience-type">${cv.experiences[i].type}</h3>
                `;

        if (cv.experiences[i].title != "") {
            experienceContent += `
            <h3 class="experience-title">${cv.experiences[i].title}</h3>`
        }

        experienceContent += `
            <p class="experience-organization">${cv.experiences[i].organisation}</p>
            <div class="year-duration">
                <p class="year">${cv.experiences[i].year}</p>
                <p class="duration">${cv.experiences[i].duration}</p>
            </div>
            <ul class="experience-technologies">
        `;
        
        for (let j = 0; j < cv.experiences[i].technologies.length; j++) {
            experienceContent += `
                <li>${cv.experiences[i].technologies[j]}</li>
            `;
        }
        experienceContent += `
                </ul>
            </div>
            `;      
    }

    experienceContent += `
        </div>
    </section>
    `;
    return experienceContent;
}

function renderSoftSkills() {
    let softSkillsContent = `
        <section id="soft-skills">
        <h2>Soft Skills</h2>
        <ul id="soft-skills-list">
    `;
    for (let i = 0; i < cv.softSkills.length; i++) {
        softSkillsContent += `
            <li>${cv.softSkills[i]}</li>
        `;      
    }
    
    softSkillsContent += `
        </ul>
    </section>
    `;
    return softSkillsContent;
}

function renderLanguages() {
    let languagesContent = `
    <section id="languages">
        <h2>Languages</h2>
        <div id="languages-list">
    `;
    for (let i = 0; i < cv.languages.length; i++) {
        languagesContent += `
            <div class="language-section">
                <div class="flex">
                    <p class="language-name">${cv.languages[i].language}</p>
        `;
        if (cv.languages[i].level != "") {
            languagesContent += `<p class="language-level">${cv.languages[i].level}</p>`; 
        }

        languagesContent += `
                </div>
                <br>
        `;

        if (cv.languages[i].certification != "") {
            languagesContent += `<p class="language-certification">Certification : ${cv.languages[i].certification}</p>`;
        }

        if (cv.languages[i].experience != "") {
            languagesContent += `<p class="language-experience">Experience : ${cv.languages[i].experience} </p>`;   
        }

        languagesContent += `
                <hr class="language-section-hr"/>
            </div>
        `;       
    }
    
    languagesContent += `
        </div>
    </section>
    `;
    return languagesContent;
}

function renderInterests() {
    let interestsContent = `
    <section id="interests">
        <h2>Interests</h2>
        <ul id="interests-list">
      
    `;
    for (let i = 0; i < cv.interests.length; i++) {
        interestsContent += `
            <li>${cv.interests[i]}</li>
        `;      
    }
    
    interestsContent += `
          </ul>
    </section>
    `;
    return interestsContent;
}

// get Content from render functions
linksContent = renderLinks();
educationContent = renderEducation();
technologyContent = renderTechnologies();
experienceContent = renderExperiences();
softSkillsContent = renderSoftSkills();
languagesContent = renderLanguages();
interestsContent = renderInterests();


// Start dynamically generating
window.onload = function() {
    let content = `
    <!-- Profile Section -->
    <header id="profile">
    <div id="profile-info">
        <div class="flex">
            <h1 id="name">
                <span id="last-name">${cv.profile.lastName}</span>
                <span id="first-name">${cv.profile.firstName}</span>
            </h1>
            <p id="birth">
                <span id="day">${cv.profile.birthday.day}</span>/<span id="month">${cv.profile.birthday.month}</span>/<span id="year">${cv.profile.birthday.year}</span>
            </p>
        </div>
        <h2 id="job-title">Applications Developer</h2>
        <p id="professional-summary">${cv.profile.professionalSummary}</p>
    </div>
    <div id="image">
        <img id="photo" src="${cv.profile.photo}" alt="Profile Photo">
    </div>
    </header>

    <!-- Contact Section -->
    <section id="contact">
    <div id="personal-contact">
        <a id="email" href="mailto:${cv.profile.email}">
            <img class="icons" src="images/icons/envelope.png" alt="Email Icon">
            <span>${cv.profile.email}</span>
        </a>
        <br>
        <a id="address" href="">
            <img class="icons" src="images/icons/location.png" alt="Address Icon">
            <span class="address-text">${cv.profile.address}</span>
        </a>
        <br>
        <a id="phone" href="tel:+212${cv.profile.phone}">
            <img class="icons" src="images/icons/phone.png" alt="Phone Icon">
            <span class="phone-text">${cv.profile.phone}</span>
        </a>
        <br>
    </div>
    <div id="links">
        ${linksContent}
    </div>
    </section>

    <main>
    <!-- Education Section -->
    ${educationContent}

    <!-- Technologies Section -->
    ${technologyContent}

    <!-- Experience Section -->
    ${experienceContent}

    <!-- Soft Skills Section -->
    ${softSkillsContent}

    <!-- Languages Section -->
    ${languagesContent}

    <!-- Additional Technologies -->
    <section id="additional-technologies">
        <h2>ADDITIONAL SKILLS AND TECHNOLOGIES</h2>
        <div id="additional-technologies-list">
            <div class="technologies-section">
                <p class="skill">Django REST Framework</p>
                <ul class="details">
                    <li>Django's ORM</li>
                    <li>SQLite3</li>
                    <li>Django Jazzmin</li>
                </ul>
            </div>
    </section>

    </section>
    <!-- Interests Section -->
    ${interestsContent}
    </main>
    `;

    document.getElementById("body").innerHTML = content;   
}