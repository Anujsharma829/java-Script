let todo = [];

let req = prompt("Please enter your request:");

while(true) {
    if(req == "quit") {
       console.log("quitting app");
       break;
    }

    if (req == "list") {

     console.log("**********");
     for (let i= 0; i<todo.length; i++) {
         console.log(i, todo[i]);
     }
     console.log("**********");
    }else if (req =="add") {
       let newtask= prompt ("please Enter a task to add");
       todo.push(newtask);
       console.log (newtask + " added");

    } else if( req == "delete") {
        let index = prompt("please enter the index of the task to delete");
        let deletedTask = todo.splice(index, 1);
        console.log(deletedTask + " deleted");
    }else {
        console.log("Unknown request")
    }

    req = prompt("Please enter your request:");
    

}