import { useState } from 'react';
import './App.css';
import NavBar from './Components/comon/NavBar';
import Signup from './Components/ui/signup/Signup';

function App() {

   const [showSignup,setShowSignup] = useState(true)


   const showSignupMethode = () => {
      setShowSignup(true)
   }
   const hiddenSignupMethode = () => {
    setShowSignup(false)
 }

  return (
    <div className='containerapp'>
         {
          showSignup && <div className='absol' ><Signup  onClickCancel={hiddenSignupMethode} /></div>
         }
       <div>
        <NavBar  onClick={showSignupMethode} />
       </div>
       <main  className='appmain'>

       <div className='maincontainer'>
       <div className='title'>
         <p>
         SPACE
         </p>
         <p>
         EXPLORATION 
         </p>
        </div>

        <div className='description'>
          
          <p className='para'>
          Join us on a journey through the cosmos, where you can discover exoplanets and their fascinating features.
          </p>

        </div>
        
        <div className='containerdiscover'>
        <button className='discover'>
         Discover Exoplanet
         </button>
        </div>

       </div>
       </main>
    </div>
  );
}

export default App;
