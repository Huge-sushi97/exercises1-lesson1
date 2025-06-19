// Cau 1
let car = {
    "made": "Toyota",
    "model": "Corolla",
    "year": 2021
}

console.log("Year = ", car.year);

// Cau 2
let person = {
    "name": "Sushi",
    "address": {
        "street": "Dien Bien Phu",
        "city": "Ho Chi Minh",
        "country": "Viet Nam"
    }
}

console.log("Street = ", person.address.street);

//Cau 3
let student = {
    "name": "Sushi",
    "grades": {
        "math": 9,
        "english": 10,
    }
}
console.log("Grades of Math = ", student.grades["math"]);

//Cau 4
const settings = {
    "volume": 100,
    "brightness": "High"
}
settings.volume = 200;
console.log("New value of volume: ", settings.volume);

// Cau 5
let bike = {}
bike.color = "green";
console.log(bike);

// Cau 6
let employee = {
    "name": "Sushi",
    "age": 19
}
delete employee.age;
console.log(employee);

// Cau 7
const school = {
    "classA": ["An", "Binh", "Chau"],
    "classB": ["Dao", "Huong", "Giang"]
}
console.log(school.classA);


