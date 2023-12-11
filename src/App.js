import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      if (isNaN(result) || !isFinite(result)) {
        setInput('Error');
      } else {
        setInput(result.toString());
      }
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container">
     
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={input} onChange={() => {}} />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} className="operator" />
            <input type="button" value="DE" onClick={handleBackspace} className="operator" />
            <input type="button" value="." onClick={() => handleButtonClick('.')} className="operator" />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} className="operator" />
          </div>

          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')}  />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} className="operator" />
          </div>

          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')}  />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')}  />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} className="operator" />
          </div>

          <div>
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" value="2" onClick={() => handleButtonClick('2')}  />
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} className="operator" />
          </div>
        
          <div>
          <input type="button" value="00" onClick={() => handleButtonClick('00')}  />
          <input type="button" value="0" onClick={() => handleButtonClick('0')}  />
            <input type="button" value="=" className="equal" onClick={handleEqual} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
