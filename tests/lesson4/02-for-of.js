// Cau 1
const str = "Playwright";
for (let i = 0 ; i < str.length ; i++){
    console.log(str[i]);
}

// Cau 2
for (let i = str.length ; i > -1 ; i-- ){
    console.log(str[i]);
}

// Cau 3
const arr = [1, 2, 3, 4, 3, 55, 23];
let firstIndex = arr.indexOf(3)
let lastIndex = arr.lastIndexOf(3)
console.log ("Vi Tri Dau Tien Cua Ba La: ",firstIndex);
console.log ("Vi Tri Dau Tien Cua Ba La: ",lastIndex);

//Cau 4
const dupArr = [1, 2, 3, 1, 2, 4, 5];
for (let item of dupArr){
    if (item !== dupArr){
        console.log(item);
    }
}



