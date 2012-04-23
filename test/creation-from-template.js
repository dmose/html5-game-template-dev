function ok(expr, msg) {
  if (!expr) throw new Error (msg);
}

suite("Templated Game Creation");

// assumptions: user has installed node and executed "npm install -g volo"

// "volo create myGame gladiusjs/html5-game-template" results in dir with
// expected content
test('have an executable node', function() {
  
});

