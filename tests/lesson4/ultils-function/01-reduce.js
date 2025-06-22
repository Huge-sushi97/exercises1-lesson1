const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const expenses = [50, 100, 150];

let a = scores.reduce((sum,num) => sum + num, 0);
let b = ages.reduce((sum,num) => sum + num, 0);
let c = expenses.reduce((sum,num) => sum + num, 0);
console.log(a,b,c);
