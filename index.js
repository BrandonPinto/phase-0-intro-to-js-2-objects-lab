//create a variable employee and make it an object
//and set it equal to name and streetAddress.
//
const employee = {
    name: "Jack",
    streetAddress: "112 Washington Street",
  };
function updateEmployeeWithKeyAndValue(employee, name) {
  let newEmployee = {...employee};
  newEmployee[name] = "11 Broadway";
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  employee[name] = streetAddress;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
  let newEmployee = {...employee};
  delete newEmployee[name]
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
  let newEmployee = employee;
  delete newEmployee[name];
  return newEmployee;
}