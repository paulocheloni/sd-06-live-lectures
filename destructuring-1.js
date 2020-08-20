const personDataObject = {
  name: "Gabriel",
  age: "18"
}

let personName = personDataObject.name;
let personAge = personDataObject.age;

let { name: personName2, age: personAge2 } = personDataObject;

console.log(personName);
console.log(personAge);

console.log("------");

console.log(personName2);
console.log(personAge2);

console.log(personDataObject);