//Cau1
function multiply(a, b) {
    console.log("Ket qua sau khi nhan a va b la: ", a * b);
}
multiply(2, 3);
multiply(10, 10);

//Cau2
function findMin(a, b, c) {
    let min = Math.min(a, b, c);
    console.log("Gia tri nho nhat la: ", min);
}
findMin(2, 3, 4);
findMin(10, 11, 15);
findMin(10, 100, 199);

//Cau3
function getTopStudents(arr1, threshold) {
    for (let item of arr1) {
        if (item.score >= threshold) {
            console.log(item.name);
        }

    }
}
getTopStudents(
    [
        { name: "Alice", score: 8 },
        { name: "Bob", score: 9 },
        { name: "Charlie", score: 10 }
    ], 9)

//Cau4 
function calculateInterest(_principal, _rate, _years) {
    let total = (_principal + _principal * _rate * _years) / 100;
    console.log(total);
}
calculateInterest(12000, 4, 2);