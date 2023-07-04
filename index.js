const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  // console.log('It worked! Returned IP:' , ip);
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    fetchISSFlyOverTimes(coords, (error, passes) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }

      console.log(passes);
    });

  });
});
