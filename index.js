// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  // return array of lowercased drivers
  
  const lowerCasedDrivers = drivers.map(lowerCaseName);
  return lowerCasedDrivers;
  
  // return drivers.map(lowerCaseName)
}

function lowerCaseName(name) {
  return name.toLowerCase();
}

// const drivers = ["Colin", "Herman", "Cricky", "Casey"];


function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}











function nameToAttributes(drivers) {
  // return array of objects
  // where each object is a driver
  // with a firstName attribute
  // and a lastName attribute
// gives us: ["Colin Jaffe", "Herman Rivas"];

  return drivers.map(giveAndTake);
/*

wants:

{
  firstName: "Colin",
  lastName: "Jaffe"
}
*/
}

function giveAndTake(fullName) {
  // fullname = "Colin Jaffe"
  const splitNames = fullName.split(' ');
  // splitNames = ['Colin', 'Jaffe']
  
  
  
  const driversName = {firstName: splitNames[0], lastName: splitNames[1]}

  
  // takes in a name
  // returns an object with firstName and lastName attributes
  
  return driversName;
}
