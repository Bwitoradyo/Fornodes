console.log("Starting app.");

const fs = require("fs");
const os = require("os");
const _ = require("lodash")
const notes = require("./notes");

console.log(_.isString(true));
console.log(_.isNumber(123));
console.log(_.isString("Andrew"));

var filteredArray = _.uniq(["Bambang", 1, "Bambang", 1, 2, 3, 4])
console.log(filteredArray);

//const res = notes.divideMe(2, 23.3);
//console.log(res);
//console.log("The result is: ", notes.addMe(4, 2));


/*
const user = os.userInfo();


fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}`, (err) =>{
  if(err){
    console.log("Unable to write to file")
  }
})
*/
