// Function to reverse all the elements of an array
function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log("Original array:", array);
console.log("Reversed array:", reverseArray(array));
