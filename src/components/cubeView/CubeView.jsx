import React from 'react';
import * as THREE from "three";

const CubeView = () => {

  const mount = React.useRef(null);

  React.useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(width, height);
    renderer.setSize( window.innerWidth, window.innerHeight );

    mount.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry( 3.5, 3.5, 3.5 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame( animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera);
    }

    const handleResize = () => {
      renderer.setSize( window.innerWidth, window.innerHeight );
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.render( scene, camera);
    }

    window.addEventListener('resize', handleResize);

    animate();

  }, [])

  return (
    <div className="view" ref={mount} />
  );
}

export default CubeView;
