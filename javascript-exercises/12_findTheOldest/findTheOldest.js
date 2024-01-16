const findTheOldest = function (people) {
  let currentYear = 2024;
  let highestAge = 0;
  let oldestPerson = { name: people[0].name };
  if (people[0].yearOfDeath != undefined) {
    highestAge = people[0].yearOfDeath - people[0].yearOfBirth;
    oldestPerson.name = people[0].name;
  } else {
    highestAge = currentYear - people[0].yearOfBirth;
    oldestPerson.name = people[0].name;
  }
  people.map((person) => {
    if (person.yearOfDeath != undefined) {
      if (person.yearOfDeath - person.yearOfBirth > highestAge) {
        highestAge = person.yearOfDeath - person.yearOfBirth;
        oldestPerson.name = person.name;
      }
    } else if (currentYear - person.yearOfBirth > highestAge) {
      highestAge = currentYear - person.yearOfBirth;
      oldestPerson.name = person.name;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
