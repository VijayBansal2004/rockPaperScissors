import { useState } from 'react';
import './App.css'
import { Header, ScoreBoard, Choise, FeaturedResult, PreviousHistory } from './component/index'
function App() {
  const guesses = ['Rock', 'Paper', 'Scissors'];

  const [userGuess, setUserGuess] = useState('');
  const [compGuess, setCompGuess] = useState('');

  // user guess
  const handleUserGuess = (guess) => {
    console.log(`User guess: ${guess}`);
    gameEngin(guess, computerGuess());
    setUserGuess(guess);
  }

  // computer guess
  const computerGuess = () => {
    setCompGuess(guesses[Math.floor(Math.random() * guesses.length)]);
    return Math.floor(Math.random() * guesses.length);
  }

  //Game Engine

  // user: Rock, computer:Scissors      //user
  // user: Rock, computer:Paper         //computer

  // user: Paper, computer:Rock         //user
  // user: Paper, computer:Scissors     //computer

  // user: Scissors, computer:Paper     //user
  // user: Scissors, computer:Rock      //computer


  const gameEngin = (guess, computerGuess) => {
    // draw game
    if (guess === guesses[computerGuess]) {
      console.log(`Draw: your choice: ${guess}, computer guess: ${guesses[computerGuess]}`);
    }
    else if ((guess === 'Rock' && guesses[computerGuess] === "Scissors") ||
      (guess === 'Paper' && guesses[computerGuess] === "Rock") ||
      (guess === 'Scissors' && guesses[computerGuess] === "Paper")) {
      console.log(`You Won: your choice: ${guess}, computer guess: ${guesses[computerGuess]}`);
    }

    else if ((guess === 'Rock' && guesses[computerGuess] === "Paper") ||
      (guess === 'Paper' && guesses[computerGuess] === "Scissors") ||
      (guess === 'Scissors' && guesses[computerGuess] === "Rock")) {
      console.log(`Computer Won: your choice: ${guess}, computer guess: ${guesses[computerGuess]}`);
    }
  }

  return (
    <>
      <Header />
      <ScoreBoard />
      <Choise handleUserGuess={handleUserGuess} />
      <FeaturedResult userGuess={userGuess} compGuess={compGuess} />
      <PreviousHistory />
    </>
  )
}

export default App
