import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const TestContainer = ({selectedPara,words, wpm, characters, timerStarted, timeRemaining,testInfo, handleUserInput, startAgain}) => {

  // const timeremainig = 55;
  return (
    <div className='test-container'>
      {
        timeRemaining > 0 ? (
          <div  className="typing-challenge-container">
              <TypingChallengeContainer words={words} characters={characters} wpm={wpm} selectedPara={selectedPara} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} handleUserInput={handleUserInput} />
          </div>
        ):(
          <div className='tryagain-container'>
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
          </div>
        )
      }
      




        {/* <div className='tryagain-container'>
            <TryAgain words={words} characters={characters} wpm={wpm}/>
        </div> */}



    </div>
  )
}

export default TestContainer