// Write your solution in this file!
function drivers (driver){
  driver=Object.assign
}

const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  newdriver=Object.assign({}, driver, { [key]: value });
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  const NewDriver=Object.assign ({}, driver {[address]:12 Broadway});
  return newdriver;
}


function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}
