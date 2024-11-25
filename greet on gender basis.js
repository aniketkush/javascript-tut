// Function to greet a person based on their gender
function greetPerson(firstName, lastName, gender) {
    if (gender.toLowerCase() === "male") {
        console.log(`Hello, Mr. ${firstName} ${lastName}! Welcome!`);
    } else if (gender.toLowerCase() === "female") {
        console.log(`Hello, Ms. ${firstName} ${lastName}! Welcome!`);
    } else {
        console.log(`Hello, ${firstName} ${lastName}! Welcome!`);
    }
}

// Example usage
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const gender = prompt("Enter your gender (male/female):");
greetPerson(firstName, lastName, gender);

