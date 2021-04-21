import React from 'react';
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import {arrowEvent, arrowHover, initFaces, loadAboutPages, loadProjectPages, loadContactPages, updateFaces} from "./SceneFunctions";

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

    mount.current.appendChild(renderer.domElement);

    //TEMP
   // const controls = new OrbitControls(camera, renderer.domElement);
   // controls.enableZoom = false;

    const imageLoader = new THREE.TextureLoader();
    const textLoader = new THREE.FontLoader();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    //Cube
    let geometry = new THREE.BoxGeometry( 4, 4, 4 );
    let material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    const cube = new THREE.Mesh( geometry, material );
    cube.canRotate = true;
    scene.add( cube );

    let currentPage = "projects"; //Todo: will start on about page

    let aboutCounter = 0;
    const aboutPages = [];
    loadAboutPages(aboutPages);

    let projectCounter = 0;
    const projectPages = []; //TODO read from json to determine how many projects are needed
    loadProjectPages(projectPages);

    let contactCounter = 0;
    const contactPages = [];
    loadContactPages(contactPages);

    //Cube Faces
    const cubeFaces = [6];
    initFaces(cubeFaces, cube, aboutPages, projectPages[0], contactPages[0]); 

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
    leftTriangleMesh.hoverAnimation = false;
    scene.add(leftTriangleMesh);

    //Right
    const rightTriangleMesh = new THREE.Mesh(geometry, material);
    rightTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
    rightTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
    rightTriangleMesh.position.add(new THREE.Vector3(distance, 0, 0));
    rightTriangleMesh.name = "rightTriangle";
    rightTriangleMesh.hoverAnimation = false;
    scene.add(rightTriangleMesh);

    //Top
    const topTriangleMesh = new THREE.Mesh(geometry, material);
    topTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
    topTriangleMesh.position.add(new THREE.Vector3(0, distance, 0));
    topTriangleMesh.name = "topTriangle";
    topTriangleMesh.hoverAnimation = false;
    scene.add(topTriangleMesh);

    //Bottom
    const bottomTriangleMesh = new THREE.Mesh(geometry, material);
    bottomTriangleMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
    bottomTriangleMesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI);
    bottomTriangleMesh.position.add(new THREE.Vector3(0, -distance, 0));
    bottomTriangleMesh.name = "bottomTriangle";
    bottomTriangleMesh.hoverAnimation = false;
    scene.add(bottomTriangleMesh);


    const animate = () => {
      requestAnimationFrame( animate);

      TWEEN.update();

      raycaster.setFromCamera( mouse, camera);
      const intersects = raycaster.intersectObjects( scene.children);

      if (intersects.length > 0) {

        if (!intersects[0].object.hoverAnimation) {
          arrowHover(intersects[0]);
        }
      }

      renderer.render( scene, camera);
    }


    window.addEventListener('mousedown', () => {

        const intersects = raycaster.intersectObjects( scene.children);

        if (intersects.length > 0) {

          if (intersects[0].object.name === "leftTriangle" || intersects[0].object.name === "rightTriangle" || intersects[0].object.name === "topTriangle" || intersects[0].object.name === "bottomTriangle") {

            if (cube.canRotate) {
              arrowEvent(cube, intersects[0]);
            }
          }
        }

      }, false);

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
      }, false);

    window.addEventListener('resize', () => {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.render( scene, camera);
      });

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
