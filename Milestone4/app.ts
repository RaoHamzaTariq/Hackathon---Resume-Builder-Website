const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('generated-resume') as HTMLElement;
const downloadBtn = document.getElementById('download-pdf') as HTMLButtonElement;

let profilePicDataURL: string = '';

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;

  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const year = (document.getElementById('year') as HTMLInputElement).value;
  const institute = (document.getElementById('institute') as HTMLInputElement).value;

  const role = (document.getElementById('role') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLInputElement).value;

  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());

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

(document.getElementById('profile-pic') as HTMLInputElement).addEventListener('change', (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files ? input.files[0] : null;
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event: ProgressEvent<FileReader>) {
      profilePicDataURL = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
});


downloadBtn.addEventListener('click', () => {
  const printWindow = window.open('', '', 'height=700,width=700');
  if (printWindow) {
    printWindow.document.write('<html><head><title>Resume</title>');
    printWindow.document.write('<link rel="stylesheet" href="style.css" />'); 
    printWindow.document.write('</head><body>');
    printWindow.document.write(resumeContainer.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
});
