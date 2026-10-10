function sum() {
    let total = 100;   //function scope variable
    console.log(total); // andar
}

sum();
//ye print nhi hoga beacouse total is function scope var jo function ke bahar access nhi hota.
console.log(total); // bahar hm veriable ko bahar access kr he nhi skte.





//second program 

function sum() {
    let total = 100;  //function scope variable
    return total;  //return keyword is used to return some value from the function:
}

console.log(sum());  //ye print hoga beacouse total is function scope var jo function ke bahar access nhi hota but return keyword se hum function ke bahar access kar sakte h.