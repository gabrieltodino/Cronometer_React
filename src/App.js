import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0); //seconds state
  const [isActive, setIsActive] = useState(false); //pause state

  function toggle() {
    setIsActive(!isActive); //stop or pause
  }

  function reset() { //reseting the seconds
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) { // if is equal true start the timer
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval); //stopping the interval
    }
    return () => clearInterval(interval); //stopping the interval before unmount
  }, [isActive]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;