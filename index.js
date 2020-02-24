console.log("Starting node sensor script");

const sensor = require("node-dht-sensor");
 
sensor.read(11, 14, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  } else {
      console.log(err);
  }
});