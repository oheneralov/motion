QUnit.test( "toRadians() test", function( assert ) {
  var radians = MathLib.toRadians(0);
  assert.strictEqual( radians, 0, "Passed!" );
  
  var radians = MathLib.toRadians(30);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 0.524, "Passed!" );
  
  var radians = MathLib.toRadians(180);
  assert.strictEqual( parseFloat(radians.toFixed(3)), 3.142, "Passed!" );
});


QUnit.test( "getCoordinatesByHypotenuse() when direction degree is [0, 90] test", function( assert ) {
  var corner = 30;
  var distance = 2;
  var result = MathLib.getCoordinatesByHypotenuse(corner, 2, 10);
  var expectedX = 1.732;
  var expectedZ = -1;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
});



QUnit.test( "getCoordinatesByHypotenuse() when direction degree is [91, 180] test1", function( assert ) {
  var corner = 30;
  var distance = 2;
  var result = MathLib.getCoordinatesByHypotenuse(corner, 2, 95);
  var expectedX = -1.732;
  var expectedZ = -1;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
});

QUnit.test( "getCoordinatesByHypotenuse() when direction degree is [91, 180] test2", function( assert ) {
  var corner = 30;
  var distance = 0.1;
  var result = MathLib.getCoordinatesByHypotenuse(corner, distance, 180);
  var expectedX = -0.087;
  var expectedZ = -0.05;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
});


QUnit.test( "getCoordinatesByHypotenuse() when direction degree is [181, 270] test", function( assert ) {
  var corner = 30;
  var distance = 2;
  var result = MathLib.getCoordinatesByHypotenuse(corner, 2, 200);
  var expectedX = -1.732;
  var expectedZ = 1;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
});

QUnit.test( "getCoordinatesByHypotenuse() when direction degree is [271, 359] test", function( assert ) {
  var corner = 30;
  var distance = 2;
  var result = MathLib.getCoordinatesByHypotenuse(corner, 2, 350);
  var expectedX = 1.732;
  var expectedZ = 1;
  assert.strictEqual( parseFloat(result.x.toFixed(3)), expectedX, "Passed!" );
  assert.strictEqual( parseFloat(result.z.toFixed(3)), expectedZ, "Passed!" );
});


