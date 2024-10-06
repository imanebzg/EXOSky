import { Link } from "react-router-dom";
import './NavBar.css'
function NavBar( {onClick}) {
    return ( 
        <div  className="navcontainer" >
            <p className="exosky" >
              
                 E X O S K Y
            
            </p >
             
            <div className="middelnavbar">
                
            <Link  className="custom-link" to="/home"> Home  </Link>
            <Link  className="custom-link" to="/explore">Exoplanets</Link>
            <Link  className="custom-link" to="/star-map">F&Q</Link>
           

            </div >


            <div  className="auth" >
                   <button className="signup"  onClick={onClick} >
                      Sign up 
                   </button>

                   <button className="login">
                      Log In
                   </button>
            </div>
        </div>
     );
}

export default NavBar;