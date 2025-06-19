// Cau1
let a = 0;
for (i=1 ; i<=100 ; i++) {
    a += i;
    console.log(a);
}

//Cau2
for (i = 1 ; i <=9 ; i++) {
   for (j = 1 ; j <= 10 ; j++){
     console.log(i + "x" + j + "=" + i*j);
   }
}

//Cau3
const arr = [];
for (i = 1 ; i <= 99 ; i++){
    if (i % 2 == 1){
    arr.push(i);
}
console.log(arr);
}

//Cau4
for (i = 1 ; i <=10 ; i++){
    console.log(`user${i}example.com`);
}

//Cau5
let arr5 = [];
arr5.push(
  { month: 1, total: 120 },
  { month: 2, total: 150 },
  { month: 3, total: 200 },
  { month: 4, total: 180 },
  { month: 5, total: 210 },
  { month: 6, total: 190 },
  { month: 7, total: 170 },
  { month: 8, total: 160 },
  { month: 9, total: 200 },
  { month: 10, total: 220 },
  { month: 11, total: 230 },
  { month: 12, total: 250 }
) ;
let totalRevenue = 0;
for (let item of arr5){
    totalRevenue += item.total;
}
console.log(totalRevenue);
