var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm0"); // change port accordingly
 
orb.connect(function() {
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(150, direction);
  }, 1000);
});