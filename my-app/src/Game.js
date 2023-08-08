import React, {useState,useEffect} from 'react';
import './Game.css';

const Game = () => {
  const [xhod, setXhod] = useState(true);
  const [xh, setXh] = useState([]);
  const [oh, setOh] = useState([]);
  const [win2, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

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

  const handleClick = (cellValue) => {
    if (!win2 && !xh.includes(cellValue) && !oh.includes(cellValue)) {
      if (xhod) {
        setXh([...xh, cellValue]);
      } else {
        setOh([...oh, cellValue]);
      }
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

  const checkDraw = () => {
    return xh.length + oh.length === 9 && !checkWin(xh) && !checkWin(oh);
  };

  
  useEffect(() => {
    if (checkWin(xh)) {
      setWinner('X');
    } else if (checkWin(oh)) {
      setWinner('O');
    } else if (checkDraw()) {
      setDraw(true);
    }
  }, [xh, oh, checkDraw, checkWin]);

  const handleRestart = () => {
    setXhod(true);
    setXh([]);
    setOh([]);
    setWinner(null);
    setDraw(false);
  };

  return (
    <div>
      <div id="game">
        <div className={`grid ${xh.includes('0') ? 'x' : oh.includes('0') ? 'o': ''}`} data-value="0" onClick={() => handleClick('0')}></div>
        <div className={`grid ${xh.includes('1') ? 'x' : oh.includes('1') ? 'o': ''}`} data-value="1" onClick={() => handleClick('1')}></div>
        <div className={`grid ${xh.includes('2') ? 'x' : oh.includes('2') ? 'o': ''}`} data-value="2" onClick={() => handleClick('2')}></div>
        <div className={`grid ${xh.includes('3') ? 'x' : oh.includes('3') ? 'o': ''}`} data-value="3" onClick={() => handleClick('3')}></div>
        <div className={`grid ${xh.includes('4') ? 'x' : oh.includes('4') ? 'o': ''}`} data-value="4" onClick={() => handleClick('4')}></div>
        <div className={`grid ${xh.includes('5') ? 'x' : oh.includes('5') ? 'o': ''}`} data-value="5" onClick={() => handleClick('5')}></div>
        <div className={`grid ${xh.includes('6') ? 'x' : oh.includes('6') ? 'o': ''}`} data-value="6" onClick={() => handleClick('6')}></div>
        <div className={`grid ${xh.includes('7') ? 'x' : oh.includes('7') ? 'o': ''}`} data-value="7" onClick={() => handleClick('7')}></div>
        <div className={`grid ${xh.includes('8') ? 'x' : oh.includes('8') ? 'o': ''}`} data-value="8" onClick={() => handleClick('8')}></div>
      </div>

      {win2 && (
        <div className="message">
          {win2 === 'X' ? 'X Won!' : 'O Won!'}
          <button className="restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}

      {draw && (
        <div className="message">
          Its a draw!
          <button className="restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
