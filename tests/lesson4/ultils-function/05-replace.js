const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống."; 
const numbersStr = "1,234,567"; 

console.log(phoneNumber.replace(/ /g, "."));
console.log(report.replace("lỗi", "bug"));
console.log(numbersStr.replace(/,/g, "."));
