// Write your solution in this file!
function drivers (driver){
  driver=Object.assign
}

const driver = {}

function updatedriverWithKeyAndValue(driver,key,value){
  newdriver=Object.assign({}, driver, { [key]: value });
  return newdriver;
}
