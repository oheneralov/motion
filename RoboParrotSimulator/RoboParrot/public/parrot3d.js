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
			
			/* Floor  */    
           var FloorGeometry = new THREE.PlaneGeometry( 15, 7, 1, 1 );
           var FloorMaterial = new THREE.MeshBasicMaterial( { color: 0xA3B3E3 } );
           var floor = new THREE.Mesh( FloorGeometry, FloorMaterial );
		   //rotate floor by 80 degrees
		   floor.rotation.x -= (Math.PI / 180)*80 ;
		   scene.add(floor);
		   
		    var ClawGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 0.3, 32 );
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
			
			/*
						
			var faceradius = 0.2/4;
			var bodyradius = 0.2/4;
			//scene.add( face );
			
			var Eyegeometry = new THREE.SphereGeometry( faceradius/3, 32, 32 );//sphere size
			var Eyematerial = new THREE.MeshBasicMaterial( { color: 0x000000 } ); //red color
			var Eye = new THREE.Mesh( Eyegeometry, Eyematerial );
			//scene.add( Eye );
			
			var BeakGeometry = new THREE.CylinderGeometry( 0.07/4, 0.02, 0.5, 32 );//beak sizes
			var BeakMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } ); //red color
			var Beak = new THREE.Mesh( BeakGeometry, BeakMaterial );
			//scene.add( Beak );
						
			body.scale.y = 3;

					
			var figureoffset = 0.5;
			face.position.y = body.scale.y*faceradius + bodyradius - figureoffset;
			Beak.position.y = face.position.y;
			Beak.rotation.z += 1.3;
			Beak.position.x += 0.3;
			Eye.position.x = face.position.x;
			Eye.position.y = face.position.y;
			Eye.position.z += 0.2;
			
			
			body.position.y -= figureoffset; 
			
			*/
			//0.5 is cylinder height, the positon of the left leg = body.position.y  - cylinder height - offset
			/*
			LeftLeg.position.y = body.position.y - 0.5 - figureoffset;
			RightLeg.position.y = LeftLeg.position.y;
			LeftLeg.position.x += 0.1;
			RightLeg.position.x -= 0.15;
			
			this.LeftLeg = LeftLeg;
			*/
			
			var rotationDegree = (Math.PI / 180)*80;
			leftClaw1.rotation.x = rotationDegree;
			leftClaw1.position.x -= 0.2;
			leftClaw1.rotation.z += 0.5;
			
			
			leftClaw2.rotation.x = rotationDegree;
			leftClaw2.position.x = leftClaw1.position.x + 0.1;
			leftClaw2.rotation.z = leftClaw1.rotation.z + 0.5;
			
			
			rightClaw1.rotation.x = rotationDegree;
			rightClaw1.position.x += 0.1;
			rightClaw1.rotation.z += 0.5;
			
			
			rightClaw2.rotation.x = rotationDegree;
			rightClaw2.position.x = rightClaw1.position.x + 0.1;
			rightClaw2.rotation.z = rightClaw1.rotation.z + 0.5;
			
			LeftLeg1.rotation.z = -(Math.PI / 180)*40;
			LeftLeg1.position.y += 0.4;
			LeftLeg1.position.x = leftClaw1.position.x +0.2;
			
			RightLeg1.rotation.z = -(Math.PI / 180)*40;
			RightLeg1.position.y += 0.4;
			RightLeg1.position.x = rightClaw1.position.x +0.2;
			
			LeftLeg2.rotation.z = (Math.PI / 180)*40;
			LeftLeg2.position.y += 1.15;
			LeftLeg2.position.x = LeftLeg1.position.x;
			
			RightLeg2.rotation.z = (Math.PI / 180)*40;
			RightLeg2.position.y += 1.15;
			RightLeg2.position.x = RightLeg1.position.x;
			
			var geometrybody = new THREE.SphereGeometry( 0.3, 32, 32 );//sphere size
			var materialbody = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
			var body = new THREE.Mesh( geometrybody, materialbody );
			body.scale.y *= 2;
			body.position.y  = RightLeg2.position.y + 0.95;
			body.position.x -= 0.17;
			
			var FaceGeometry = new THREE.SphereGeometry( 0.3, 32, 32 );//sphere size
			var FaceMaterial = new THREE.MeshBasicMaterial( { color: 0x4d79ff} ); //red color
			var face = new THREE.Mesh( FaceGeometry, FaceMaterial );
			face.position.y = body.position.y + 0.9;
			
				
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
			group.position.x = -5;
			group.position.y += 0.1;
			group.rotation.x += (Math.PI / 180)*10 ;
			scene.add(group);
			
			
			group.scale.y /= 3;
			group.scale.x /= 3;
			group.scale.z /= 3;
			
			this.parrot = group;
			
		  	   
		   
		    var texture = new THREE.TextureLoader().load( 'images/crate.gif' );

			var BoxGeometry = new THREE.BoxBufferGeometry( 1, 1.5, 3 );
			var BoxMaterial = new THREE.MeshBasicMaterial( { map: texture } );
           
			var cube1 = new THREE.Mesh( BoxGeometry, BoxMaterial );
			cube1.position.x += 1;
			scene.add( cube1 );
			
			var cube2 = new THREE.Mesh( BoxGeometry, BoxMaterial );
			cube2.position.x -= 2;
			scene.add( cube2);
			
			

			camera.position.z = 5;
			//camera.rotation.x += (Math.PI / 180)*60;

			var render = function () {
				requestAnimationFrame( render );

				renderer.render(scene, camera);
			};
			

			render();
			
			
			
			//renderer.render(scene, camera);
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

        console.log("position current: " + parrot.position.y + "initial pos: " + this.ParrotInitialY)
        if ((parrot.position.y  - this.ParrotInitialY) == 0){
	      parrot.position.y += 0.1;
        }
        else {
	      parrot.position.y -= 0.1;
        }
        this.renderer.render(this.scene, this.camera);	
	}
	
	jump(count = 1) {
		if (this.jumpCount > count){
			this.isJumpingFinished = true;
			console.log("stop jumping");
			return;
		}
		else{
			this.isJumpingFinished = false;
		}
		
		//jump in some direction
		var distance = 0.1;
		var corner = this.rotationByX;//degrees
		var x = distance*Math.cos(this.toRadians(corner));
		var z = -1*distance*Math.sin(this.toRadians(corner));
		console.log("jumping");
		var currentRenderer = this.renderer;
		var currentScene = this.scene;
		var currentcamera = this.camera;
		var LeftLeg = this.LeftLeg;
		var parrot = this.parrot;
		var renderer = this.renderer;
		var scene = this.scene;
		var camera = this.camera;
		
		var counter = 0;

        parrot.position.x += x;
		parrot.position.z += z;

        console.log("position current: " + parrot.position.y + "initial pos: " + this.ParrotInitialY)
        if ((parrot.position.y  - this.ParrotInitialY) == 0){
	      parrot.position.y += 0.1;
        }
        else {
	      parrot.position.y -= 0.1;
		  this.jumpCount++;
        }
		
        this.renderer.render(this.scene, this.camera);	
	}
	
	
	
	//rotate body and change direction
	turnRight(){
		if (this.isJumpimgFinished()){
		  console.log("turning right");
		  this.parrot.position.z += 0.02;
		  this.renderer.render(this.scene, this.camera);
		}
	}
	
	
	//turn by degrees
	turnLeft(degree = 10){
		console.log(" this.isJumpingFinished " + this.isJumpingFinished);
		if (this.isJumpingFinished){
		    console.log("turning left");
		    this.rotationByX = degree;
		    this.parrot.rotation.y -= MathLib.toRadians(degree);
		    this.renderer.render(this.scene, this.camera);
			//restore jumping;
			this.jumpCount = 0;
			this.isJumpingFinished = false;
		}
	}
	
	takeoff(){
		console.log("taking off");
	    console.log("rotation:" + this.parrot.rotation.z);
		while (this.parrot.rotation.z > -1.5){	
		    this.parrot.rotation.z -= 0.05;
		    this.parrot.position.y += 0.02;
		}
		this.renderer.render(this.scene, this.camera);
	}
	
	//land must be done when parrot is close to the earth
	land(){
		while (this.parrot.rotation.z < 0){	
		    this.parrot.rotation.z += 0.05;
		    this.parrot.position.y -= 0.02;
		}
		this.renderer.render(this.scene, this.camera);
	}
	
	flyForward(){
		this.parrot.position.x += 0.02;
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
		this.camera.rotation.x += 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	rotateRight(){
		this.camera.rotation.x -= 0.02;
		this.renderer.render(this.scene, this.camera);
	}

			
}