import { useState } from 'react'

import greenGunImg from '/aph/Aphelios_Calibrum.png'
import redGunImg from '/aph/Aphelios_Severum.png'
import purpleGunImg from '/aph/Aphelios_Gravitum.png'
import blueGunImg from '/aph/Aphelios_Infernum.png'
import whiteGunImg from '/aph/Aphelios_Crescendum.png'
import greenGunAbilityImg from '/aph/Aphelios_Moonshot.png'
import redGunAbilityImg from '/aph/Aphelios_Onslaught.png'
import purpleGunAbilityImg from '/aph/Aphelios_Binding_Eclipse.png'
import blueGunAbilityImg from '/aph/Aphelios_Duskwave.png'
import whiteGunAbilityImg from '/aph/Aphelios_Crescendum_2.png'
import gunSwapImg from '/aph/Aphelios_Phase.png'

import './App.css'

function App() {

  //const [goalGuns, setGoalGuns] = useState([greenGun, redGun])

  const [userGuns, setUserGuns] = useState(['green', 'red', 'purple', 'blue', 'white'])
  const [currentGuns, setCurrentGuns] = useState([userGuns[0], userGuns[1]])
  const [goalGuns, setGoalGuns] = useState(['green', 'red', 'purple', 'blue', 'white'])


  function shuffleGuns(array){
    for(let i=array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  function initGame(){
    setUserGuns(shuffleGuns(userGuns))
    setGoalGuns(shuffleGuns(goalGuns))
    setCurrentGuns([userGuns[0], userGuns[1]])
    setUserGuns(userGuns.shift())
    setUserGuns(userGuns.shift())
  }

  function shootWeapon(){
    const newUserGuns = [...userGuns.slice(1), currentGuns[0]];
    setCurrentGuns([newUserGuns[0], currentGuns[1]]);
    setUserGuns(newUserGuns);
  }



  return (
    <>
      <div className='Goal'>
        <img src={greenGunImg}></img>
        <img src={redGunImg}></img>
        <img src={purpleGunImg}></img>
        <img src={blueGunImg}></img>
        <img src={whiteGunImg}></img>
      </div>
      <div className='currentGuns'>
        <img src={greenGunImg}></img>
        <img src={redGunImg}></img>
        <img src={purpleGunImg}></img>
        <img src={blueGunImg}></img>
        <img src={whiteGunImg}></img>
      </div>
      <div>   
        <img src={greenGunAbilityImg}></img>
        <img src={redGunAbilityImg}></img>
        <img src={purpleGunAbilityImg}></img>
        <img src={blueGunAbilityImg}></img>
        <img src={whiteGunAbilityImg}></img>
      </div>

      <button>Swap to Offhand</button>
      <button>Shoot Weapon</button>     
      <img src={gunSwapImg}></img>


    </>
  )
}

export default App
