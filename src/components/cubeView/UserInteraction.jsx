import * as THREE from "three";
import {arrowEvent, updateFaces} from "./SceneFunctions";



export const rotateClickEvent = (object, cube, pages, counter) => {

  if (object.name === "leftTriangle") {
    arrowEvent(cube, new THREE.Vector3(0, 1, 0));

    counter--;

    if (counter < 0) {
      counter = pages.length - 1;
    }

    updateFaces(counter, pages, cube, "left");
  }

  else if (object.name === "rightTriangle") {
    arrowEvent(cube, new THREE.Vector3(0, -1, 0));

    counter++;

    if (counter === pages.length) {
      counter = 0;
    }

    updateFaces(counter, pages, cube, "right");
  }

  return counter;
}


export const hoverButtonEvent = (objects) => {

  objects.forEach((object) => {

    if (object.hover) {
      object.hover = false;
    }

    else if (object.scale.x > 1) {
      object.scale.addScalar(-0.05);
    }

  });
}


export const iconClickEvent = (object, curPage) => {

  if (curPage === "project") {
    if (object.name === "gitIcon") {
      window.open(object.link);
    }
  }

  else if (curPage === "contact") {
    if (object.name === "gitIcon" || object.name === "linkedInIcon" || object.name === "emailIcon") {
      window.open(object.link);
    }
  }
}
