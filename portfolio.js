// Simulated projects data
const projects = [
    { name: 'Crypto Price Tracker', description: 'Developed a web application to track cryptocurrency prices in real-time using ReactJS and the CoinGecko API.' },
    { name: 'Credit Card Fraud Detection', description: 'Developed a machine learning model to detect fraudulent credit card transactions using Python and scikit-learn.' },
    { name: 'Image Search Application', description: 'Built a search application utilizing the Unsplash API to fetch and display images based on user queries.' },
    { name: 'Diwali Sales Analysis', description:'Analyzed Diwali sales data to uncover valuable insights and trends using data analytics techniques.' },
    { name: 'Realiance Sales Report', description: 'This project showcases a dynamic and interactive Power BI dashboard designed to analyze sales performance. The dashboard provides key insights into various aspects of sales data, including product-wise performance, region-based revenue, and profitability trends.' },
    {name:'Food Delivery App Design', description:'A prototype for a food delivery mobile app designed to simplify the user journey from exploring restaurants to placing orders and tracking deliveries.'},
    {name:'Rock Paper ',description:'This is a simple implementation of the classic Rock, Paper, Scissors game, where a player competes against the computer.'}
    
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

// Function to handle form submission
const contactForm = document.querySelector('footer form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = contactForm[0].value;
    const email = contactForm[1].value;
    const message = contactForm[2].value;

    // Simple alert for demonstration, replace with actual functionality
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset(); // Clear the form fields after submission
});

// Optional: Event listener for dark mode toggle (if implemented)
document.getElementById('toggleTheme')?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
