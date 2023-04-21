import React from 'react'
import './TestLetter.css'

const TestLetter = ({perLetter}) => {

    const {status} = perLetter

    // let statusClass;
    // if(status === "correct"){
    //     statusClass="test-letter-correct"
    // }else if(status === "incorrect"){
    //     statusClass="test-letter-incorrect"
    // }else{
    //     statusClass="test-letter-not-attempted"
    // }
    // OR we can have a dict like this
//

    const statusClass={
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted : "test-letter-not-attempted"
    }[status]

    
  return (
    <span className={`test-letter ${statusClass}`}>{perLetter.testLetter}</span>
  )
}

export default TestLetter