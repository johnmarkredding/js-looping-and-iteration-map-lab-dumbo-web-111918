// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (elem) {
    return elem.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let newDriver = {};
    newDriver.firstName = "";
    newDriver.lastName = "";
    return newDriver;
  });
}