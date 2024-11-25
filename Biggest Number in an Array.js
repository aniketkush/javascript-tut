// Function to find and print the biggest number in an array
function printBiggestNumber(array) {
    let max = array[0]; // Assume the first element is the largest
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(`The biggest number is: ${max}`);
}

// Example usage
const numbers = [23, 56, 12, 89, 45, 78];
printBiggestNumber(numbers);
