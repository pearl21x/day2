const arr = ["i", "am", "your", "friend"];
console.log(arr);
console.log(arr[2]);
arr.pop();
console.log(arr);
arr.push("father");
console.log(arr);
arr.unshift("Luke");
console.log(arr);
const erroneousWord = "Luke";
let lukeIsHere = arr.includes(erroneousWord);
let lukeIsAt;

if (lukeIsHere) {
    lukeIsAt = arr.indexOf(erroneousWord);
    arr[lukeIsAt] = "No";
}
console.log(arr);
var output = new String();
for (let i = 0, j = arr.length; i < j; i++) {
    if (i === j - 1) {
        output += arr[i] + '!';
    } else if (arr[i] === 'No') {
        output += arr[i] + ', ';
    } else {
        output += arr[i] + ' '
    }
}
console.log(output)



