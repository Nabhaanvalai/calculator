import React, { useState ,useEffect } from 'react'
import './App.css'

export default function App() {

  const [input,setInput]=useState('0')


  function handlebuttonclick(value) {
    if (value === 'c') {
      setInput(' ');
    }else if(value === '<'){
      setInput(input.slice(0,-1))
    }else if(value === '='){
      try {
        setInput(eval(input).toString())
      } catch (error) {
        setInput('Error')
      }

      
    }
    else{
      setInput((prevalue)=> prevalue+value)
    }
  }

  useEffect(() => {
    function handleKeyPress(event) {
      const key = event.key;

      if (!isNaN(key) || key === '.') {
        handlebuttonclick(key);
      } else if (['+', '-', '*', '/', '%'].includes(key)) {
        handlebuttonclick(key);
      } else if (key === 'Enter') {
        handlebuttonclick('=');
      } else if (key === 'Backspace') {
        handlebuttonclick('<');
      } else if (key.toLowerCase() === 'c') {
        handlebuttonclick('c');
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className='container'>
    <div className="calc">
      <h1 id='input'>{input}</h1>
      <div>
        <button onClick={()=>handlebuttonclick('c')}>C</button>
        <button onClick={()=>handlebuttonclick('<')}>&lt;</button>
        <button onClick={()=>handlebuttonclick('%')}>%</button>
        <button onClick={()=>handlebuttonclick('/')}>/</button>
      </div>
      <div>
        <button onClick={()=>handlebuttonclick('7')}>7</button>
        <button onClick={()=>handlebuttonclick('8')}>8</button>
        <button onClick={()=>handlebuttonclick('9')}>9</button>
        <button onClick={()=>handlebuttonclick('*')}>*</button>
      </div>
      <div>
        <button onClick={()=>handlebuttonclick('4')}>4</button>
        <button onClick={()=>handlebuttonclick('5')}>5</button>
        <button onClick={()=>handlebuttonclick('6')}>6</button>
        <button onClick={()=>handlebuttonclick('-')}>-</button>
      </div>
      <div>
        <button onClick={()=>handlebuttonclick('3')}>3</button>
        <button onClick={()=>handlebuttonclick('2')}>2</button>
        <button onClick={()=>handlebuttonclick('1')}>1</button>
        <button onClick={()=>handlebuttonclick('+')}>+</button>
      </div>
      <div>
        <button onClick={()=>handlebuttonclick('0')}>0</button>
        <button onClick={()=>handlebuttonclick('0')}>00</button>
        <button onClick={()=>handlebuttonclick('.')}>.</button>
        <button onClick={()=>handlebuttonclick('=')}>=</button>
      </div>
      
    </div>
    </div>
  )
}
