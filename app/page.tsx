'use client'
import { useState } from 'react';

type Props = {
  className: string,
  value: string,
  onSquareClick: any,
}

export default function Game(){

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; 
  const currentSquares = history[currentMove];
  const [isAsending, setIsAsending] = useState(true)

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) =>  {
    let location = '';

    if (move > 0)
    {
      const index  = history[move - 1].findIndex((e, i) => e != squares[i]);
      location = '(' + (index % 3 + 1) + ',' + (Math.floor(index / 3) + 1) + ')';
    }

    if (move == currentMove)
    {
      return(
        <li key={move}>
          <a>{'You are at move #' + move + location}</a>
        </li> 
      )
    }
    const description = move > 0 ?
      'Go to move #' + move + location :
      'Go to game start';
    return(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        Now sort by:
        <button onClick={() => setIsAsending(!isAsending)}>
          {isAsending ? "Asending" : "Descending"} 
        </button>
        <ol>{isAsending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  )

}

function Board({ xIsNext, squares, onPlay}) {
  const win = calculateWinner(squares);
  let status;
  let line: number[] = [];
  if(win){
    status = "Winner: " + win.player;
    line = win.line;
  } else if (squares.includes(null)){
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  else{
    status = "Draw";
  }


  function handleClick(i){
    const nextSquares = squares.slice();

    if(squares[i] || calculateWinner(squares)){
      return;
    }

    if(xIsNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  const board = [...Array(3)].map((_, row) =>{
    let threeSquares = [...Array(3)].map((_, col) =>{
      let n = 3 * row + col;
      return <Square key={n}
                     className={"square " + (line.includes(n) ? "win" : null)}
                     value={squares[n]}
                     onSquareClick={() => handleClick(n)}/>
    });
    return <div key={row} className='board-row'>{threeSquares}</div>;
  })

  return(
    <>
      <div className="status">{status}</div>
        {board}
    </>
  )
}

function Square({className, value, onSquareClick}: Props){
  return( 
    <button 
      className={className}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for( let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
