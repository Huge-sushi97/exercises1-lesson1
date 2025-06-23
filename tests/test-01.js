// Cau 1
const departurePlanet = "Trai Dat";
const mission = "Khám phá Vũ trụ K15";
const crew = ["Phu Le", "Minh Thai", "Hang"];

function launchShip (crew, mission){
    for (let item of crew){
      console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${item} sẽ đồng hành cùng bạn trong chuyến phiên lưu ${mission}`);
}
}
launchShip (crew,mission);
console.log('-'.repeat(10));

// Cau 2
function calculateDistance (speed,time){
   let distance = (speed * time);
   console.log(`Khoảng cách tính toán được là: ${distance}`);
}
calculateDistance(1000,24);
console.log('-'.repeat(10));

// Cau 3
function convertTimeToHex (time){
    let covertTime = time.toString(16);
    console.log(covertTime);
}

convertTimeToHex(120);
console.log('-'.repeat(10));

// Cau 4
function decryptCode (code){
    for (let item of code){
        if(item === item.toUpperCase()){
            let lowerCaseText = item.toLowerCase();
            console.log(lowerCaseText);
        }
        if(item === item.toLowerCase()){
            let upperCaseText = item.toUpperCase();
            console.log(upperCaseText);
        }
    }
}
decryptCode("K15 Challenge");
console.log('-'.repeat(10));


//Cau 5
function returnToEarth (){
    console.log("Chuẩn bị trở về trái đất!");
}
returnToEarth();
console.log('-'.repeat(10));


