// Get all "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.appliance button[id$="LearnMore"]');

// Loop through "Learn More" buttons and add click event listener
learnMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const applianceName = button.previousElementSibling.textContent; // Get appliance name (<h2>)
    alert(`Learn more about ${applianceName}!`); // Replace with actual learn more functionality (e.g., link to product page)
  });
});

// Get all "Buy Now" buttons
const buyButtons = document.querySelectorAll('.appliance button[id$="BuyNow"]');

// Loop through "Buy Now" buttons and add click event listener (replace with actual buy functionality)
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const applianceName = button.previousElementSibling.textContent; // Get appliance name (<h2>)
    alert(`Buy Now! ${applianceName} functionality not implemented yet.`); 
  });
});