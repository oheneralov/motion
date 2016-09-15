class MathLib{
	static toRadians (angle) {
      return angle * (Math.PI / 180);
    }
	
	static getCoordinatesByHypotenuse(corner, distance){
		var x = distance*Math.cos(MathLib.toRadians(corner));
		var z = distance*Math.sin(MathLib.toRadians(corner));
		return {"x" : x, "z" : z};
	}
	
}