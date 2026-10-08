// trim method removes whitespace from both ends of a string
let msg = "   hellow word    ";
msg.trim();
// use console very easy and using html file.



let password = prompt ("please enter your password");
console.log(password.trim()); // use to console in browser and also 
// use to check the value of variable in console.


let email = prompt ("please enter your email");
console.log(email.trim());
console.log(email.toLowerCase()); // use to convert the string to lower case.


//arguments method in indexof method is used to find the index of a string in another string. 
// it returns the index of the first occurrence of the specified value, or -1 if not found.

let msge = "ilovecoding";
console.log(msge.indexOf("coding")); // it returns the index of the first occurrence
//  of the specified value, or -1 if not found.



let str = "ilovecoding";
console.log(str.slice(1, 5));//slice method extracts a section of a string and returns it as a new string, without modifying the original string. 
//The first argument is the starting index, and the second argument is the ending index (not included in the result). In this case, it will return "love" from "ilovecoding".
let string = "apnacollae";
console.log(string.slice(-4)); // it will return the last 4 characters of the string, which is "llae".
let stri = "ilovecoding";
console.log(stri.slice("o", "x")); // it will return an empty string because the starting index is greater than the ending index.
///replace method is used to replace a specified value with another value in a string. It returns a new string with the specified value replaced.
