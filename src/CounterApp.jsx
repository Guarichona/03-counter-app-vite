import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // lo que tenemos aquí es la desestructuración del retorno de esa función
  // Muestra 0, porque ese es valor incial que tiene el hook
  // Una constante no tiene la capacidad de setear un valor, por lo tanto al introducir counter++ en la función del evento ,me va a arrojar un error
  const [contador, setCounter] = useState(value);

  const handleAdd = (event) => {
    // console.log(event);
    // setCounter(counter + 1);
    // setCounterno me dice nada es la manera como lo ejecuto
    setCounter((c) => c + 1);
  };

  const handleSubtract = (event) => {
    if (contador > value) {
      setCounter((c) => c - 1);
    }
  };

  const handleReset = (event) => {
    setCounter(() => value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{contador}</h2>

      <button onClick={(event) => handleAdd(event, "Hola")}>+1</button>
      <button onClick={(event) => handleSubtract(event, "Hola")}>-1</button>
      <button onClick={(event) => handleReset(event, "Hola")}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
