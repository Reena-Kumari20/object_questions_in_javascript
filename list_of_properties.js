/*Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
class : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno*/

let student={
    name:"Reena",
    class:"12th",
    rollno:12
}
for (let x in student){
    console.log(x)
}