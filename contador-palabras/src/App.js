import { useEffect, useState, useRef } from 'react';
import './App.css';
import Letras from './components/letras/Letras';
import Palabras from './components/palabras/Palabras';


function App() {
  const [text, setText] = useState("");

  function changeText(event) {
    setText(event.target.value);
    console.log(text);
  }


  return (
    <div className="App">
      <h1>Texto</h1>
      <form>
        <textarea value={text} onChange={changeText}></textarea>
      </form>

      <Letras text={text} />
      <Palabras text={text} />
    </div>
  );
}

export default App;
