console.log("Starting node sensor script");

const sensor = require("node-dht-sensor").promises;
 
// You can use `initialize` and `setMaxTries` just like before
sensor.setMaxRetries(10);
sensor.initialize(22, 14);
 

sensor.read(22, 14).then((temperature, humidity) => {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
}).catch(e => {
    console.log("Error!");
    console.log(e);
});
