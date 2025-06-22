const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Cau 1
let increasedArray = scores.filter(num => num >= 90);
let decreasedArray = scores.filter(num => num < 90);
console.log(increasedArray);
console.log(decreasedArray)
const increased = increasedArray.map(a => a * 1.10);
const decreased = decreasedArray.map(a => a * 0.95);
console.log(increased);

//Cau 2
let number = [1, 2, 3];
let a = number.map(num => num.toString());
console.log(a);

//Cau 3
let b = number.map(num => num * 2);
console.log(b);
