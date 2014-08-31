var Bleacon = require('bleacon');
Bleacon.startScanning();

var exec = require('child_process').exec;

Bleacon.on('discover', function(bleacon) {
	   console.dir(bleacon);
var child = exec('pmset displaysleepnow', function(err, stdout, stderr) {
  if (!err) {
      console.log('stdout: ' + stdout);    
			console.log('stderr: ' + stderr)       
	} else {
	 	console.log(err);
		console.log(err.code);           
		console.log(err.signal);	
	}           
})
});

