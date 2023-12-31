import React, { useState } from 'react'

export default function TimerChallenges( {title, targetTime } ) {

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, SetTimeExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      SetTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  return (
    <section className='challenge'>
        <h2>{title}</h2>
        {timeExpired && <p>You lost!</p>}
        <p className='challenges-time'>
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={handleStart}>
            {timeStarted ? "Start" : undefined} Challenge
          </button>
        </p>
        <p className=''>Time is Running... / Timer Inactive</p>
    </section>
  )
}
