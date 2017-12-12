// Code your solution in this file!
const logDriverNames = function(driver){
  for(i = 0; i < driver.length; i++){
    console.log(driver[i].name)
  }
}

const logDriversByHometown = function(driver, hometown){
  for(i = 0; i < driver.length; i++){
    if(driver[i].hometown == hometown){
      console.log(driver[i].name)
    }
  }
}

const driversByRevenue = function(drivers){
  drivers.sort(function(a, b) {
    return a.revenue - b.revenue;
});
}
