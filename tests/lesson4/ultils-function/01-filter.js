const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//Cau 1
let a = scores.filter(num => num > 80);
console.log(a);

//Cau 2
let b = ages.filter(num => num >= 18);
console.log(b);

//Cau 3
let c = words.filter(num => num.length > 5);
console.log(c);