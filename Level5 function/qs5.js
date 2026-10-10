//create a function that return the sum of number from 1 to n.

function sum(n) {
    let total = 0;
    for (let i = 1; i<= n; i++) {
        total = total + i;
    }
    return total;

}

console.log(sum(3));
