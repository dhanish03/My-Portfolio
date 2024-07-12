// Simulated projects data
const projects = [
    { name: 'Personal Portfolio', description: 'Built a personal portfolio website using HTML, CSS, and JavaScript.' },
    { name: 'Color Matcher Game', description: 'Developed a simple Java application for guessing color using random input number.' },
    { name: 'Credit Card Fraud Detection', description: 'Implemented a machine learning model for credit card fraud detection.' },
    { name: 'Recruitment Portal', description: 'Developed a recruitment portal using React.js for managing job applications.' },
    { name: 'Image Search Application', description: 'Developed web application for searching an image using API by giving input.' }
    // Add more projects as needed
];

// Function to generate project cards
const projectsContainer = document.getElementById('projectList');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('bg-white', 'p-6', 'rounded', 'shadow-md', 'mb-4');

    const projectName = document.createElement('h3');
    projectName.classList.add('text-xl', 'font-semibold', 'mb-2');
    projectName.textContent = project.name;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);

    projectsContainer.appendChild(projectCard);
});

// Simulated internship details
const internships = [
    
    // Add more internship details as needed
];

// Function to generate internship list
const internshipsContainer = document.getElementById('internships');

internships.forEach(internship => {
    const internshipItem = document.createElement('li');
    internshipItem.textContent = internship;

    internshipsContainer.querySelector('ul').appendChild(internshipItem);
});

// Event listener for dark mode toggle button
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
