//slice
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 4); // Extract from index 1 to 3

console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
//splice
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let removedFruits = fruits.splice(1, 2); // Remove 2 elements starting from index 1

console.log(removedFruits); // Output: ["Banana", "Cherry"]
console.log(fruits); // Output: ["Apple", "Date"] (original array modified)
