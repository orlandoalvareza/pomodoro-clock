import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Pomodoro Clock</h1>
        <div className="length-control">
          <div id="break-label">
            <h2>Break Length</h2>
            <div className="break-buttons">
              <button id="break-increment">
              </button>
              <div id="break-length">breakLength</div>
              <button id="break-decrement">
              </button>
            </div>
          </div>
          <div id="session-label">
            <h2>Session Length</h2>
            <div className="session-buttons">
              <button id="session-increment">
              </button>
              <div id="session-length">sessionLength</div>
              <button id="session-decrement">
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
