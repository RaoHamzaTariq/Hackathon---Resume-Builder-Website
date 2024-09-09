"use strict";
const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('generated-resume');
let profilePicDataURL = '';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const degree = document.getElementById('degree').value;
    const year = document.getElementById('year').value;
    const institute = document.getElementById('institute').value;
    const role = document.getElementById('role').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const profilePic = profilePicDataURL;
    resumeContainer.innerHTML = `
     <div class="resume">
        <div class="profile-header">
          ${profilePic ? `<img src="${profilePic}" alt="Profile Picture" />` :
        ''}
          <div class="profile-div">
            <h3 class="header-h3">${name}</h3>
            <p class="header-p">Phone: ${phone}</p>
            <p class="header-p">Email: ${email}</p>
            <p class="header-p">Address: ${address}</p>
          </div>
        </div>

        <section class="sections">
          <h4 class="education-h4">Education</h4>
          <p class="education-p"><strong>Degree:</strong> ${degree}</p>
          <p class="education-p"><strong>Year:</strong> ${year}</p>
          <p class="education-p"><strong>Institute:</strong> ${institute}</p>
        </section>

        <section class="sections">
          <h4 class="we-h4">Work Experience</h4>
          <p class="we-p"><strong>Role:</strong> ${role}</p>
          <p class="we-p"><strong>Company:</strong> ${company}</p>
          <p class="we-p"><strong>Duration:</strong> ${duration}</p>
        </section>

        <section class="sections">
          <h4 class="skills-h4">Skills</h4>
          <ul class="skills-ul">
            ${skills.map(skill => `
            <li class="skills-li">${skill}</li>
            `).join('')}
          </ul>
        </section>
      </div>
  `;
});
document.getElementById('profile-pic').addEventListener('change', (e) => {
    const input = e.target;
    const file = input.files ? input.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profilePicDataURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
