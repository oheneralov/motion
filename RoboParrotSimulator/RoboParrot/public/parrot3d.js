/**
 * @author Oleksandr Generalov http://robotbird.com.ua/
 */
class Parrot3d{
	constructor(place = "body", height = 1000, width = 1800) {
		console.log("creating Parrot in 3d");
		var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( width, height );
			document.getElementById(place).appendChild( renderer.domElement );
			
			var axis = new THREE.AxisHelper(10);
			scene.add(axis);
			
			//var grid = new THREE.GridHelper(50, 50);
			//scene.add(grid);
			
			/* Floor  */    
           var FloorGeometry = new THREE.PlaneGeometry( 15, 7, 1, 1 );
           var FloorMaterial = new THREE.MeshBasicMaterial( { color: 0xA3B3E3 } );
           var floor = new THREE.Mesh( FloorGeometry, FloorMaterial );
		   //rotate floor by 90 degrees
		   floor.rotation.x = MathLib.toRadians(-90);
		   scene.add(floor);
		   
		    var ClawGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 0.2, 32 );
			var ClawMaterisl = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
			var leftClaw1 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			var leftClaw2 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			var leftClaw3 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			
			var rightClaw1 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			var rightClaw2 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			var rightClaw3 = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			
			
			var LegGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 1, 32 );
			var materialLeg = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
			var LeftLeg1 = new THREE.Mesh( LegGeometry, materialLeg );
			var RightLeg1 = new THREE.Mesh( LegGeometry, materialLeg );
			var LeftLeg2 = new THREE.Mesh( LegGeometry, materialLeg );
			var RightLeg2 = new THREE.Mesh( LegGeometry, materialLeg );

			
			
			LeftLeg1.rotation.z = -(Math.PI / 180)*40;
			LeftLeg1.position.z -= 0.14; 
			LeftLeg1.position.y += 0.4;
			LeftLeg1.position.x = leftClaw1.position.x +0.2;
			
			LeftLeg2.rotation.z = (Math.PI / 180)*40;
			LeftLeg2.position.z -= 0.14;
			LeftLeg2.position.y += 1.15;
			LeftLeg2.position.x = LeftLeg1.position.x;
			
			var LegsDistance = 0.2;
			
			RightLeg1.position.x = LeftLeg1.position.x;
			RightLeg1.position.y = LeftLeg1.position.y;
			RightLeg1.position.z = LeftLeg1.position.z + LegsDistance;
			RightLeg1.rotation.z = LeftLeg1.rotation.z;
			
			RightLeg2.position.x = LeftLeg2.position.x;
			RightLeg2.position.y = LeftLeg2.position.y;
			RightLeg2.position.z = LeftLeg2.position.z + LegsDistance;
			RightLeg2.rotation.z = LeftLeg2.rotation.z;
			
			var rotationDegree = (Math.PI / 180)*80;
			leftClaw1.position.x = LeftLeg1.position.x - 0.03;
			leftClaw1.rotation.z += MathLib.toRadians(90);
			leftClaw1.position.z -= 0.04;
			leftClaw1.rotation.y += MathLib.toRadians(15);
			leftClaw1.scale.y *= 3;
			
			
			leftClaw2.position.x = LeftLeg1.position.x - 0.03;
			leftClaw2.rotation.z += MathLib.toRadians(90);
			leftClaw2.position.z += 0.06;
			leftClaw2.scale.y *= 3;
			//leftClaw2.rotation.y += MathLib.toRadians(40);
			
			
			rightClaw1.position.x = RightLeg1.position.x - 0.03;
			rightClaw1.rotation.z += MathLib.toRadians(90);
			rightClaw1.position.z = leftClaw1.position.z - 0.2;
			rightClaw1.rotation.y += MathLib.toRadians(15);
			rightClaw1.scale.y *= 3;
			
			
			rightClaw2.position.x = RightLeg1.position.x - 0.03;
			rightClaw2.rotation.z += MathLib.toRadians(90);
			rightClaw2.position.z = leftClaw1.position.z - 0.13;
			rightClaw2.scale.y *= 3;
			rightClaw2.rotation.y += MathLib.toRadians(5);
			
			var geometrybody = new THREE.SphereGeometry( 0.3, 32, 32 );//sphere size
			var materialbody = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
			var body = new THREE.Mesh( geometrybody, materialbody );
			body.scale.y *= 2;
			body.position.y  = RightLeg2.position.y + 0.95;
			body.position.x -= 0.17;
			
			var WingGeometry = new THREE.SphereGeometry( 0.3, 32, 32 );//sphere size
			var WingMaterial = new THREE.MeshBasicMaterial( { color: 0xB1CCA7 } ); 
			var wing1 = new THREE.Mesh( WingGeometry, WingMaterial );
			wing1.position.y = body.position.y + 0.15; 
			wing1.position.x = body.position.x + 0.1;
			wing1.scale.y *= 1.5;
			wing1.scale.x /= 1.3;
			wing1.scale.z /= 4;
			wing1.position.z += 0.34;
			
			
			var wing2 = new THREE.Mesh( WingGeometry, WingMaterial );
			wing2.position.y = body.position.y + 0.15; 
			wing2.position.x = body.position.x + 0.1;
			wing2.scale.y *= 1.5;
			wing2.scale.x /= 1.3;
			wing2.scale.z /= 4;
			wing2.position.z -= 0.4;
			
			var FaceGeometry = new THREE.SphereGeometry( 0.3, 32, 32 );//sphere size
			var FaceMaterial = new THREE.MeshBasicMaterial( { color: 0x4d79ff} ); //red color
			var face = new THREE.Mesh( FaceGeometry, FaceMaterial );
			face.position.y = body.position.y + 0.9;
			
			var Eyegeometry = new THREE.SphereGeometry( 0.3/3, 32, 32 );//sphere size
			var Eyematerial = new THREE.MeshBasicMaterial( { color: 0xFF0000 } ); //red color
			var Eye1 = new THREE.Mesh( Eyegeometry, Eyematerial );
			Eye1.position.y = face.position.y;
			Eye1.position.x = face.position.x + 0.1;
			Eye1.position.z += 0.2;
			
			var Eye2 = new THREE.Mesh( Eyegeometry, Eyematerial );
		    Eye2.position.x = Eye1.position.x;
			Eye2.position.y = Eye1.position.y;
			Eye2.position.z = Eye1.position.z - 0.4;
			
			
			var BeakGeometry = new THREE.CylinderGeometry( 0.07, 0.02, 0.5, 32 );//beak sizes
			var BeakMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000 } ); //red color
			var Beak = new THREE.Mesh( BeakGeometry, BeakMaterial );
			Beak.position.x = Eye1.position.x + 0.06;
			Beak.position.y = Eye1.position.y;
			Beak.rotation.x = MathLib.toRadians(90);
			Beak.position.z -= face.position.z;
			Beak.rotation.z += MathLib.toRadians(90);
			//Beak.rotation.y += MathLib.toRadians(30);
			
				
			var group = new THREE.Group();
			group.add(leftClaw1);
			group.add(leftClaw2);
			group.add(rightClaw1);
			group.add(rightClaw2);
			group.add( LeftLeg1 );
			group.add( RightLeg1 );
			group.add( LeftLeg2 );
			group.add( RightLeg2 );
			group.add( body );
			group.add(face);
			group.add(Eye1);
			group.add(Eye2);
			group.add(Beak);
			
			this.Beak = Beak;
			
						
			
			group.position.x = -3;
			group.position.y += 0.1;
			//group.rotation.x += (Math.PI / 180)*10 ;
			scene.add(group);
			
			
			group.scale.y /= 3;
			group.scale.x /= 3;
			group.scale.z /= 3;
			
			this.parrot = group;
			this.ok = true;
			this.renderer = renderer;
			this.scene = scene;
			this.camera = camera;
			this.ParrotInitialY = this.parrot.position.y;
			this.rotationByX = 0;
			this.CoordinateX = 0;
			this.CoordinateY = 0;
			this.CoordinateZ = 0;
			this.jumpCount = 0;
			this.isJumpingFinished = false;

			this.flyForwardCount = 0;
			this.isflyForwardFinished = false;
			this.rotationLeft = 0;
			this.floor = floor;
			
			/*
			
			var points = [];
for (var i = 0; i < 10; i++) {
    points[i] = new THREE.Vector3(
    2.5 * Math.sin(i),
    2.5 * Math.sin(i * 1.15 + 1.1),
    2.5 * Math.sin(i * 1.7 + 1.5));
}
var extrudePath = new THREE.ClosedSplineCurve3(points);
var material = new THREE.MeshLambertMaterial();
material.color = new THREE.Color("red");
var geometry = new THREE.TubeGeometry(extrudePath, 3, 0.6, 2, true, false);
var tubeMesh = new THREE.Mesh(geometry, BeakMaterial);
scene.add(tubeMesh);
*/
			
		  	   
		   
		    var texture = new THREE.TextureLoader().load( 'images/crate.gif' );

			var BoxGeometry = new THREE.BoxBufferGeometry( 1/2, 1.5, 3/2 );
			var BoxMaterial = new THREE.MeshBasicMaterial( { map: texture } );
           
			var cube1 = new THREE.Mesh( BoxGeometry, BoxMaterial );
			cube1.position.x += 3;
			cube1.position.y += 0.75;
			scene.add( cube1 );
			
			var cube2 = new THREE.Mesh( BoxGeometry, BoxMaterial );
			cube2.position.x -= 1;
			cube2.position.y += 0.75;
			scene.add( cube2);
			
			camera.position.y += MathLib.toRadians(50);
			this.parrot.position.y -= 0.1;
		
			this.obstacles = [cube1, cube2];
			camera.position.z = 5;
			camera.position.y += MathLib.toRadians(100);
			
			
			

			var render = function () {
				requestAnimationFrame( render );

				renderer.render(scene, camera);
			};
			
			render();
									

					
	}
	
	animate() {
		var renderer = this.renderer;
		var scene = this.scene;
		var camera = this.camera;
		var render = function () {
		requestAnimationFrame( render );
		renderer.render(scene, camera);
		}
	}
	
	zoomout(){
			this.camera.fov *= 1.1;
            this.camera.updateProjectionMatrix();
			this.renderer.render(this.scene, this.camera);
	}
	
	zoomin(){
			this.camera.fov /= 1.1;
            this.camera.updateProjectionMatrix();
			this.renderer.render(this.scene, this.camera);
	}
	
	doStepForward() {
		console.log("going forward");
		/*
		var currentRenderer = this.renderer;
		var currentScene = this.scene;
		var currentcamera = this.camera;
		var LeftLeg = this.LeftLeg;
		var parrot = this.parrot;
		var renderer = this.renderer;
		var scene = this.scene;
		var camera = this.camera;
		
		var counter = 0;

        parrot.position.x += 0.1;

        if ((parrot.position.y  - this.ParrotInitialY) == 0){
	      parrot.position.y += 0.1;
        }
        else {
	      parrot.position.y -= 0.1;
        }
        this.renderer.render(this.scene, this.camera);
*/		
	}
	
	collisiton(){
		for (var obstacle of this.obstacles){
		  var ObstacleXMin = obstacle.position.x - 1/4;
		  var ObstacleXMax = obstacle.position.x + 1/4;
		  var ObstacleYMin = obstacle.position.y - 1.5/2;
		  var ObstacleYMax = obstacle.position.y + 1.5/2;
		  var ObstacleZMin = obstacle.position.z - 3/4;
		  var ObstacleZMax = obstacle.position.z + 3/4;
		  
		  console.log("ObstacleXMin: " + ObstacleXMin);
		  console.log("ObstacleXMax: " + ObstacleXMax);
		  console.log("ObstacleYMin: " + ObstacleYMin);
		  console.log("ObstacleYMax: " + ObstacleYMax);
		  console.log("ObstacleZMin: " + ObstacleZMin);
		  console.log("ObstacleZMax: " + ObstacleZMax);
		  var ParrotX = this.parrot.position.x + 0.2;
		  var ParrotY = this.parrot.position.y;
		  var ParrotZ = this.parrot.position.z;
		  
		  console.log("x: " + ParrotX);
		  console.log("y: " + ParrotY);
		  console.log("z: " + ParrotZ);
		
		
		  if (ParrotX >= ObstacleXMin && ParrotX <= ObstacleXMax
		  && ParrotY >= ObstacleYMin && ParrotY <= ObstacleYMax
		  && ParrotZ >= ObstacleZMin && ParrotZ <= ObstacleZMax
		  )
		  {
			  return true;
		  }
		  
		  
		
		}
		return false;
	}
	
	fall(){
		this.parrot.rotation.z = MathLib.toRadians(85);
		this.parrot.position.y = 0;
	}
	
	jump(count = 1) {
		if (this.ok === false)
		{
			return;
		}
		
		if (this.collisiton()){
			this.fall();
			this.ok = false;
			alert("There was a collision! Damage!");
			return;
		}
		
		if (this.jumpCount > count){
			this.isJumpingFinished = true;
			//console.log("stop jumping");
			return;
		}
		else{
			this.isJumpingFinished = false;
		}
		
		//jump in some direction
		var distance = 0.1;
		var corner = this.rotationLeft;//degrees
		
		//var result = MathLib.getCoordinatesByHypotenuse(corner, distance, this.rotationByX);
		var result = MathLib.getGeneralCoordinatesByHypotenuse(this.rotationByX, distance);
		var x = result.x;
		var z = result.z;
		
		var counter = 0;

        this.parrot.position.x += x;
		this.parrot.position.z += z;

        if ((this.parrot.position.y  - this.ParrotInitialY) == 0){
	      this.parrot.position.y += 0.1;
        }
        else {
	      this.parrot.position.y -= 0.1;
		  this.jumpCount++;
        }
		
        this.renderer.render(this.scene, this.camera);	
	}
	
	
	
	//rotate body and change direction
	turnLeft(degree = 10){
		if (this.ok === false)
		{
			return;
		}
		//refactor
		this.rotationLeft = degree;
		if (this.isJumpingFinished){
		    console.log("turning right");
		    this.rotationByX -= degree;
		    this.parrot.rotation.y += MathLib.toRadians(degree);
		    this.renderer.render(this.scene, this.camera);
			//restore jumping;
			this.jumpCount = 0;
			this.isJumpingFinished = false;
			if (this.rotationByX <= -360){
			  	this.rotationByX = 0;
		    }
	    }
		
		if (this.isflyForwardFinished){
		    console.log("turning right");
		    this.rotationByX -= degree;
		    this.parrot.rotation.y += MathLib.toRadians(degree);
		    this.renderer.render(this.scene, this.camera);
			//restore flying;
			this.flyForwardCount = 0;
			this.isflyForwardFinished = false;
			if (this.rotationByX <= -360){
			  	this.rotationByX = 0;
		    }
	    }
		

		
	}
	
	//turn by degrees
	turnRight(degree = 10){
		if (this.ok === false)
		{
			return;
		}
		//refactor
		this.rotationLeft = degree;
		if (this.isJumpingFinished){
		    console.log("turning left");
		    this.rotationByX += degree;
		    this.parrot.rotation.y -= MathLib.toRadians(degree);
		    this.renderer.render(this.scene, this.camera);
			//restore jumping;
			this.jumpCount = 0;
			this.isJumpingFinished = false;
			if (this.rotationByX >= 360){
			  	this.rotationByX = 0;
		    }
	    }
		
		if (this.isflyForwardFinished){
		    console.log("turning right");
		    this.rotationByX -= degree;
		    this.parrot.rotation.y += MathLib.toRadians(degree);
		    this.renderer.render(this.scene, this.camera);
			//restore flying;
			this.flyForwardCount = 0;
			this.isflyForwardFinished = false;
			if (this.rotationByX <= -360){
			  	this.rotationByX = 0;
		    }
	    }
	}
	
	takeoff(){
		console.log("taking off");
	    this.parrot.rotation.z = MathLib.toRadians(-90);
		this.parrot.position.y = 2;
		this.renderer.render(this.scene, this.camera);	
	}
	
	addWings(){
           this.parrot.remove(this.parrot.children[13]);
		   this.parrot.remove(this.parrot.children[14]);		
           var WingGeometry = new THREE.PlaneGeometry( 3, 1, 1, 1 );
           var WingMaterial = new THREE.MeshBasicMaterial( { color: 0xE14915 } );
           var wing1 = new THREE.Mesh( WingGeometry, WingMaterial );
		   wing1.rotation.y = MathLib.toRadians(-90);
		   wing1.position.y += 2;
		   wing1.position.z += 1.7;
		   this.parrot.add(wing1);
		   
		   var WingGeometry2 = new THREE.PlaneGeometry( 3, 1, 1, 1 );
		   var WingMaterial2 = new THREE.MeshBasicMaterial( { color: 0xE14915 } );
		   var wing2 = new THREE.Mesh( WingGeometry2, WingMaterial2 );
		   wing2.rotation.y = MathLib.toRadians(-90);
		   wing2.position.y += 2;
		   wing2.position.z -= 1.7;
		   this.parrot.add(wing2);
		   
		   this.wing1 = wing1;
		   this.wing2 = wing2;
		   this.renderer.render(this.scene, this.camera);	
		   
	}
	
	moveWings(num){
		console.log("moving wings");
		
		//beginning of moving wings
		if (num == 0){
			this.parrot.rotation.z = MathLib.toRadians(-90);
		    this.parrot.position.y = 2;
			console.log("lifting wings");
			this.addWings();
			
			//console.log(this.parrot.children[13]);
		}
		else{
		  if (num % 2 == 0){
			this.wing1.rotation.y = MathLib.toRadians(-90);
			this.wing1.position.x -= 0.4;
			
			this.wing2.rotation.y = MathLib.toRadians(-90);
			this.wing2.position.x -= 0.4;
		  }
		  else{
            this.wing1.rotation.y = MathLib.toRadians(-70);
			this.wing1.position.x += 0.4;
			
			this.wing2.rotation.y = MathLib.toRadians(-110);
			this.wing2.position.x += 0.4;
		  }
		}

	}
	
    //land on the earth
	land(){
		this.parrot.position.y = 0;
		this.parrot.rotation.z = MathLib.toRadians(0);
		//removing wings
		this.parrot.remove(this.parrot.children[13]);
		this.parrot.remove(this.parrot.children[14]);
		this.renderer.render(this.scene, this.camera);
	}
	
	flyForward(count = 10){
	if (this.ok === false)
		{
			return;
		}
		
		if (this.collisiton()){
			this.fall();
			this.ok = false;
			alert("There was a collision! Damage!");
			return;
		}
		
		//parrot is on earch and must take off
		if (this.flyForwardCount == 0){
			this.takeoff();
		}
		
		//moving wings
		this.moveWings(this.flyForwardCount);
		
		if (this.flyForwardCount > count){
			this.isflyForwardFinished = true;
			this.land();	
			//console.log("stop jumping");
			return;
		}
		
		if (this.flyForwardCount > 0 && this.flyForwardCount < count){
			this.isflyForwardFinished = false;
		}
		
		this.flyForwardCount++;
		
		//fly in some direction
		var distance = 0.1;
		var corner = this.rotationLeft;//degrees
		
		var result = MathLib.getGeneralCoordinatesByHypotenuse(this.rotationByX, distance);
		var x = result.x;
		var z = result.z;
		
		var counter = 0;

        this.parrot.position.x += x;
		this.parrot.position.z += z;		
		
        this.renderer.render(this.scene, this.camera);	
	}
	
	flyLeft(){
		this.parrot.position.z -= 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	flyRight(){
		this.parrot.position.z += 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	
	//return distance in cm
	getdistance2obstacle(){
		
		return 100;
	}
	
	//rotate camera
	rotateLeft(){
		this.parrot.rotation.y -= (Math.PI / 180)*10;
		this.renderer.render(this.scene, this.camera);
	}
	
	rotateRight(){
		this.parrot.rotation.y += (Math.PI / 180)*10;
		this.renderer.render(this.scene, this.camera);
	}
	
	rotateFloor(){
		this.floor.rotation.x -= MathLib.toRadians(10);
		this.renderer.render(this.scene, this.camera);
	}
	
    rotateCameraUp(){
		this.camera.position.y += MathLib.toRadians(5);
		this.renderer.render(this.scene, this.camera);
	}
	
	rotateCameraDown(){
		this.camera.position.y -= MathLib.toRadians(5);
		this.renderer.render(this.scene, this.camera);
	}
		
}