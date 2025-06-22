const student = { "name": "Alex", "age": 10, "salary": 20 };
//Cau1
// for (let item in student){
//     console.log(`${item} : ${student[item]}`);
// } 

//Cau2
// let total = 0;
// for (let item in student){
//     if (typeof student[item] === "number"){
//         total += student[item];
//     }
// } 
//     console.log(total);

//Cau3
let newArray = [];
for (let item in student){
    newArray.push(item);
}
    console.log(newArray);



