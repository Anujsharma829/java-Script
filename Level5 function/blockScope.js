// variable declared inside a {} block connot be accessed from outside the block. This is called block scope.

{
    let x = 10;
    console.log(x);
}

console.log(x);

// condition if m block scope 
if (true) {
    let age = 20;
    const name = "Anuj";

    console.log(age);
    console.log(name);
}

console.log(age);
console.log(name);