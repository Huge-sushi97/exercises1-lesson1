//Cau1
const number = [1,2,3];
number.forEach((item, index) => {
        console.log(item);
})

//Cau2
let total = 0;
let min,max;
number.forEach((item, index) => {
        total +=item;
        min = Math.min(...number);
        max = Math.max(...number);

})
console.log(total);
console.log(min);
console.log(max);

//Cau3
number.forEach((item, index) => {
        console.log(item*2);
})






