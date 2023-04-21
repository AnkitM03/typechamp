import React from 'react'
import "./TryAgain.css"

const TryAgain = ({words, characters, wpm, startAgain}) => {
  return (
    <div className='try-again-container'>
        <h1>Test Results</h1>

        <div className="result-container">
            <p>
                <b>Characters: </b> {characters}
            </p>

            <p>
                <b>Words: </b> {words}
            </p>

            <p>
                <b>Speed: </b> {wpm}
            </p>
        </div>
        <div>
            <button className='btn retry' onClick={() => startAgain()}>Retry</button>
            <button className='btn fb-share' onClick={()=>{window.open("https://www.facebook.com/", "facebook-share-dialog", "width=800, height=600")}}>Share</button>
            <button className='btn tweet' onClick={()=>{window.open("https://www.twitter.com/", "twitter", "width=800, height=600")}}>Tweet</button>
        </div>
    </div>
  )
}

export default TryAgain