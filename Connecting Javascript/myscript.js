var roster= [];

function TaxStudents() {
  var newName=prompt("Please state your name")
  roster.push(newName)
}

function AssignScore() {
  var score= prompt("Please state your test score")
  var index= score.indexOf(roster)
  if (score === "") {
    console.log("Not recognised");
  }
}

function removeName() {
  var remove= prompt("What name would you like to remove")
  var index= roster.indexOf(remove)
  roster.splice(index, 1)
}

function display() {
  console.log(roster);
}

var start=prompt("Thanks for starting this web App")
var request= "Empty"

while (request !== "quit") {


request=prompt("Please choose an action: add, assign, remove, display or quit")
if (request === "add") {
  TaxStudents();
}else if (request === "assign") {
  AssignScore();
}else if (request === "remove") {
  removeName();
}else if (request === "display") {
  display()
}else {
  console.log("Error message");
}
}
alert("Thanks for visiting my web app")
