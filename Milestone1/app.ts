const skillsSection = document.getElementById('skills') as HTMLElement;
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
