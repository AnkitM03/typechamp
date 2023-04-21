import React from 'react'
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer'

const ChallengeSection = ({selectedPara,words, wpm, characters, timerStarted, timeRemaining, testInfo, handleUserInput, startAgain}) => {
  return (
    <div className='challenge-conatiner'>
        <h1 data-aos='fade-down' className='challenge-header'>
            Take a speed test now!
        </h1>
        <TestContainer  words={words} characters={characters} wpm={wpm} selectedPara={selectedPara} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} handleUserInput={handleUserInput} startAgain={startAgain}/>
    </div>
  )
}

export default ChallengeSection