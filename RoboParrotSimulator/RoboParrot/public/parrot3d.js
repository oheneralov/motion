/**
 * @author Oleksandr Generalov http://robotbird.com.ua/
 */
class Parrot3d{
	constructor(place = "body", height = 600, width = 1000) {
		console.log("creating Parrot in 3d");
		var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( width, height );
			document.getElementById(place).appendChild( renderer.domElement );
						
			var faceradius = 0.2;
			var bodyradius = 0.2;

			var geometry = new THREE.SphereGeometry( faceradius, 32, 32 );//sphere size
			var material = new THREE.MeshBasicMaterial( { color: 0x4d79ff} ); //red color
			var face = new THREE.Mesh( geometry, material );
			scene.add( face );
			
			var Eyegeometry = new THREE.SphereGeometry( faceradius/3, 32, 32 );//sphere size
			var Eyematerial = new THREE.MeshBasicMaterial( { color: 0x000000 } ); //red color
			var Eye = new THREE.Mesh( Eyegeometry, Eyematerial );
			scene.add( Eye );
			
			var BeakGeometry = new THREE.CylinderGeometry( 0.07, 0.02, 0.5, 32 );//beak sizes
			var BeakMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } ); //red color
			var Beak = new THREE.Mesh( BeakGeometry, BeakMaterial );
			scene.add( Beak );
						
			var geometrybody = new THREE.SphereGeometry( bodyradius, 32, 32 );//sphere size
			var materialbody = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
			var body = new THREE.Mesh( geometrybody, materialbody );
			body.scale.y = 3;
			scene.add( body );
					
			var LegGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 1, 32 );
			var materialLeg = new THREE.MeshBasicMaterial( { color: 0x000000 } );
			var LeftLeg = new THREE.Mesh( LegGeometry, materialLeg );
			var RightLeg = new THREE.Mesh( LegGeometry, materialLeg );
			
			scene.add( LeftLeg );
			scene.add( RightLeg );
			
			var ClawGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 0.5, 32 );
			var ClawMaterisl = new THREE.MeshBasicMaterial( { color: 0x000000 } );
			var leftClaw = new THREE.Mesh( ClawGeometry, ClawMaterisl );
			scene.add( leftClaw );
			
			
			
			var figureoffset = 0.5;
			face.position.y = body.scale.y*faceradius + bodyradius - figureoffset;
			Beak.position.y = face.position.y;
			Beak.rotation.z += 1.3;
			Beak.position.x += 0.3;
			Eye.position.x = face.position.x;
			Eye.position.y = face.position.y;
			Eye.position.z += 0.2;
			
			
			body.position.y -= figureoffset; 
			//0.5 is cylinder height, the positon of the left leg = body.position.y  - cylinder height - offset
			
			LeftLeg.position.y = body.position.y - 0.5 - figureoffset;
			RightLeg.position.y = LeftLeg.position.y;
			LeftLeg.position.x += 0.1;
			RightLeg.position.x -= 0.1;
			leftClaw.rotation.z += 1;
			leftClaw.position.y = LeftLeg.position.y - 0.54;
			leftClaw.position.x = LeftLeg.position.x + 0.1;
			
			
			
			var group = new THREE.Group();
			group.add( face );
			group.add( body );
			group.add( LeftLeg );
			group.add( RightLeg );
			group.add(Beak);
			group.add(Eye);
			scene.add(group);
			
			this.parrot = group;
			
			
			/* Floor  */    
           var FloorGeometry = new THREE.PlaneGeometry( 10, 10, 1, 1 );
           var FloorMaterial = new THREE.MeshBasicMaterial( { color: 0xA3B3E3 } );
           var floor = new THREE.Mesh( FloorGeometry, FloorMaterial );
		   floor.rotation.x = -1;
		   floor.position.y += -2;
		   floor.position.z = group.position.z;
		   //floor.material.side = THREE.DoubleSide;
		   scene.add(floor);
			
			

			camera.position.z = 5;
/*
			var render = function () {
				requestAnimationFrame( render );

				renderer.render(scene, camera);
			};
			

			render();
			*/
			
			renderer.render(scene, camera);
			this.renderer = renderer;
			this.scene = scene;
			this.camera = camera;
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
		this.parrot.position.x += 0.02;
		this.renderer.render(this.scene, this.camera);
		
	}
	
	turnLeft(){
		console.log("turning left");
		this.parrot.position.z += 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	turnRight(){
		console.log("turning right");
		this.parrot.position.z -= 0.02;
		this.renderer.render(this.scene, this.camera);
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
		this.camera.rotation.y += 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	rotateRight(){
		this.camera.rotation.y -= 0.02;
		this.renderer.render(this.scene, this.camera);
	}

			
}