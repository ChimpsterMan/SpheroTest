var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm0"); // change port accordingly
 
orb.connect(function() {
  // Sphero's connected!
  // do some cool stuff here!
});