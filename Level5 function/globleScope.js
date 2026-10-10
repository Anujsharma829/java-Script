let x = 50; // Global variable

function test() {
    console.log(x);
}

test();

console.log(x);

//Jab hum koi variable function ke bahar banate hain, to use global scope ka variable kehte hain. Woh variable code mein alag-alag functions ke andar bhi access ho sakta hai.
