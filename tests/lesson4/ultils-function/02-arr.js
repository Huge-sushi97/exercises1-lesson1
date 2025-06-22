const numbers = [1, 2, 3]; 
const names = ["Alice", "Bob", "Charlie"]; 

//Cau 1
numbers.push(4);
names.push("David");
//Cau 2
numbers.pop(4);

//Cau 3
numbers.unshift(0);
names.unshift("David");

//Cau 4
numbers.shift();

console.log(numbers);
console.log(names);
