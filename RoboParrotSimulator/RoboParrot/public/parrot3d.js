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
			var material = new THREE.MeshBasicMaterial( { color: 0x24D69D } ); //red color
			var face = new THREE.Mesh( geometry, material );
			scene.add( face );
			
			
			var geometrybody = new THREE.SphereGeometry( bodyradius, 32, 32 );//sphere size
			var materialbody = new THREE.MeshBasicMaterial( { color: 0x24D69D } ); 
			var body = new THREE.Mesh( geometrybody, materialbody );
			body.scale.y = 3;
			scene.add( body );
			
			
			var materialLeg = new THREE.MeshBasicMaterial( { color: 0xC624D6 } );
			var LegGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 1, 32 );
			var LeftLeg = new THREE.Mesh( LegGeometry, materialLeg );
			var RightLeg = new THREE.Mesh( LegGeometry, materialLeg );
			
			scene.add( LeftLeg );
			scene.add( RightLeg );
			
			
			
			var figureoffset = 0.5;
			face.position.y = body.scale.y*faceradius + bodyradius - figureoffset;
			
			body.position.y -= figureoffset; 
			//0.5 is cylinder height, the positon of the left leg = body.position.y  - cylinder height - offset
			
			LeftLeg.position.y = body.position.y - 0.5 - figureoffset;
			RightLeg.position.y = LeftLeg.position.y;
			LeftLeg.position.x += 0.1;
			RightLeg.position.x -= 0.1;
			
			
			var group = new THREE.Group();
			group.add( face );
			group.add( body );
			group.add( LeftLeg );
			group.add( RightLeg );
			scene.add(group);
			
			this.parrot = group;
			
			

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
		this.parrot.position.z += 0.02;
		this.renderer.render(this.scene, this.camera);
	}
	
	flyRight(){
		this.parrot.position.z -= 0.02;
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