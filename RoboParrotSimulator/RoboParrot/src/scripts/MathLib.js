class MathLib{
	static toRadians (angle) {
      return angle * (Math.PI / 180);
    }
	
	static getCoordinatesByHypotenuse(corner, distance, generalDegree){
		var x = distance*Math.cos(MathLib.toRadians(corner));
		var z = distance*Math.sin(MathLib.toRadians(corner));
		
		//yes, it can be removed but left for better understanding in general
		
		if ( (generalDegree >= 0) && (generalDegree <= 90) ){
			x = 1*x;
			z = (-1)*z;
		}
		
		if ( (generalDegree > 90) && (generalDegree <= 180) ){
			x = (-1)*x;
			z = (-1)*z;
		}
		
		if (generalDegree > 180 && generalDegree <= 270){
			x = (-1)*x;
			z = 1*z;
		}
		
		if (generalDegree > 271 && generalDegree <= 359){
			x = 1*x;
			z = 1*z;
		}
		
		
		return {"x" : x, "z" : z};
	}
	
	static getGeneralCoordinatesByHypotenuse(corner, distance){
		var x = distance*Math.cos(MathLib.toRadians(corner));
		var z = distance*Math.sin(MathLib.toRadians(corner));
		return {"x" : x, "z" : z};
	}
	
}