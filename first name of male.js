// Function to print all male people's first names
function printMaleFirstNames(people) {
    for (let person of people) {
        if (person.gender.toLowerCase() === "male") {
            console.log(person.firstName);
        }
    }
}

// Example usage
const people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Mike", lastName: "Brown", gender: "male" },
    { firstName: "Emma", lastName: "Wilson", gender: "female" }
];
printMaleFirstNames(people);
