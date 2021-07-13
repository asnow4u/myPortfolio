import React from 'react';
import GifPlayer from 'react-gif-player';


const ExDisplay = (props) => {

  return (

    <div className="externalDisplay" id="display">
      <div className="displayProject">
        <h3 className="displayTitle">{props.data.name}</h3>

        <div className="displayDisc">

          <p className="projectDisc">
            {props.data.mobile.discription}
          </p>

          <div className="displayButtons">

            <a href={props.data.githubLink} target="_blank" rel="noopener noreferrer">
              <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/github.png'} alt=""/>
            </a>

            {props.data.demoLink ?

              <a href={props.data.demoLink} target="_blank" rel="noopener noreferrer">
                <img className="displayButton" id="demoButton" src={process.env.PUBLIC_URL + '/img/project/demo.png'} alt=""/>
              </a>

              :

              <></>
            }

            <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/exit.png'} alt="" onClick={() => {document.getElementById("display").style.display = "none";}}/>
          </div>
        </div>

        <div className="displayInfo">

          <GifPlayer className="displayGifPlayer"
            gif={process.env.PUBLIC_URL + props.data.mobile.image[0]}
            autoplay={true}
          />

          <div className="displaySkills">
            {props.data.skills.map((skill, index) => {
              return (
                <h6 key={index} className="projectSkill"> {"<" + skill + ">"} </h6>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExDisplay;

// <GifPlayer
//   gif={process.env.PUBLIC_URL + '/img/project/test.gif'}
//   still={process.env.PUBLIC_URL + props.data.cubeImage}
// />
// <img className="displayProjectImage"  src={process.env.PUBLIC_URL + props.data.cubeImage} alt=""/>
// <img className="displayProjectImage"  src={process.env.PUBLIC_URL + props.data.mobile.image[slideCounter]} alt=""/>
