import { useState, useEffect } from 'react';
import './clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];



  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className='Clock-box'>
        <span className='Clock-text'>
            {date.toLocaleTimeString()}
        </span>
        <br/>
        <span className='Date-text'>
            {weekday[date.getDay()]} {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
        </span>

    </div>
    
  );
}

export default Clock;
