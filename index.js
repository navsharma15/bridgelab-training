// Reverse Words in a Sentence
// Input: "Java is fun" → Output: "fun is Java"

let s = "Java is fun";
let result = s.split(" ").reverse().join(" ");
console.log(result);

// Check for Rotation
// Given two strings, check if one is a rotation of another.
// Input: "ABCD", "CDAB" → Output: true

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return (str1 + str1).includes(str2);
}
let s1 = "ABCD";
let s2 = "CDAB";

console.log(isRotation(s1, s2)); 

// Run-Length Encoding 
// Input: "aaabbc" → Output: "a3b2c1"

function runLengthEncode(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }

    return result;
}

let input = "aaabbc";
let output = runLengthEncode(input);
console.log(output);
