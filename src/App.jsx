import { useEffect, useState } from 'react';
import './App.css'
import { Header, ScoreBoard, Choise, FeaturedResult, PreviousHistory } from './component/index'
function App() {
  const guesses = ['Rock', 'Paper', 'Scissors'];

  const [userGuess, setUserGuess] = useState("");
  const [compGuess, setCompGuess] = useState("");

  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);

  const [win, setWin] = useState('');

  const [history, sethistory] = useState([]);

  // user guess
  const handleUserGuess = (guess) => {
    setUserGuess(guess);
    setCompGuess(guesses[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    gameEngine(userGuess, compGuess);

    sethistory([...history, { userGuess, compGuess, win }]);
    console.log(history);
  }, [userGuess, compGuess]);


  //Game Engine

  // user: Rock, computer:Scissors      //user
  // user: Rock, computer:Paper         //computer

  // user: Paper, computer:Rock         //user
  // user: Paper, computer:Scissors     //computer

  // user: Scissors, computer:Paper     //user
  // user: Scissors, computer:Rock      //computer

  const gameEngine = (guess, computerGuess) => {
    // draw game
    if ((guess === computerGuess) && (guess.length !== 0) && (computerGuess.length !== 0)) {
      // console.log(`Draw: your choice: ${guess}, computer guess: ${computerGuess}`);
      setWin(`Draw!`);

    }
    //You won
    else if ((guess === 'Rock' && computerGuess === "Scissors") ||
      (guess === 'Paper' && computerGuess === "Rock") ||
      (guess === 'Scissors' && computerGuess === "Paper")) {
      // console.log(`You Won: your choice: ${guess}, computer guess: ${computerGuess}`);

      setUserWin(userWin + 1);
      setWin(`You won!`);
    }
    //Computer won
    else if ((guess === 'Rock' && computerGuess === "Paper") ||
      (guess === 'Paper' && computerGuess === "Scissors") ||
      (guess === 'Scissors' && computerGuess === "Rock")) {
      // console.log(`Computer Won: your choice: ${guess}, computer guess: ${computerGuess}`);

      setComputerWin(computerWin + 1);
      setWin(`Computer Won!`);

    }
  }

  return (
    <>
      <Header />
      <div className="background">
        <ScoreBoard userWin={userWin} computerWin={computerWin} />
        <Choise handleUserGuess={handleUserGuess} />
        <FeaturedResult userGuess={userGuess} compGuess={compGuess} win={win} />
        <PreviousHistory history={history} />
      </div>
    </>
  )
}

export default App
