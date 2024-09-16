import { useEffect, useState } from 'react';
import { Header, ScoreBoard, Choise, FeaturedResult, PreviousHistory } from './component/index'
import './App.css'
function App() {
  const guesses = ['Rock', 'Paper', 'Scissors'];

  const [userGuess, setUserGuess] = useState("");
  const [compGuess, setCompGuess] = useState("");

  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);

  const [win, setWin] = useState('');

  const [history, sethistory] = useState([]);

  const [gameOver, setGameOver] = useState(false);

  // user guess
  const handleUserGuess = (guess) => {
    setUserGuess(guess);
    setCompGuess(guesses[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    gameEngine(userGuess, compGuess);
  }, [userGuess, compGuess]);

  useEffect(() => {
    sethistory([...history, { userGuess, compGuess, win }]);
    endGame();
  }, [win]);


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
      setWin(`You Won!`);
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

  const endGame = () => {
    if (userWin === 5 || computerWin === 5) {
      setGameOver(true);
    }
  }

  const handleReset = () => {
    setGameOver(false);
    setUserGuess("");
    setCompGuess("");
    setUserWin(0);
    setComputerWin(0);
    setWin("");
    sethistory([]);
  }

  return (
    <>
      <Header />
      <div className="background">
        <ScoreBoard userWin={userWin} computerWin={computerWin} />
        {
          gameOver === false ?
            <>
              <Choise handleUserGuess={handleUserGuess} />
              <FeaturedResult userGuess={userGuess} compGuess={compGuess} win={win} />
              <PreviousHistory history={history} />
            </> : <>
              <p className={`fs-1 fw-bold text-center ${win === 'You Won!' && "userWin"} ${win === 'Computer Won!' && "userLoose"}`}>{win}</p>

              <button className={`btn btn-primary resetButton`} onClick={handleReset}>Reset</button>
            </>
        }
      </div>
    </>
  )
}

export default App
