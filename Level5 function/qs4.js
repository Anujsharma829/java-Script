//create a function that the muktiplication table of a number.

function sum(a,b) {
    return a+b;
}

console.log(sum(10,20));

 //sum(sum(12,24), 35);   function ke aander function ko call karna is called function nesting.

function isAdult(age) {
    if (age >= 18) {
        return "adult";
    } else{
        return "not adult";
    }
}

console.log(isAdult(25));