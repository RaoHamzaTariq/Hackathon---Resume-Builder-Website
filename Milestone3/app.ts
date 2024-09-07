
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('generated-resume') as HTMLElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).value;
  
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const year = (document.getElementById('year') as HTMLInputElement).value;
  const institute = (document.getElementById('institute') as HTMLInputElement).value;

  const role = (document.getElementById('role') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLInputElement).value;
  
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());


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
