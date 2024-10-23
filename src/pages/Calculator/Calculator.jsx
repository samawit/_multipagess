import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [re, setRe] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setRe(re + value);
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const clearDisplay = () => {
    setRe('');
    setDisplayValue('');
  };

  const deleteLast = () => {
    const operators = ['+', '-', '*', '/'];
    let lastOperatorIndex = -1;
    for (let operator of operators) {
      const index = re.lastIndexOf(operator);
      if (index > lastOperatorIndex) {
        lastOperatorIndex = index;
      }
    }

    if (lastOperatorIndex !== -1) {
      setRe(re.slice(0, lastOperatorIndex + 1));
      setDisplayValue('');
    } else {
      setRe('');
      setDisplayValue('');
    }
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(re));
      setRe(eval(re).toString()); 
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={displayValue} disabled />
      <div className="buttons">
        <button onClick={clearDisplay} className='butt' id="clear">C</button>
        <button onClick={deleteLast} className='butt' id="delete">Del</button>
        <button onClick={() => appendToDisplay('/')} className='butt' id="han">&#247;</button>
        <button onClick={() => appendToDisplay('*')} className='butt'>&#10005;</button>
        <button onClick={() => appendToDisplay('7')} className='butt'>7</button>
        <button onClick={() => appendToDisplay('8')} className='butt'>8</button>
        <button onClick={() => appendToDisplay('9')} className='butt'>9</button>
        <button onClick={() => appendToDisplay('-')} className='butt'>-</button>
        <button onClick={() => appendToDisplay('4')} className='butt'>4</button>
        <button onClick={() => appendToDisplay('5')} className='butt'>5</button>
        <button onClick={() => appendToDisplay('6')} className='butt'>6</button>
        <button onClick={() => appendToDisplay('+')} className='butt'>+</button>
        <button onClick={() => appendToDisplay('1')} className='butt'>1</button>
        <button onClick={() => appendToDisplay('2')} className='butt'>2</button>
        <button onClick={() => appendToDisplay('3')} className='butt'>3</button>
        <button onClick={calculateResult} className='butt'>=</button>
        <button onClick={() => appendToDisplay('0')} className='butt'>0</button>
        <button onClick={() => appendToDisplay('.')} className='butt'>.</button>
      </div>
    </div>
  );
}

export default Calculator;