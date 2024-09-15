import { useState } from 'react';
import './App.css'
import { Header, ScoreBoard, Choise, FeaturedResult, PreviousHistory } from './component/index'
function App() {
  const guesses = ['Rock', 'Paper', 'Scissors'];

  const [userGuess, setUserGuess] = useState("");
  const [compGuess, setCompGuess] = useState("");

  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);

  const [win, setWin] = useState()

  // user guess
  const handleUserGuess = (guess) => {
    setUserGuess(guess);
    setCompGuess(guesses[Math.floor(Math.random() * guesses.length)])

    // console.log(`User guess: ${guess}`);
    // console.log(`computer guess ${compGuess}`);

    // computerGuess();
    gameEngine(userGuess, compGuess);
  }

  // computer guess
  // const computerGuess = () => {
  //   const cg = guesses[Math.floor(Math.random() * guesses.length)];
  //   setCompGuess(cg);
  //   // return Math.floor(Math.random() * guesses.length);
  // }

  //Game Engine

  // user: Rock, computer:Scissors      //user
  // user: Rock, computer:Paper         //computer

  // user: Paper, computer:Rock         //user
  // user: Paper, computer:Scissors     //computer

  // user: Scissors, computer:Paper     //user
  // user: Scissors, computer:Rock      //computer


  const gameEngine = (guess, computerGuess) => {
    // draw game
    if (guess === computerGuess && computerGuess !== undefined) {
      // console.log(`Draw: your choice: ${guess}, computer guess: ${computerGuess}`);
      setWin(`Draw!`);

    }
    else if ((guess === 'Rock' && computerGuess === "Scissors") ||
      (guess === 'Paper' && computerGuess === "Rock") ||
      (guess === 'Scissors' && computerGuess === "Paper")) {
      // console.log(`You Won: your choice: ${guess}, computer guess: ${computerGuess}`);

      setUserWin(userWin + 1);
      setWin(`You won!`);
    }

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
      <ScoreBoard userWin={userWin} computerWin={computerWin} />
      <Choise handleUserGuess={handleUserGuess} />
      <FeaturedResult userGuess={userGuess} compGuess={compGuess} win={win} />
      <PreviousHistory userGuess={userGuess} compGuess={compGuess} win={win} />
    </>
  )
}

export default App
