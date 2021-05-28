import React from 'react';


const ExDisplay = (props) => {

  const [slideCounter, setSlideCounter] = React.useState(0);

  //Increment counter
  React.useEffect(() => {

    let timer = setInterval(() => {

      if (slideCounter >= props.length -1) {
        setSlideCounter(0);
      } else {
        setSlideCounter(slideCounter + 1);
      }

    }, 2500);

    return () => clearInterval(timer);

  }, [slideCounter]);


  //Reset counter when new project is selected
  React.useEffect(() => {
    setSlideCounter(0);
  }, [props.data])


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

        <img className="displayProjectImage"  src={process.env.PUBLIC_URL + props.data.mobile.image[slideCounter]} alt=""/>

        <div className="displaySkills">

          {props.data.skills.map((skill, index) => {
            return (
              <h6 key={index} className="projectSkill"> {skill} </h6>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default ExDisplay;
