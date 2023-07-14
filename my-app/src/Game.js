import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [xhod, setXhod] = useState(true);
  const [xh, setXh] = useState([]);
  const [oh, setOh] = useState([]);
  const [winner, setWinner] = useState(null);

  const win = [
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
  ];

  const handleClick = (event) => {
    const cell = event.target;
    const iCell = cell.classList.contains('grid');
    const disabled = cell.classList.contains('disabled');

    if (iCell && !disabled && !winner) {
      const cellValue = cell.dataset.value;

      if (xhod) {
        setXh([...xh, cellValue]);
      } else {
        setOh([...oh, cellValue]);
      }

      cell.classList.add('disabled');
      cell.classList.add(xhod ? 'x' : 'o');

      setXhod(!xhod);
    }
  };

  const checkWin = (player) => {
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (player.includes(a) && player.includes(b) && player.includes(c)) {
        return true;
      }
    }
    return false;
  };

  const handleRestart = () => {
    document.querySelectorAll('.grid').forEach((cell) => {
      cell.classList.remove('disabled', 'x', 'o');
    });

    setXhod(true);
    setXh([]);
    setOh([]);
    setWinner(null);
  };
  
  React.useEffect(() => {
    if (checkWin(xh)) {
      setWinner('X');
    } else if (checkWin(oh)) {
      setWinner('O');
    }
  }, [xh, oh]);

  return (
    <div>
      <div id="game">
        <div className="grid" data-value="0" onClick={handleClick}></div>
        <div className="grid" data-value="1" onClick={handleClick}></div>
        <div className="grid" data-value="2" onClick={handleClick}></div>
        <div className="grid" data-value="3" onClick={handleClick}></div>
        <div className="grid" data-value="4" onClick={handleClick}></div>
        <div className="grid" data-value="5" onClick={handleClick}></div>
        <div className="grid" data-value="6" onClick={handleClick}></div>
        <div className="grid" data-value="7" onClick={handleClick}></div>
        <div className="grid" data-value="8" onClick={handleClick}></div>
      </div>

      {winner && (
        <div className="message">
          {winner === 'X' ? 'X Wins!' : 'O Wins!'}
          <button className="restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
