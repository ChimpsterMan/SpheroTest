var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm5", {emitPacketErrors: true}); // change port accordingly
 
orb.connect(function() {
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    orb.roll(150, direction);
  }, 1000);

  orb.on("error", function(err, data) {
    console.log(err);
  });
});