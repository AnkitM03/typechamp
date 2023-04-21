import React from 'react'
import "./TypingChallengeContainer.css"
import ChallengeDetailCard from '../ChallengeDetailCard/ChallengeDetailCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

const TypingChallengeContainer = ({selectedPara,words, wpm, characters, timerStarted, timeRemaining, testInfo, handleUserInput}) => {
  return (
    <div className='typing-challenge-container'>
        <div className="details-container">
            <ChallengeDetailCard cardName="Words" cardValue={words}/>
            <ChallengeDetailCard cardName="Characters" cardValue={characters}/>
            <ChallengeDetailCard cardName="Speed" cardValue={wpm}/>
        </div>

        <div className="typewriter-container">
            <TypingChallenge selectedpara={selectedPara} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} handleUserInput={handleUserInput}/>
        </div>
    </div>
  )
}

export default TypingChallengeContainer