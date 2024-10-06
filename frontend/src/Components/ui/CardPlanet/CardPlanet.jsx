import Planet from "../Planet/Planet";

import './CardPlanet.css'

function CardPlanet( {image,name}) {
    return ( 
        <div className="chmekmek">
          
          
       
        <div  className="containercomp" >
        <div className="planet" >
            <Planet  image={image} />
            </div>
            <br/>
            <br/>
           <br/>
           <br/>
           <br/>
            
            <p className="nameplanet">
                {name}
            </p>
            <p className="descriptionplanet">
                Description
            </p>
          

            <button className="seeskybutton">
                See the Sky 
            </button>
            <br/>
        </div>
        </div>
     );
}

export default CardPlanet; 