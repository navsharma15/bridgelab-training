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

// First Non-Repeating Character
// Input: "swiss" → Output: 'w'
function firstNonRepeatingChar(str) {
    let freq = {};

    // Count frequency
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find first character with frequency 1
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("swiss"));

// Remove Characters Present in Another String
// Given str1 and str2, remove characters from str1 that appear in str2.
function removeChars(str1, str2) {
    let result = "";

    for (let ch of str1) {
        if (!str2.includes(ch)) {
            result += ch;
        }
    }

    return result;
}


console.log(removeChars("hello world", "ol"));

// Count Vowels and Consonants
// Input: "Hello World" → Output: Vowels: 3, Consonants: 7
function countVowelsAndConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0;
    let cCount = 0;

    for (let ch of str) {
        if (/[a-zA-Z]/.test(ch)) {   // check if it's a letter
            if (vowels.includes(ch)) {
                vCount++;
            } else {
                cCount++;
            }
        }
    }

    console.log("Vowels:", vCount, "Consonants:", cCount);
}


countVowelsAndConsonants("Hello World");

// Check for Anagram
// Input: "listen", "silent" → Output: true
function isAnagram(str1, str2) {
    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    return s1 === s2;
}


console.log(isAnagram("listen", "silent"));

// Find All Duplicates in a String
// Input: "programming" → Output: 'r', 'g', 'm'
function findDuplicates(str) {
    let duplicates = [];

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            if (!duplicates.includes(str[i])) {
                duplicates.push(str[i]);
            }
        }
    }

    return duplicates;
}


let Duplicates = "programming";
console.log(findDuplicates(Duplicates));

// Convert to Title Case
// Input: "java is awesome" → Output: "Java Is Awesome"
function toTitleCase(str) {
    return str
        .split(" ")                    
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter
        .join(" ");                    
}


let Result = "java is awesome";
console.log(toTitleCase(Result));
