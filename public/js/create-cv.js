// EDUCATION SECTIONs
const addEducationButton = document.getElementById('add-education-button');
const educationList = document.getElementById('education-list');
const educationTemplate = document.getElementById('education-template');

addEducationButton.addEventListener('click', () => {
    const newIndex = educationList.getElementsByClassName('education-section').length;
    const clone = educationTemplate.content.cloneNode(true);
    const inputs = clone.querySelectorAll('input');

    inputs.forEach(input => {
        input.name = input.name.replace('[0]', `[${newIndex}]`);
    });
    educationList.appendChild(clone);
});

educationList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-section-button')) {
        event.target.closest('.education-section').remove();
    }
});

// TECHNOLOGY SKILLS SECTION 
const addSkillButton = document.getElementById('add-skill-button');
const technologiesList = document.getElementById('technologies-list');
const skillTemplate = document.getElementById('skill-template');
const detailTemplate = document.getElementById('detail-template');

addSkillButton.addEventListener('click', () => {
    const skillIndex = technologiesList.getElementsByClassName('technologies-section').length;
    const clone = skillTemplate.content.cloneNode(true);
    const inputs = clone.querySelectorAll('input');

    inputs.forEach(input => {
        input.name = input.name.replace('[0]', `[${skillIndex}]`);
    });
    technologiesList.appendChild(clone);
});

technologiesList.addEventListener('click', (event) => {
    // New detail
    if (event.target.classList.contains('add-detail-button')) {
        const parentSection = event.target.closest('.technologies-section');
        const detailsList = parentSection.querySelector('.details');

        const skillInputName = parentSection.querySelector('input[name*="[skill]"]').name;
        const skillIndex = skillInputName.match(/\[(\d+)\]/)[1];

        const detailClone = detailTemplate.content.cloneNode(true);
        const detailInput = detailClone.querySelector('input');
        
        detailInput.name = `technologySkills[${skillIndex}][details][]`;
        detailsList.appendChild(detailClone);
    }

    if (event.target.classList.contains('remove-skill-button')) {
        event.target.closest('.technologies-section').remove();
    }
    if (event.target.classList.contains('remove-detail-button')) {
        event.target.closest('li').remove();
    }
});

// EXPERIENCE SECTION

const addExperienceButton = document.getElementById('add-experience-button');
const experienceList = document.getElementById('experience-list');
const experienceTemplate = document.getElementById('experience-template');
const techTemplate = document.getElementById('experience-tech-template');

addExperienceButton.addEventListener('click', () => {
    const experienceIndex = experienceList.getElementsByClassName('experience-section').length;
    const clone = experienceTemplate.content.cloneNode(true);
    const formElements = clone.querySelectorAll('input, select');

    formElements.forEach(element => {
        element.name = element.name.replace('[0]', `[${experienceIndex}]`);
    });
    experienceList.appendChild(clone);
});

experienceList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-tech-button')) {
        const parentSection = event.target.closest('.experience-section');
        const techList = parentSection.querySelector('.experience-technologies');

        const titleInputName = parentSection.querySelector('input[name*="[title]"]').name;
        const experienceIndex = titleInputName.match(/\[(\d+)\]/)[1]; 

        const techClone = techTemplate.content.cloneNode(true);
        const techInput = techClone.querySelector('input');

        techInput.name = `experiences[${experienceIndex}][technologies][]`;
        techList.appendChild(techClone);
    }

    if (event.target.classList.contains('remove-experience-button')) {
        event.target.closest('.experience-section').remove();
    }
    if (event.target.classList.contains('remove-tech-button')) {
        event.target.closest('li').remove();
    }
});

// SOFT SKILLS SECTION
const addSoftSkillButton = document.getElementById('add-soft-skill-button');
const softSkillsList = document.getElementById('soft-skills-list');
const softSkillTemplate = document.getElementById('soft-skill-template');

addSoftSkillButton.addEventListener('click', () => {
    const newIndex = softSkillsList.getElementsByTagName('li').length;
    const clone = softSkillTemplate.content.cloneNode(true);
    const input = clone.querySelector('input');

    input.name = `softSkills[${newIndex}]`;
    softSkillsList.appendChild(clone);
});

softSkillsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-section-button')) {
        event.target.closest('li').remove();
    }
});

// LANGUAGES SECTION
const addLanguageButton = document.getElementById('add-language-button');
const languagesList = document.getElementById('languages-list');
const languageTemplate = document.getElementById('language-template');

addLanguageButton.addEventListener('click', () => {
    const newIndex = languagesList.getElementsByClassName('language-section').length;
    const clone = languageTemplate.content.cloneNode(true);
    const inputs = clone.querySelectorAll('input');

    inputs.forEach(input => {
        input.name = input.name.replace('[0]', `[${newIndex}]`);
    });

    languagesList.appendChild(clone);
});

languagesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-section-button')) {
        event.target.closest('.language-section').remove();
    }
});

// INTERESTS SECTION
const addInterestButton = document.getElementById('add-interest-button');
const interestsList = document.getElementById('interests-list');
const interestTemplate = document.getElementById('interest-template');

addInterestButton.addEventListener('click', () => {
    const newIndex = interestsList.getElementsByTagName('li').length;
    const clone = interestTemplate.content.cloneNode(true);
    const input = clone.querySelector('input');

    input.name = `interests[${newIndex}]`;

    interestsList.appendChild(clone);
});

interestsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-section-button')) {
        event.target.closest('li').remove();
    }
});