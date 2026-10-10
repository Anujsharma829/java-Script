//create a function that returns the concatenation of all string in an array.

let arr = ["Anuj", "Sharma", "Hello"];

function concat(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }

    return result;
}

console.log(concat(arr));