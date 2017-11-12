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
  newdriver=Object.assign('Sam', 'address', '12 Broadway')
  return newdriver;
}
