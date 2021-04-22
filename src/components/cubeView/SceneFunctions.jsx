import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

export const initFaces = (faces, cube, aboutPageArray, topPage, bottomPage) => {

  faces[0] = new THREE.Group();
  faces[0].cubePosition = "front";
  faces[0].position.z += 2.01;
  faces[0].add(aboutPageArray[0]);
  cube.add(faces[0]);

  faces[1] = new THREE.Group();
  faces[1].cubePosition = "top";
  faces[1].position.y += 2.01;
  faces[1].rotateOnAxis(new THREE.Vector3(-1, 0, 0), Math.PI/2);
  faces[1].add(topPage);
  cube.add(faces[1]);

  faces[2] = new THREE.Group();
  faces[2].cubePosition = "left";
  faces[2].position.x -= 2.01;
  faces[2].rotateOnAxis(new THREE.Vector3(0, -1, 0), Math.PI/2);
  faces[2].add(aboutPageArray[aboutPageArray.length -1]);
  cube.add(faces[2]);

  faces[3] = new THREE.Group();
  faces[3].cubePosition = "bottom";
  faces[3].position.y -= 2.01;
  faces[3].rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI/2);
  faces[3].add(bottomPage);
  cube.add(faces[3]);

  faces[4] = new THREE.Group();
  faces[4].cubePosition = "right";
  faces[4].position.x += 2.01;
  faces[4].rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
  faces[4].add(aboutPageArray[1]);
  cube.add(faces[4]);

  faces[5] = new THREE.Group();
  faces[5].cubePosition = "back";
  faces[5].position.z -= 2.01;
  faces[5].rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
  cube.add(faces[5]);
}


export const loadAboutPages = (pageArray) => {

  const textLoader = new THREE.FontLoader();

  for (let i=0; i<3; i++) { //TODO: get length from json

    pageArray[i] = new THREE.Group();

    textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', ( font ) => {

      let material = new THREE.LineBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
      });

      const shape = font.generateShapes( "About Page" + i, 0.4);
      const geo = new THREE.ShapeGeometry(shape);

      geo.computeBoundingBox();
      let offset = - 0.5 * ( geo.boundingBox.max.x - geo.boundingBox.min.x );
      geo.translate( offset, 0, 0 );

      const mesh = new THREE.Mesh( geo, material);
      mesh.position.y += 1.25;
      // mesh.position.z += 0.01;

      pageArray[i].add(mesh);
    });
  }
}

export const loadProjectPages = (projects) => {

  const textLoader = new THREE.FontLoader();
  const imageLoader = new THREE.TextureLoader();

  for (let i=0; i<6; i++) { //TODO: get length from json

    projects[i] = new THREE.Group();

    //text
    textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', ( font ) => {

      //Font materials
      let frontFontMaterial = new THREE.LineBasicMaterial({
        color: 0xCCC500,
        side: THREE.DoubleSide
      });

      let backFontMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
      })

      //Geometry
      const frontShapes = font.generateShapes( "SolarAR", 0.5);
      const backShapes = font.generateShapes( "SolarAR", 0.5);

      let frontGeometry = new THREE.ShapeGeometry( frontShapes);
      let backGeometry = new THREE.ShapeGeometry( backShapes);

      //Fix Offset
      frontGeometry.computeBoundingBox();
      backGeometry.computeBoundingBox();

      let offset = - 0.5 * ( frontGeometry.boundingBox.max.x - frontGeometry.boundingBox.min.x );
      frontGeometry.translate( offset, 0, 0 );

      offset = - 0.5 * ( backGeometry.boundingBox.max.x - backGeometry.boundingBox.min.x );
      backGeometry.translate( offset, 0, 0 );

      //Mesh
      const frontText = new THREE.Mesh( frontGeometry, frontFontMaterial);
      frontText.position.y += 1.25;
      frontText.position.z += 0.01;

      const backText = new THREE.Mesh(backGeometry, backFontMaterial);
      backText.position.x -= 0.02;
      backText.position.y += 1.25;
      // backText.position.z += 0.005;

      //Text Outline
      let edges = new THREE.EdgesGeometry(frontGeometry);
      let outline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0x000000}));
      outline.position.y += 1.25;
      outline.position.z += 0.01;

      projects[i].add(frontText);
      projects[i].add(backText);
      projects[i].add(outline);
    });

    //image
    let imageGeometry = new THREE.PlaneGeometry(4, 4);
    let imageMaterial = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project3DView/solarARScreenShotTest.png')});
    let projectImage = new THREE.Mesh( imageGeometry, imageMaterial);
    projects[i].add(projectImage);

    //Links
    // geometry = new THREE.CircleGeometry( 0.2, 50);
    // material = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project/github.png')});
    // let projectGitButton = new THREE.Mesh( geometry, material);
    // projectGitButton.position.add(new THREE.Vector3(-1.5, -1.5, 0));

  }
}


export const loadContactPages = (pageArray) => {

  const textLoader = new THREE.FontLoader();

  //NOTE: The array needs to be at least 3 elements long. We can not have a child to two parents, only one. If less then 3 duplicate the array
  for (let i=0; i<3; i++) { //TODO: get length from json

    pageArray[i] = new THREE.Group();

    textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', ( font ) => {

      let material = new THREE.LineBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
      });

      const shape = font.generateShapes( "Contact Page" + i, 0.4);
      const geo = new THREE.ShapeGeometry(shape);

      geo.computeBoundingBox();
      let offset = - 0.5 * ( geo.boundingBox.max.x - geo.boundingBox.min.x );
      geo.translate( offset, 0, 0 );

      const mesh = new THREE.Mesh( geo, material);
      mesh.position.y += 1.25;
      // mesh.position.z += 0.01;

      pageArray[i].add(mesh);
    });
  }
}



export const updateFaces = (counter, pageArray, cube, direction) => {

  //Up Movement
  if (direction === "up") {

    let temp = new THREE.Group();
    let backFaceIndex;

    cube.children.forEach((face, index) => {

      if (face.cubePosition === "top") {
        face.cubePosition = "front";
      }

      else if (face.cubePosition === "bottom") {
        face.cubePosition = "back";

        while (face.children.length) {
          temp.add(face.children[0]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }

      else if (face.cubePosition === "front") {
        face.cubePosition = "bottom";
      }

      else if (face.cubePosition === "left") {

        while (face.children.length) {
          face.remove(face.children[0]);
        }

        if (counter - 1 < 0) {
          face.add(pageArray[pageArray.length -1]);
        } else {
          face.add(pageArray[counter -1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
      }

      else if (face.cubePosition === "right") {

        while (face.children.length) {
          face.remove(face.children[0]);
        }

        if (counter + 1 >= pageArray.length) {
          face.add(pageArray[0]);
        } else {
          face.add(pageArray[counter + 1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
      }

      else if (face.cubePosition === "back") {
        face.cubePosition = "top";
        backFaceIndex = index;
        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }
    });

    //Place the back face children to the top
    while (temp.children.length) {
      cube.children[backFaceIndex].add(temp.children[0]);
    }
  }

  //Down Movement
  else if (direction === "down") {

    let temp = new THREE.Group();
    let backFaceIndex;

    cube.children.forEach((face, index) => {

      if (face.cubePosition === "top") {
        face.cubePosition = "back";

        while (face.children.length) {
          temp.add(face.children[0]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }

      else if (face.cubePosition === "bottom") {
        face.cubePosition = "front";
      }

      else if (face.cubePosition === "front") {
        face.cubePosition = "top";
      }

      else if (face.cubePosition === "left") {

        while (face.children.length) {
          face.remove(face.children[0]);
        }

        if (counter - 1 < 0) {
          face.add(pageArray[pageArray.length -1]);
        } else {
          face.add(pageArray[counter -1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
      }

      else if (face.cubePosition === "right") {

        while (face.children.length) {
          face.remove(face.children[0]);
        }

        if (counter + 1 >= pageArray.length) {
          face.add(pageArray[0]);
        } else {
          face.add(pageArray[counter + 1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
      }

      else if (face.cubePosition === "back") {
        face.cubePosition = "bottom";
        backFaceIndex = index;
        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }
    });

    //Place the back face children to the top
    while (temp.children.length) {
      cube.children[backFaceIndex].add(temp.children[0]);
    }

  }

  //Left/Right movement
  else {

    let axis = new THREE.Vector3();

    if (direction === "right") {
      axis.set(0, 0, 1);
    } else if (direction === "left") {
      axis.set(0, 0, -1);
    }

    cube.children.forEach((face) => {

      if (face.cubePosition === "top") {
        face.rotateOnAxis(axis, Math.PI/2);
      }

      else if (face.cubePosition === "bottom") {
        face.rotateOnAxis(axis, -Math.PI/2);
      }

      else if (face.cubePosition === "front") {

        if (direction === "right") {
          face.cubePosition = "left";

        } else if (direction === "left") {
          face.cubePosition = "right";
        }
      }

      else if (face.cubePosition === "back") {

        if (direction === "right") {
          face.cubePosition = "right";

          if (counter + 1 >= pageArray.length) {
            face.add(pageArray[0]);
          } else {
            face.add(pageArray[counter +1]);
          }

        } else if (direction === "left") {
          face.cubePosition = "left";

          if (counter - 1 < 0) {
            face.add(pageArray[pageArray.length -1]);
          } else {
            face.add(pageArray[counter -1]);
          }
        }
      }

      else if (face.cubePosition === "left") {

        if (direction === "right") {
          face.cubePosition = "back";

          while (face.children.length) {
            face.remove(face.children[0]);
          }

        } else if (direction === "left") {
          face.cubePosition = "front";
        }
      }

      else if (face.cubePosition === "right") {

        if (direction === "right") {
          face.cubePosition = "front";

        } else if (direction === "left") {
          face.cubePosition = "back";

          while (face.children.length) {
            face.remove(face.children[0]);
          }
        }
      }

    });

  }
}


export const arrowEvent = (cube, axis) => {

  let cubeAngle = 0;
  let start = {angle: cubeAngle};
  let end = {angle: cubeAngle + Math.PI / 2};
  let lastAngle = 0;

  cube.canRotate = false;

  let rotate = new TWEEN.Tween(start)
    .to(end, 1000)
    .delay(200)
    .onUpdate(() => {
      cubeAngle=rotate._object.angle;
      cube.rotateOnWorldAxis(axis, cubeAngle - lastAngle);
      lastAngle=cubeAngle;
    })
    .onComplete(() => {
      cube.canRotate = true;

      cube.children.forEach((face, index) => {
        console.log(index + " " + face.cubePosition + " " + face.rotation.x + ", " + face.rotation.y + ", " + face.rotation.z);
      })
    })
    .start();
}


export const arrowHover = (obj) => {

  obj.object.hoverAnimation = true;

  if (obj.object.name === "leftTriangle") {

    new TWEEN.Tween(obj.object.position)
      .to({x: "-" + 0.07}, 400)
      .delay(100)
      .easing(TWEEN.Easing.Quadratic.InOut)

      .chain(
        new TWEEN.Tween(obj.object.position)
          .to({x: "+" + 0.07}, 400)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onComplete(() => {
            obj.object.hoverAnimation = false;
          })
      )

      .start();
  }

  else if (obj.object.name === "rightTriangle") {

    new TWEEN.Tween(obj.object.position)
      .to({x: "+" + 0.07}, 400)
      .delay(100)
      .easing(TWEEN.Easing.Quadratic.InOut)

      .chain(
        new TWEEN.Tween(obj.object.position)
          .to({x: "-" + 0.07}, 400)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onComplete(() => {
            obj.object.hoverAnimation = false;
          })
      )

      .start();
  }

  else if (obj.object.name === "topTriangle") {

    new TWEEN.Tween(obj.object.position)
      .to({y: "+" + 0.07}, 400)
      .delay(100)
      .easing(TWEEN.Easing.Quadratic.InOut)

      .chain(
        new TWEEN.Tween(obj.object.position)
          .to({y: "-" + 0.07}, 400)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onComplete(() => {
            obj.object.hoverAnimation = false;
          })
      )

      .start();
  }

  else if (obj.object.name === "bottomTriangle") {

    new TWEEN.Tween(obj.object.position)
      .to({y: "-" + 0.07}, 400)
      .delay(100)
      .easing(TWEEN.Easing.Quadratic.InOut)

      .chain(
        new TWEEN.Tween(obj.object.position)
          .to({y: "+" + 0.07}, 400)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onComplete(() => {
            obj.object.hoverAnimation = false;
          })
      )

      .start();
  }
}
