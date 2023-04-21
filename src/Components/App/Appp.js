import './App.css';
import Nav from './../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import { useState, useEffect } from 'react';


let Totaltime=20
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

function App() {
  const [selectedPara, setSelectedPara] = useState("Hello my World");
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(Totaltime);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [testInfo, setTestInfo] = useState([]);

  // fetch(ServiceUrl).then(res => res.text()).then(info => console.log(info));
  useEffect(() => {
      // fetch(ServiceUrl)
      //   .then(resp => resp.text())
      //     .then(data => setSelectedPara(data))
      const selectedParaArray = selectedPara.split("");
      const testInfo = selectedParaArray.map(selectedLetter => {
        return{
          testLetter : selectedLetter,
          status : "notAttempted",
        }
      })


      setTestInfo(testInfo);
  },[])

  const handleUserInput = (inputValue) => {
    // console.log(inputValue);
    if (!timerStarted) {
      startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters-1;

    if(index < 0){
      setTestInfo({
        testLetter : testInfo[0].testLetter,
        status: "notAttempted"
      }, ...testInfo.slice(1))

      setCharacters(characters)
      setWords(words)
      
      return;
    }

    if(index >= selectedPara.length){
      setCharacters(characters)
      setWords(words)

      return;
    }

    const testingInfo = testInfo;
    if(!index === selectedPara.length -1){
      testingInfo[index+1].status = "notAttempted"
    }


    //for checking correct typing
    const isCorrect = inputValue[index] === testingInfo[index].testLetter;

    testingInfo[index].status = isCorrect ? "correct" : "incorrect";


    setTestInfo(testingInfo);
    setWords(words)
    setCharacters(characters)



  }

  const startTimer = ()=> {
    setTimerStarted(true);

    const timer = setInterval(() => {
      if(Totaltime > 0){
        //counting wpm
        const timespent = 60 - Totaltime;
        
        console.log("timespent", timespent)
        let wordspm=0
        if(timespent > 0){
          console.log("timespent > 0")
          console.log("words", words)
          console.log("words/timespent", words/timespent)
          wordspm = (words / timespent)*60
        }
        // const wordspm = timespent > 0 
        //                 ? 
        //                 ((words / timespent)*60)
        //                 : 0;
                        
        console.log("wpm", wordspm)
        setWpm(Math.ceil(wordspm))
        setTimeRemaining((timeRemaining) => timeRemaining - 1)
        Totaltime-=1;

        // console.log(timeRemaining)
      }else{
        clearInterval(timer)
      }  
      

    }, 1000)
  };

  return (
    
    <div className="app">
      <Nav />
      <Landing />
      <ChallengeSection selectedPara={selectedPara} words={words} characters={characters} wpm={wpm} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} handleUserInput={handleUserInput}/>
      <Footer />
    </div>
  );
}

export default App;
