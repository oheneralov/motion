QUnit.test( "toRadians() test", function( assert ) {
  var radians = MathLib.toRadians(0);
  assert.strictEqual( radians, 0, "Passed!" );
  
  var radians = MathLib.toRadians(30);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 0.524, "Passed!" );
  
  var radians = MathLib.toRadians(180);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 3.142, "Passed!" );
  
});

QUnit.test( "getCoordinatesByHypotenuse() test", function( assert ) {
  var corner = 30;
  var distance = 2;
  var result = MathLib.getCoordinatesByHypotenuse(corner, 2);
  var expectedX = 1.732;
  var expectedZ = 1;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
  
});