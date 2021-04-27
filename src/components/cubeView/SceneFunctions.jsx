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
  const imageLoader = new THREE.TextureLoader();

  for (let i=0; i<3; i++) { //TODO: get length from json

    pageArray[i] = new THREE.Group();

    textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', ( font ) => {

      let material = new THREE.LineBasicMaterial({ color: 0xffffff});

      const name = font.generateShapes( "Andrew Snow", 0.4);
      const title = font.generateShapes( "Software Engineer", 0.3);
      const nameGeometry = new THREE.ShapeGeometry(name);
      const titleGeometry = new THREE.ShapeGeometry(title);

      nameGeometry.computeBoundingBox();
      titleGeometry.computeBoundingBox();

      let offset = - 0.5 * ( nameGeometry.boundingBox.max.x - nameGeometry.boundingBox.min.x );
      nameGeometry.translate( offset, 0, 0 );
      offset = - 0.5 * ( titleGeometry.boundingBox.max.x - titleGeometry.boundingBox.min.x );
      titleGeometry.translate( offset, 0, 0 );

      const nameMesh = new THREE.Mesh( nameGeometry, material);
      nameMesh.position.y += 0.5;
      const titleMesh = new THREE.Mesh( titleGeometry, material);
      titleMesh.position.y -= 0.5;

      pageArray[i].add(nameMesh);
      pageArray[i].add(titleMesh);

      //image
      let imageGeometry = new THREE.PlaneGeometry(4, 4);
      let imageMaterial = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project3DView/gradiantView.png')});
      let image = new THREE.Mesh( imageGeometry, imageMaterial);
      image.position.z -= 0.001;
      pageArray[i].add(image);
    });
  }
}


//Load all projects based on data.json
export const loadProjectPages = (projects, data) => {

  const textLoader = new THREE.FontLoader();
  const imageLoader = new THREE.TextureLoader();

  //Loop through data
  for (let i=0; i<data.length; i++) { //TODO: get length from json

    projects[i] = new THREE.Group();

    //Load text
    textLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', ( font ) => {

      /* Title
         => Set up the title for the project group utilizing three meshes to accomplish the effect I'm looking for
      */

      //Front font materials
      let frontFontMaterial = new THREE.LineBasicMaterial({ color: data[i].color});

      //Background font materials
      let backFontMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
      });

      //Title geometry
      const title = new THREE.Group();

      const frontShapes = font.generateShapes( data[i].name, data[i].fontSize);
      const backShapes = font.generateShapes( data[i].name, data[i].fontSize);

      let frontGeometry = new THREE.ShapeGeometry( frontShapes);
      let backGeometry = new THREE.ShapeGeometry( backShapes);

      //Fix Offset
      frontGeometry.computeBoundingBox();
      backGeometry.computeBoundingBox();

      let offset = - 0.5 * ( frontGeometry.boundingBox.max.x - frontGeometry.boundingBox.min.x );
      frontGeometry.translate( offset, 0, 0 );
      offset = - 0.5 * ( backGeometry.boundingBox.max.x - backGeometry.boundingBox.min.x );
      backGeometry.translate( offset, 0, 0 );

      //Title mesh
      const frontText = new THREE.Mesh( frontGeometry, frontFontMaterial);
      frontText.position.y += 1.25;
      frontText.position.z += 0.01;
      title.add(frontText);

      const backText = new THREE.Mesh(backGeometry, backFontMaterial);
      backText.position.x -= 0.02;
      backText.position.y += 1.25;
      title.add(backText);

      //Title Outline
      let edges = new THREE.EdgesGeometry(frontGeometry);
      let outline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0x000000}));
      outline.position.y += 1.25;
      outline.position.z += 0.01;
      title.add(outline);

      /* Discription
         => Set up short discription based on the project
      */

      const discription = new THREE.Group();
      discription.position.y += 0.8;
      discription.position.z += 0.01;

      //Discription material
      let material = new THREE.LineBasicMaterial({ color: data[i].color});

      //Discription geometry
      let shapes = font.generateShapes(data[i].shortDiscription, 0.16);
      let geometry = new THREE.ShapeGeometry( shapes);

      //Fix offset
      geometry.computeBoundingBox();
      offset = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
      geometry.translate( offset, 0, 0 );

      //Discription mesh
      let text = new THREE.Mesh( geometry, material);
      discription.add(text);

      edges = new THREE.EdgesGeometry(geometry);
      outline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0x000000}));
      outline.position.z += 0.01;
      discription.add(outline);


      /* Skills
         => List out the skills based on the project
      */

      const skillList = new THREE.Group();
      skillList.position.x += 1;
      skillList.position.z += 0.01;

      material = new THREE.LineBasicMaterial({ color: data[i].color});

      //Loop through skills
      for (let j=0; j<data[i].skills.length; j++) {

        let shapes = font.generateShapes("<" + data[i].skills[j] + ">", 0.16);
        let geometry = new THREE.ShapeGeometry( shapes);

        geometry.computeBoundingBox();
        offset = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( offset, 0, 0 );
        let skill = new THREE.Mesh( geometry, material);
        skill.position.y -= 0.4*j;
        skillList.add(skill);

        let edges = new THREE.EdgesGeometry(geometry);
        let outline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0x000000}));
        outline.position.y -= 0.4*j;
        outline.position.z += 0.01;

        skillList.add(outline);
      }

      //Add text to scene
      projects[i].add(title);
      projects[i].add(discription);
      projects[i].add(skillList);
    });

    //Background image
    let imageGeometry = new THREE.PlaneGeometry(4, 4); //2.09, 1
    let imageMaterial = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + data[i].cubeImage), transparent: true, opacity: 0.7});
    let projectImage = new THREE.Mesh( imageGeometry, imageMaterial);
    projects[i].add(projectImage);

    // imageGeometry = new THREE.PlaneGeometry(2.09, 1);
    // imageMaterial = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project/SolarARScreenShot.png')});
    // projectImage = new THREE.Mesh( imageGeometry, imageMaterial);
    // projectImage.position.y -= 0.5;
    // projectImage.position.x -= 0.8;
    // projectImage.position.z += 0.01;
    // projects[i].add(projectImage);

    //Github links
    let linkGeometry = new THREE.CircleGeometry( 0.3, 50);
    let linkMaterial = new THREE.MeshBasicMaterial({map: imageLoader.load(process.env.PUBLIC_URL + '/img/project3DView/githubLink.png'), transparent: true});
    let projectGitButton = new THREE.Mesh( linkGeometry, linkMaterial);
    projectGitButton.position.add(new THREE.Vector3(-1.4, -1.4, 0.01));
    projects[i].add(projectGitButton);
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


/*
  => Updates each face to have the correct orientation
  => Updates the cubePosition property of each face
  => Updates visual elements(children) of the face based on the pageArray arg
*/
export const updateFaces = (counter, pageArray, cube, direction) => {

  //Upward Arrow was clicked
  if (direction === "up") {

    //Based on rotational movement of the cube, need to remove the children from the bottom face (becoming back) and add them to the back face (becoming top)
    let temp = new THREE.Group();
    let backFaceIndex;

    //Loop through each face on the cube
    cube.children.forEach((face, index) => {

      //Top Face => Front Face
      if (face.cubePosition === "top") {
        face.cubePosition = "front";
      }

      //Bottom Face => Back Face
      else if (face.cubePosition === "bottom") {
        face.cubePosition = "back";

        //Remove the children element to temp, later to be placed in the new top face
        while (face.children.length) {
          temp.add(face.children[0]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }

      //Front Face => Bottom Face
      else if (face.cubePosition === "front") {
        face.cubePosition = "bottom";
      }

      //Left Face
      //Update Face Elements
      else if (face.cubePosition === "left") {

        //Remove previous children elements
        while (face.children.length) {
          face.remove(face.children[0]);
        }

        //Add new children
        if (counter - 1 < 0) {
          face.add(pageArray[pageArray.length -1]);
        } else {
          face.add(pageArray[counter -1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
      }

      //Right Face
      //Update Face Elements
      else if (face.cubePosition === "right") {

        //Remove previous children elements
        while (face.children.length) {
          face.remove(face.children[0]);
        }

        //Add new children
        if (counter + 1 >= pageArray.length) {
          face.add(pageArray[0]);
        } else {
          face.add(pageArray[counter + 1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
      }

      //Back Face => Top Face
      else if (face.cubePosition === "back") {
        face.cubePosition = "top";

        //Grab index to update with new child elements
        backFaceIndex = index;

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }
    });

    //Place the back face children to the top face
    while (temp.children.length) {
      cube.children[backFaceIndex].add(temp.children[0]);
    }
  }


  //Downward Arrow was clicked
  else if (direction === "down") {

    //Based on rotational movement of the cube, need to remove the children from the top face (becoming back) and add them to the back face (becoming bottom)
    let temp = new THREE.Group();
    let backFaceIndex;

    //Loop through each face on the cube
    cube.children.forEach((face, index) => {

      //Top Face => Back Face
      if (face.cubePosition === "top") {
        face.cubePosition = "back";

        //Remove the children elements to temp, later to be placed in the new bottom face
        while (face.children.length) {
          temp.add(face.children[0]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }

      //Bottom Face => Front Face
      else if (face.cubePosition === "bottom") {
        face.cubePosition = "front";
      }

      //Front Face => Top Face
      else if (face.cubePosition === "front") {
        face.cubePosition = "top";
      }

      //Left Face
      //Update Face Elements
      else if (face.cubePosition === "left") {

        //Remove previous children elements
        while (face.children.length) {
          face.remove(face.children[0]);
        }

        //Add new children
        if (counter - 1 < 0) {
          face.add(pageArray[pageArray.length -1]);
        } else {
          face.add(pageArray[counter -1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
      }

      //Right Face
      //Update Face Elements
      else if (face.cubePosition === "right") {

        //Remove previous children elements
        while (face.children.length) {
          face.remove(face.children[0]);
        }

        //Add new children
        if (counter + 1 >= pageArray.length) {
          face.add(pageArray[0]);
        } else {
          face.add(pageArray[counter + 1]);
        }

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
      }

      //Back Face => Bottom Face
      else if (face.cubePosition === "back") {
        face.cubePosition = "bottom";

        //Grab index to update with new child elements
        backFaceIndex = index;

        face.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
      }
    });

    //Place the back face children to the bottom face
    while (temp.children.length) {
      cube.children[backFaceIndex].add(temp.children[0]);
    }

  }

  //Left or Right arrow was clicked
  else {

    //Defined rotation axis based on direction arg
    let axis = new THREE.Vector3();

    if (direction === "right") {
      axis.set(0, 0, 1);
    } else if (direction === "left") {
      axis.set(0, 0, -1);
    }

    //Loop through each face on the cube
    cube.children.forEach((face) => {

      //Top Face
      //Rotate face based on axis
      if (face.cubePosition === "top") {
        face.rotateOnAxis(axis, Math.PI/2);
      }

      //Bottom Face
      //Rotate face based on axis
      else if (face.cubePosition === "bottom") {
        face.rotateOnAxis(axis, -Math.PI/2);
      }

      //Front Face => Right Face || Left Face
      else if (face.cubePosition === "front") {

        if (direction === "right") {
          face.cubePosition = "left";

        } else if (direction === "left") {
          face.cubePosition = "right";
        }
      }

      //Back Face => Right Face || Left Face
      //Add new element based on pageArray and counter
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

      //Left Face => Front Face || Back Face
      //Remove elements if becoming new Back face
      else if (face.cubePosition === "left") {

        if (direction === "right") {
          face.cubePosition = "back";

          //Remove elements
          while (face.children.length) {
            face.remove(face.children[0]);
          }

        } else if (direction === "left") {
          face.cubePosition = "front";
        }
      }

      //Right Face => Front Face || Back Face
      //Remove elements if becoming new Back face
      else if (face.cubePosition === "right") {

        if (direction === "right") {
          face.cubePosition = "front";

        } else if (direction === "left") {
          face.cubePosition = "back";

          //Remove elements
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
