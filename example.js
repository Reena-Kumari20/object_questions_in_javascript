/*The dot notation and bracket notation both are used to access the object properties in JavaScript.
The dot notation is used mostly as it is easier to read and comprehend and also less verbose. 
The main difference between dot notation and bracket notation is that the bracket notation allows
us to access object properties using variable.*/

var person={}
person.name="Abhishek";
person['age']=30;
console.log(person)
console.log(person['name'])

var property='age';
console.log(person.property)

