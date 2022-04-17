import React, { useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("");
  const [theme, settheme] = useState(false);

  const handleTheme = () =>{
    settheme(!theme);
  }

  const handleClick = (e) =>{
    setResult(result.concat(e.target.value));
  }

  const handleClear = () =>{
    setResult("");
  }

  const handleBackspace = () =>{
    setResult(result.slice(0,-1));
  }

  const handleEqual = () =>{
    try{
    setResult(eval(result));
    }catch(error){
      setResult("Error");
    }
  }
  

  return (
    <>
    <span onClick={handleTheme} className={ !theme ? 'click' : 'click-dark'}>Click me to change the theme</span>
    <div className={ !theme ? 'container' : 'container-dark'}>
      <form>
        <input type="text" value={result} className={ !theme ? 'output' : 'output-dark'}/>
      </form>
      <div className='keypad'>
        <button onClick={handleClear} id={ !theme ? 'clear' : 'clear-dark'}>Clear</button>
        <button onClick={handleBackspace} id={ !theme ? 'c' : 'c-dark'}>C</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="/" onClick={handleClick}>/</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="7" onClick={handleClick}>7</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="8" onClick={handleClick}>8</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="9" onClick={handleClick}>9</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="*" onClick={handleClick}>*</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="4" onClick={handleClick}>4</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="5" onClick={handleClick}>5</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="6" onClick={handleClick}>6</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="-" onClick={handleClick}>-</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="1" onClick={handleClick}>1</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="2" onClick={handleClick}>2</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="3" onClick={handleClick}>3</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="+" onClick={handleClick}>+</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="0" onClick={handleClick}>0</button>
        <button id={ !theme ? 'button' : 'button-dark'} value ="." onClick={handleClick}>.</button>
        <button onClick={handleEqual} id={ !theme ? 'equal' : 'equal-dark'}>=</button>
      </div>
    </div>
    </>
  )
}

export default App;

