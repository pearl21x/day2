let age = 180
// if (age <= 17) {
//     console.log("Underage");
// } else if (age <= 65) {
//     console.log("Insurable");
// } else {
//     console.log("out of range");
// }


let result = (age >= 18) ? (age <= 65 ? "Insurable" : "Out of range") : "Underage";
    // (age <= 17) ? "Underage" : "18 or over";
console.log(result);

