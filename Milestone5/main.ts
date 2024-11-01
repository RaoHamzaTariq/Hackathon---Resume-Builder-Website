
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('generated-resume') as HTMLElement;
const downloadBtn = document.getElementById('download-pdf') as HTMLButtonElement;


interface Experience {
  role: string,
  company: string,
  duration: string,
  tasks: string|string[]
}

let experienceArray : Experience[]

interface Education {
  duration: string,
  degree: string,
  institute: string,
}

let educationArray : Education[]

// Add event listeners for buttons
document.getElementById('addSkillButton').addEventListener('click', addSkill);
document.getElementById('addExperienceButton').addEventListener('click', addExperience);
document.getElementById('addEducationButton').addEventListener('click', addEducation);
document.getElementById('addLanguageButton').addEventListener('click', addLanguage);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  generateResume();
});

// Function to add a skill
function addSkill() {
  const skillInput = document.getElementById('skillInput') as HTMLInputElement;
  const skill = skillInput.value.trim();
  if (skill) {
    const skillsList = document.getElementById('skillsList') as HTMLDivElement;
    const skillEntry = createEditableEntry(skill);
    skillsList.appendChild(skillEntry);
    skillInput.value = '';
  }
}



// Function to add experience
function addExperience() {
  const role = (document.getElementById('role') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLInputElement).value;
  const tasks = (document.getElementById('tasks') as HTMLInputElement).value;
  if (role && company && duration && tasks) {
    const experienceList = document.getElementById('experienceList') as HTMLDivElement;
    const experienceEntry = createEditableEntry(
      `Role: ${role}, Company: ${company}, Duration: ${duration}, Tasks: ${tasks}`
    );
    let experienceObject : Experience = {
      role: role,
      company: company,
      duration: duration,
      tasks: tasks
    }
    experienceArray.push(experienceObject)
    experienceList.appendChild(experienceEntry);
  }
}



// Function to add education
function addEducation() {
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLInputElement).value;
  const institute = (document.getElementById('institute') as HTMLInputElement).value;
  if (degree && duration && institute) {
    const educationList = document.getElementById('educationList') as HTMLDivElement;
    const educationEntry = createEditableEntry(
      `Degree: ${degree}, Duration: ${duration}, Institute: ${institute}`
    );
    let educationObject : Education = {
      degree: degree,
      duration: duration,
      institute: institute
    }
    educationArray.push(educationObject)
    educationList.appendChild(educationEntry);
  }
}

// Function to add language
function addLanguage() {
  const languageInput = document.getElementById('languageInput') as HTMLInputElement;
  const language = languageInput.value.trim();
  if (language) {
    const languagesList = document.getElementById('languagesList') as HTMLDivElement;
    const languageEntry = createEditableEntry(language);
    languagesList.appendChild(languageEntry);
    languageInput.value = '';
  }
}

// Function to create an editable entry
function createEditableEntry(content: string) {
  const entryDiv = document.createElement('div');
  entryDiv.className = 'entry';

  const contentSpan = document.createElement('span');
  contentSpan.innerText = content;
  entryDiv.appendChild(contentSpan);

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', () => {
    const newContent = prompt("Edit content:", contentSpan.innerText);
    if (newContent) {
      contentSpan.innerText = newContent;
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => entryDiv.remove());

  entryDiv.appendChild(editButton);
  entryDiv.appendChild(deleteButton);
  return entryDiv;
}

// Function to generate the resume
function generateResume() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const role = (document.getElementById('role') as HTMLInputElement).value;
  const aboutMe = (document.getElementById('about-me') as HTMLTextAreaElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;

  const skills = Array.from(document.querySelectorAll('#skillsList .entry span')).map(
    (el) => el.textContent
  );
  const experiences = Array.from(
    document.querySelectorAll('#experienceList .entry span')
  ).map((el) => el.textContent);
  const educations = Array.from(document.querySelectorAll('#educationList .entry span')).map(
    (el) => el.textContent
  );
  const languages = Array.from(document.querySelectorAll('#languagesList .entry span')).map(
    (el) => el.textContent
  );

  // Render resume
  resumeContainer.innerHTML = `
    <div class="sidebar">
            <div class="profile-section ">
            <img src="https://avatars.githubusercontent.com/u/147372279?v=4" class="profile-image" alt="">
            <h1 class="profile-name">${name}</h1>
            <h2 class=".profile-role">${role}</h2>
            <hr class="profile-divider">
        </div>

        <div class="about-section">
            <h2 class="section-title">ABOUT ME</h2>
            <p class="section-content">${aboutMe}</p>
        </div>
        <div class="skills-section">
            <h2 class="section-title">SKILLS</h2>
            <ul class="skills-list">
                ${skills.map((skill) => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        <div class="contact-section">
            <h2 class="section-title">CONTACT</h2>
            <div class="contact-info">
                <p>${phone}</p>
                <p>${phone}</p>
                <p>${address}</p>
            </div>
        </div>
        </div>
        <div class="content">
            
              <div class="experience-section">  
                <h2 class="content-title">WORK EXPERIENCE</h2>

                ${experienceArray.map((job)=>{
                  `<div class="job">
                  <h2 class="job-title">${job.role} | ${job.duration}</h2>
                  <h4 class="job-company">${job.company}</h4>
                  <p>Tasks:</p>
                  <ul class="job-tasks">
                  ${job.tasks.map((task) => `<li>${task}</li>`).join('')}
                      
                  </ul>
              </div>`
                })}


            </div>

            <div class="education-section">
                <h2 class="content-title">EDUCATION</h2>
                
              ${educationArray.map((education)=>{
                `<div class="education-item">
                    <p>${education.duration}</p> 
                    <h3 class="education-degree">${education.degree}</h3>
                    <p class="education-institution">${education.institute}</p>
                </div>
               
            </div>`
              })}
                


            <div class="languages-section">
                <h2 class="content-title">LANGUAGES</h2>
                ${languages.map((language) => `<p>${language}</p>`)}
            </div>
        
        </div>
  `;
}
