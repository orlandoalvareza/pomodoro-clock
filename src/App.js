import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpLong,
  faDownLong,
  faArrowRotateLeft,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

import './style.css';

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

  useEffect(() => {
    let timeOut = null;

    if (totalTime >= 0 && isPlay) {
      timeOut = setTimeout(() => {
        setTotalTime(totalTime - 1);
      }, 1000);
    }

    changeTimer();

    return () => clearTimeout(timeOut);
  }, [isPlay, totalTime]);

  const resetAll = () => {
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
    setBreakLength(5);
    setSessionLength(25);
    setTotalTime(1500);
    setIsPlay(false);
    setTitle('Session');
  };

  const pomodoroAudio = (
    <audio
      id="beep"
      preload="auto"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
    ></audio>
  )

  return (
    <div className="App">
      <div className="main-container">
        <h1>Pomodoro Clock</h1>
        <div className="length-control">
          <div id="break-label">
            <h2>Break Length</h2>
            <div className="break-buttons">
              <button onClick={incrementBreak} id="break-increment">
                <FontAwesomeIcon
                  style={{ height: '100%', width: '100%' }}
                  onMouseOver={({ target }) => (target.style.color = '#686D76')}
                  onMouseOut={({ target }) => (target.style.color = 'black')}
                  icon={faUpLong}
                />
              </button>
              <div id="break-length">{breakLength}</div>
              <button onClick={decrementBreak} id="break-decrement">
                <FontAwesomeIcon
                  style={{ height: '100%', width: '100%' }}
                  onMouseOver={({ target }) => (target.style.color = '#686D76')}
                  onMouseOut={({ target }) => (target.style.color = 'black')}
                  icon={faDownLong}
                />
              </button>
            </div>
          </div>
          <div id="session-label">
            <h2>Session Length</h2>
            <div className="session-buttons">
              <button onClick={incrementSession} id="session-increment">
                <FontAwesomeIcon
                  style={{ height: '100%', width: '100%' }}
                  onMouseOver={({ target }) => (target.style.color = '#686D76')}
                  onMouseOut={({ target }) => (target.style.color = 'black')}
                  icon={faUpLong}
                />
              </button>
              <div id="session-length">{sessionLength}</div>
              <button onClick={decrementSession} id="session-decrement">
                <FontAwesomeIcon
                  style={{ height: '100%', width: '100%' }}
                  onMouseOver={({ target }) => (target.style.color = '#686D76')}
                  onMouseOut={({ target }) => (target.style.color = 'black')}
                  icon={faDownLong}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="timer-container">
          <div className="timer-wrapper">
            <div id="timer-label">
              <h2>{title === 'Session' ? 'Session' : 'Break'}</h2>
            </div>
            <div id="time-left">
              <strong>{Timer()}</strong>
            </div>
          </div>
          <div className="timer-control">
            <button onClick={playTimer} id="start_stop">
              <FontAwesomeIcon
                style={{ height: '90%', width: '90%' }}
                onMouseOver={({ target }) => (target.style.color = '#4B6587')}
                onMouseOut={({ target }) => (target.style.color = 'black')}
                icon={isPlay ? faPause : faPlay}
              />
            </button>
            <button onClick={resetAll} id="reset">
              <FontAwesomeIcon
                style={{ height: '90%', width: '90%' }}
                onMouseOver={({ target }) => (target.style.color = '#4B6587')}
                onMouseOut={({ target }) => (target.style.color = 'black')}
                icon={faArrowRotateLeft}
              />
            </button>
          </div>
        </div>
      </div>
      {pomodoroAudio}
    </div>
  );
}

export default App;
