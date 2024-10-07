import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    e.target.style.backgroundColor = getRandomColor(); 

    if (num1 === null) {
      setNum1(value);
      setDisp(value);
    } else if (op === null) {
      setNum1(num1 + value);
      setDisp(num1 + value);
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    e.target.style.backgroundColor = getRandomColor(); 
    setOp(value);
    setDisp(value);
  };

  const equalsClickHandler = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = getRandomColor(); 

    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      switch (op) {
        case "+":
          result = parseInt(num1) + parseInt(num2);
          break;
        case "-":
          result = parseInt(num1) - parseInt(num2);
          break;
        case "*":
          result = parseInt(num1) * parseInt(num2);
          break;
        case "÷":
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          result = 0;
      }
      setDisp(result);
      setNum1(null);
      setNum2(null);
      setOp(null);
    }
  };

  const clearClickHandler = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = getRandomColor();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const displayFullname = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = getRandomColor(); 
    setDisp("Patricia Marie Mandanas");
  };

  return (
    <div className="App">
      <h1 >Calculator of Patricia Marie Mandanas - IT3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>
        <div className="Buttons">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"÷"} clickHandler={opClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"*"} clickHandler={opClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={opClickHandler} />
          <Key label={"C"} clickHandler={clearClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={equalsClickHandler} />
          <Key label={"+"} clickHandler={opClickHandler} />
        </div>
        <button
          className="surnameButton"
          onClick={displayFullname}
        >
          MANDANAS
        </button>
      </div>
    </div>
  );
}

export default App;
