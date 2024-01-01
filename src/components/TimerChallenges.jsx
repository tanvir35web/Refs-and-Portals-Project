import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenges({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, SetTimeExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      SetTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost!</p>}
        <p className="challenges-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is Running..." : "Timer Inactive"};
        </p>
      </section>
    </>
  );
}
