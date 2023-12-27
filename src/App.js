import { useState } from 'react';

import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [title, setTitle] = useState('Session');
  const [totalTime, setTotalTime] = useState(1500);
  const [isPlay, setIsPlay] = useState(false);

  const incrementBreak = () => {
    breakLength < 60 && setBreakLength(breakLength + 1);
  };

  const decrementBreak = () => {
    breakLength > 1 && setBreakLength(breakLength - 1);
  };

  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTotalTime(totalTime + 60);
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTotalTime(totalTime - 60);
    }
  };

  const Timer = () => {
    const min = Math.floor(totalTime / 60);
    const sec = totalTime - min * 60;
    const secCount = sec <= 9 ? '0' + sec : sec;
    const minCount = min <= 9 ? '0' + min : min;
    return `${minCount}:${secCount}`;
  };

  const playTimer = () => {
    setIsPlay(!isPlay);
  };

  function changeTimer() {
    const audio = document.getElementById('beep');

    if (totalTime === -1 && title === 'Session') {
      setTotalTime(breakLength * 60);
      setTitle('break');
      audio.play();
    }
    if (totalTime === -1 && title === 'break') {
      setTotalTime(sessionLength * 60);
      setTitle('Session');
      audio.play();
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Pomodoro Clock</h1>
        <div className="length-control">
          <div id="break-label">
            <h2>Break Length</h2>
            <div className="break-buttons">
              <button onClick={incrementBreak} id="break-increment">
              </button>
              <div id="break-length">breakLength</div>
              <button onClick={decrementBreak} id="break-decrement">
              </button>
            </div>
          </div>
          <div id="session-label">
            <h2>Session Length</h2>
            <div className="session-buttons">
              <button onClick={incrementSession} id="session-increment">
              </button>
              <div id="session-length">sessionLength</div>
              <button onClick={decrementSession} id="session-decrement">
              </button>
            </div>
          </div>
        </div>
        <div className="timer-container">
          <div className="timer-wrapper">
            <div id="timer-label">
              <h2></h2>
            </div>
            <div id="time-left">
              <strong></strong>
            </div>
          </div>
          <div className="timer-control">
            <button id="start_stop">
            </button>
            <button id="reset">
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
