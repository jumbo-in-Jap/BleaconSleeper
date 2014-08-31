var Bleacon = require('bleacon');
Bleacon.startScanning();

var exec = require('child_process').exec;

// get iBeacon
Bleacon.on('discover', function(bleacon) {
	   console.dir(bleacon);

		 // Sleep
		 var child = exec('pmset displaysleepnow', function(err, stdout, stderr) {
        
		 })
});

