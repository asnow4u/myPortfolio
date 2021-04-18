import React from 'react';
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CubeView = (props) => {

  const [buttonImg, setButtonImg] = React.useState(process.env.PUBLIC_URL + '/img/navBar/view2D.png')
  const mount = React.useRef(null);

  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 6;
    const renderer = new THREE.WebGLRenderer( {alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );


    //TEMP
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableZoom = false;

    mount.current.appendChild(renderer.domElement);

    const imageLoader = new THREE.TextureLoader();
    const textLoader = new THREE.FontLoader();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    //Cube
    let geometry = new THREE.BoxGeometry( 4, 4, 4 );
    let material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    let cubeRotate = false;


    //ButtonAnimation
    let leftTriangleTween;
    let rightTriangleTween;
    let topTriangleTween;
    let bottomTriangleTween;

    const buttonInit = () => {

      //Rotate Indicators
      let distance = 4;
      let triangleHeight = 0.5;
      let triangleWidth = 1;
      geometry = new THREE.ConeGeometry( triangleWidth, triangleHeight, 2);
      material = new THREE.MeshBasicMaterial( {color: 0x0b4480} );

      //Left
      const leftTriangleMesh = new THREE.Mesh(geometry, material);
      leftTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
      leftTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
      leftTriangleMesh.position.add(new THREE.Vector3(-distance, 0, 0));
      leftTriangleMesh.name = "leftTriangle";

      let startPos = new THREE.Vector3().copy(leftTriangleMesh.position);
      let endPos = new THREE.Vector3().copy(leftTriangleMesh.position);
      endPos.add(new THREE.Vector3(-0.07, 0, 0));

      leftTriangleTween = new TWEEN.Tween(startPos)
        .to(endPos, 400)
        .delay(400)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function() {
          leftTriangleMesh.position.x = startPos.x;
        })
        .onComplete(() => {
          endPos.add(new THREE.Vector3(0.07, 0, 0));
        });

      let leftTriangleReturnTween = new TWEEN.Tween(startPos)
        .to(endPos, 400)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function() {
          leftTriangleMesh.position.x = startPos.x;
        })
        .onComplete(() => {
          endPos.add(new THREE.Vector3(-0.07, 0, 0));
        })

      leftTriangleTween.chain(leftTriangleReturnTween);


      //Right
      const rightTriangleMesh = new THREE.Mesh(geometry, material);
      rightTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
      rightTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
      rightTriangleMesh.position.add(new THREE.Vector3(distance, 0, 0));
      rightTriangleMesh.name = "rightTriangle";

      //Top
      const topTriangleMesh = new THREE.Mesh(geometry, material);
      topTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
      // topTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
      topTriangleMesh.position.add(new THREE.Vector3(0, distance, 0));
      topTriangleMesh.name = "topTriangle";

      //Bottom
      const bottomTriangleMesh = new THREE.Mesh(geometry, material);
      bottomTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
      bottomTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI);
      bottomTriangleMesh.position.add(new THREE.Vector3(0, -distance, 0));
      bottomTriangleMesh.name = "bottomTriangle";

      scene.add(leftTriangleMesh);
      scene.add(rightTriangleMesh);
      scene.add(topTriangleMesh);
      scene.add(bottomTriangleMesh);
    }

    const projectInit = () => {
      const group = new THREE.Group();
      group.position.z += 2.01;

      geometry = new THREE.CircleGeometry( 0.2, 10);
      material = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project/github.png')});
      let projectGitButton = new THREE.Mesh( geometry, material);
      projectGitButton.position.add(new THREE.Vector3(1.5, 1.5, 0));
      group.add(projectGitButton);

      material = new THREE.MeshBasicMaterial({color: 0x000000});
      // material = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project/demo.png')});
      let projectDemoButton = new THREE.Mesh( geometry, material);
      projectDemoButton.position.add(new THREE.Vector3(1.5, 1, 0));
      group.add(projectDemoButton);

      //text


      // textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function ( font ) {
      //
      //     material = new THREE.LineBasicMaterial({
      //       color: 0x000000,
      //       side: THREE.DoubleSide
      //     });
      //
      //     const message = "A web application using WebXR to help visualize the solar system. Utilizes Three.js to produce the 3D environment and simulate the physics of the solar system in your own space. Developed as a collab with Intel as a means of educating children about the sun and planets.";
      //     const shapes = font.generateShapes( message, 0.1);
      //
      //     geometry = new THREE.ShapeGeometry( shapes);
      //
      //     //Center text
      //     geometry.computeBoundingBox();
      //     const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
			// 		geometry.translate( xMid, 0, 0 );
      //
      //     const text = new THREE.Mesh( geometry, material);
      //
      //     group.add(text);
      //   }
      // );

      //image
      geometry = new THREE.PlaneGeometry(2.09, 1);
      material = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png')});
      let projectImage = new THREE.Mesh( geometry, material);
      projectImage.position.add(new THREE.Vector3(-0.5, 1, 0));
      group.add(projectImage);

      cube.add(group);
    }

    // const infoInit = () => {
    //
    // }
    //
    // const contactInit = () => {
    //
    // }


    const animate = () => {
      requestAnimationFrame( animate);

      TWEEN.update();

      raycaster.setFromCamera( mouse, camera);
      const intersects = raycaster.intersectObjects( scene.children);

      if (intersects.length > 0) {

        if (intersects[0].object.name === "leftTriangle") {
          leftTriangleTween.start();
        }
        // console.log(intersects[0].object.name);
      }

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera);
    }

    const clickEvent = () => {

      const intersects = raycaster.intersectObjects( scene.children);

      if (intersects.length > 0) {

        if (intersects[0].object.name === "leftTriangle") {
          if (!cubeRotate) {

            cubeRotate = true;

            new TWEEN.Tween(cube.rotation)
              .to({ y: "-" + Math.PI/2}, 1000)
              .delay(200)
              .onComplete(() => {
                if (Math.abs(cube.rotation.y) >= 2*Math.PI) {
                  cube.rotation.y = cube.rotation.y % (2*Math.PI);
                }

                cubeRotate = false;
              })
              .start();
          }
        }
      }

    }

    const mouseUpdate = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    const handleResize = () => {
      renderer.setSize( window.innerWidth, window.innerHeight );
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.render( scene, camera);
    }

    window.addEventListener('mousedown', clickEvent, false);
    window.addEventListener('mousemove', mouseUpdate, false);
    window.addEventListener('resize', handleResize);

    buttonInit();
    projectInit();
    animate();

  }, [])

  return (
    <div className="viewContainer">
      <div className="view" ref={mount} />
      <div className= "visualChangeWrapper">
        <button className="button" id="backButton"

          onMouseOver={() => {
            document.getElementById("backButton").style.backgroundColor = "black";
            document.getElementById("backButtonDesc").style.display = "block";
            setButtonImg(process.env.PUBLIC_URL + '/img/navBar/view2D_hover.png');
          }}

          onMouseOut={() => {
            document.getElementById("backButton").style.backgroundColor = "rgb(204, 197, 0)";
            document.getElementById("backButtonDesc").style.display = "none";
            setButtonImg(process.env.PUBLIC_URL + '/img/navBar/view2D.png');
          }}

          onClick={() => {
            props.changeVisual(false);
            //TODO: clean up scene

          }}>

          <img className="linkImage" src={buttonImg} alt=""/>

        </button>

        <h5 className="tabDesc" id="backButtonDesc">Change to 2D</h5>
      </div>
    </div>
  );
}

export default CubeView;
