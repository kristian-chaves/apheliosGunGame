import { useState, useEffect, useRef } from 'react'

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
import infoIcon from '/infoIcon.svg'
import resetIcon from '/resetIcon.svg'
import settingsIcon from '/settingsIcon.svg'

import './App.css'

function App() {

  //const [goalGuns, setGoalGuns] = useState([greenGun, redGun])

  const [userGuns, setUserGuns] = useState(['purple', 'blue', 'white'])
  const [currentGuns, setCurrentGuns] = useState(['red', 'green'])
  const [goalGuns, setGoalGuns] = useState(['green', 'red', 'purple', 'blue', 'white'])
  const [gunCount, setGunCount] = useState(0)
  const [swapCount, setSwapCount] = useState(0)
  const gameActiveRef = useRef(false)
  const gunImages = {
    'green': greenGunImg,
    'red': redGunImg,
    'purple': purpleGunImg,
    'blue': blueGunImg,
    'white': whiteGunImg,
  }
  const gunAbilityImages = {
    'green': greenGunAbilityImg,
    'red': redGunAbilityImg,
    'purple': purpleGunAbilityImg,
    'blue': blueGunAbilityImg,
    'white': whiteGunAbilityImg,
  }
  const displayGuns = [...currentGuns, ...userGuns]
  const currentAbilityImg = gunAbilityImages[currentGuns[0]]
  


  function shuffleGuns(array){
    for(let i=array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  function initGame(){
    console.log("init")
    const newUserGuns = shuffleGuns([...currentGuns, ...userGuns])
    let newGoalGuns = shuffleGuns([...goalGuns])
    while (newUserGuns.join(',') == newGoalGuns.join(',')){
      newGoalGuns = shuffleGuns([...newGoalGuns])
    } 
    setCurrentGuns([newUserGuns[0], newUserGuns[1]])
    setUserGuns([newUserGuns[2], newUserGuns[3], newUserGuns[4]])
    setGoalGuns(newGoalGuns)
    setGunCount(0)
    setSwapCount(0)
    gameActiveRef.current = true
  }

  function shootWeapon(){
    if(gameActiveRef.current){
      const nextMain = userGuns[0];
      const newQueue = [...userGuns.slice(1), currentGuns[0]];
      setCurrentGuns([nextMain, currentGuns[1]]);
      setUserGuns(newQueue);
      setGunCount(gunCount + 1);
    }
  }

  function swapOffhand(){
    if(gameActiveRef.current){
      setCurrentGuns([currentGuns[1], currentGuns[0]])
      setSwapCount(swapCount + 1);
    }
  }

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    console.log('Current Guns:', currentGuns);
    console.log('User Guns:', userGuns);
    console.log('Goal Guns: ', goalGuns);
    console.log('gameActiveRef.current:', gameActiveRef.current);
  }, [currentGuns, userGuns, goalGuns]);

  useEffect(() => {
    if(currentGuns[0] == goalGuns[0] && currentGuns[1] == goalGuns[1] && userGuns[0] == goalGuns[2] && userGuns[1] == goalGuns[3] && userGuns[2] == goalGuns[4]){
      gameActiveRef.current = false
      console.log('GAME WON')
      console.log(gameActiveRef)
    }
  }, [currentGuns, userGuns, goalGuns]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(gameActiveRef.current)
      if (e.key === 'q') {
        shootWeapon()
      }
      if (e.key === 'w') {
        swapOffhand();
      }
      if(e.key === 'r'){
        initGame()
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [userGuns, currentGuns]);

  return (
    <>
      <div className='headerContainer'>
        <div className='buttonContainer'>
          <button class='reset' onClick={initGame}><img src={resetIcon}></img></button>
          <button class='info' ><img src={infoIcon}></img></button>
          <button class='settings'><img src={settingsIcon}></img></button>
        </div>
        <div className='actionCount'>
          <span>Guns Cycled</span>
          <span>{gunCount}</span>
          <span>Total Actions</span>
          <span>{swapCount + gunCount}</span>
        </div>
      </div>

      <div className='goalGuns'>
        {goalGuns.map((gun, index) => (
          <img key={index} src={gunImages[gun]}></img>
        ))}
      </div>
      <div className='currentGuns'> 
        {displayGuns.map((gun, index) =>(
          <img key={index} src={gunImages[gun]}></img>
        ))}
      </div>


      <div className='actionButtons'>
        <button onClick={shootWeapon}><img src={currentAbilityImg}></img></button>
        <button onClick={swapOffhand}><img src={gunSwapImg}></img></button>
      </div>


    </>
  )
}

export default App
