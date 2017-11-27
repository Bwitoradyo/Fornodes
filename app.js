console.log("Starting app.");

const fs = require("fs");
const os = require("os");
const notes = require("./notes");

const res = notes.divideMe(2, 23.3);
console.log(res);
//console.log("The result is: ", notes.addMe(4, 2));


/*
const user = os.userInfo();


fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}`, (err) =>{
  if(err){
    console.log("Unable to write to file")
  }
})
*/
