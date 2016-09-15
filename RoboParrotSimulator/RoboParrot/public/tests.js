QUnit.test( "toRadians() test", function( assert ) {
  var radians = MathLib.toRadians(0);
  assert.strictEqual( radians, 0, "Passed!" );
  
  var radians = MathLib.toRadians(30);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 0.524, "Passed!" );
  
  var radians = MathLib.toRadians(180);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 3.142, "Passed!" );
  
  
});