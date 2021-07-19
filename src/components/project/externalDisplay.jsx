import React from 'react';
import GifPlayer from 'react-gif-player';


const ExDisplay = (props) => {

  return (

    <div className="externalDisplay" id="display">
      <div className="externalDisplayProject">

        {props.data.externalDisplay.portraitMode ?

          <GifPlayer className="externalDisplayGifPortraitPlayer"
            gif={process.env.PUBLIC_URL + props.data.externalDisplay.gif}
            autoplay={true}
          />

          :

          <GifPlayer className="externalDisplayGifPlayer"
            gif={process.env.PUBLIC_URL + props.data.externalDisplay.gif}
            autoplay={true}
          />
        }

        <div className="externalDisplayTitleContainer">
          <h3 className="externalDisplayTitle">{props.data.name}</h3>

          <a href={props.data.githubLink} target="_blank" rel="noopener noreferrer">
            <img className="externalDisplayTitleButton" src={process.env.PUBLIC_URL + '/img/project/github.png'} alt=""/>
          </a>
        </div>

        <div className="externalDisplayDisc">
          <p className="externalProjectDisc">
            {props.data.externalDisplay.discription}
          </p>
        </div>

        <div className="externalDisplayButtonContainer">
          <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/exit.png'} alt="" onClick={() => {document.getElementById("display").style.display = "none";}}/>
        </div>

      </div>
    </div>
  );
}

export default ExDisplay;
