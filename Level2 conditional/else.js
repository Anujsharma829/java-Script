//simple if statement

let mask = 80;
if(mask >= 80) {
    console.log("your grade  is A+");
} else {
    console.log("your grade id B+")
}

//practice qs
let size = "XL"
if (size === "XL"){
    console.log("your price is 250");

}else if( size == "L"){
    console.log("your price is 200");
}else if(size == "M"){
    console.log("your price is 100");
}else if(size ==" S"){
    console.log("your price is 50");
}else{
    console.log("your price is not avalable");
}

//nested if else statement
let marks = 45;
if (marks >= 30) {
    console.log("pass");
    if (marks <= 80) {
        console.log("you got an A+");
    }
}else{
    console.log("fail");
}