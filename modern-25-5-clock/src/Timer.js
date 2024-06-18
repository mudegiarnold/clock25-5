// src/Timer.js
import React from 'react';

const Timer = ({ timerLabel, timeLeft, onStartStop, onReset }) => {
  const formatTimeLeft = () => {
      const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
              return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                };

                  return (
                      <div className="timer">
                            <div id="timer-label">{timerLabel}</div>
                                  <div id="time-left">{formatTimeLeft()}</div>
                                        <button id="start_stop" onClick={onStartStop}>■/□</button>
                                              <button id="reset" onClick={onReset}>RESET</button>
                                                  </div>
                                                    );
                                                    };

                                                    export default Timer;
