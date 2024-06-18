// src/LengthControl.js
import React from 'react';

const LengthControl = ({ labelId, label, decrementId, incrementId, lengthId, length, onDecrement, onIncrement }) => {
  return (
      <div className="length-control">
            <div id={labelId}>{label}</div>
                  <button id={decrementId} onClick={onDecrement}>□</button>
                        <div id={lengthId}>{length}</div>
                              <button id={incrementId} onClick={onIncrement}>■</button>
                                  </div>
                                    );
                                    };

                                    export default LengthControl;
