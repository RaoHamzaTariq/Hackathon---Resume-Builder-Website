"use strict";
const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('generated-resume');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const profilePic = document.getElementById('profile-pic').value;
    const degree = document.getElementById('degree').value;
    const year = document.getElementById('year').value;
    const institute = document.getElementById('institute').value;
    const role = document.getElementById('role').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    resumeContainer.innerHTML = `
    <div class="resume">
      <div class="profile-header">
        ${profilePic ? `<img src="${profilePic}" alt="Profile Picture">` : ''}
        <div>
          <h3>${name}</h3>
          <p>Phone: ${phone}</p>
          <p>Email: ${email}</p>
          <p>Address: ${address}</p>
        </div>
      </div>
      
      <h4>Education</h4>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Institute:</strong> ${institute}</p>
      
      <h4>Work Experience</h4>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      
      <h4>Skills</h4>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
  `;
});
