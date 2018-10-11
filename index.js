// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  // return array of lowercased drivers
  return drivers.map(lowerCaseName)
}

function lowerCaseName(name) {
  return name.toLowerCase();
}

// const drivers = ["Colin", "Herman", "Cricky", "Casey"];

function nameToAttributes(drivers) {
  // return array of objects
  // where each object is a driver
  // with a firstName attribute
  // and a lastName attribute
// gives us: ["Colin Jaffe", "Herman Rivas"];

  return drivers.map(someFunc);
/*

wants:

{
  firstName: "Colin",
  lastName: "Jaffe"
}
*/
}

function giveAndTake(fullName) {
  
  const driversName = {};
  // takes in a name
  // returns an object with firstName and lastName attributes
  
  return driversName
}
