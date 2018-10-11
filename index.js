// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  // return array of lowercased drivers
  return drivers.map(lowerCaseName)
}

function lowerCaseName(name) {
  return name.toLowerCase();
}

const drivers = ["Colin", "Herman", "Cricky", "Casey"];

// drivers.map(lowerCaseDrivers);

// const newElement = func(arr[i]);
// newArr.push(newElement);

lowerCaseDrivers(drivers);