//<script src="js/three.min.js"></script>
var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
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
			

			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render );

				//body.position.x += 0.1;
				//cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();