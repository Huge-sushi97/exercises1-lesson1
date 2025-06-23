const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Cau 1
let a = scores.every(num => num > 70);
console.log(a);

//Cau 2
let b = ages.every(num => num > 15);
console.log(b);

//Cau 3
let c = words.every(num => num.length > 5);
console.log(c);

