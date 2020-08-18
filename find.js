const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const findANonDriverWithFor = array => {
  for(index in array) {
    const person = array[index];
    if(person.isDriver === false) {
      return person;
    }
  }
}

const findANonDriver = drivers => {
  return drivers.find(person => person.isDriver === false);
}

console.log(findANonDriverWithFor(users));
console.log(findANonDriver(users));

FIND 
