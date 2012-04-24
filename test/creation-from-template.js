var util = require('util'); 
var child_process = require('child_process');
var fs = require('fs');

// assumptions: user has installed node and executed "npm install -g volo"

// "volo create myGame gladiusjs/html5-game-template" results in dir with
// expected content
describe('volo create myGame gladiusjs/html5-game-template', function() {

  var child = child_process.exec("/bin/echo monkies", 
    function( error, stdout, stderr ) {
      debugger;
      console.log('test');
      util.print( error );
      util.print(stderr);
      it('should create a directory', function() {
        var stats = fs.statSync("myGame");       
        stats.isDirectory().should.be.ok;
      });
    });
});


// TD recursively remove created directory
