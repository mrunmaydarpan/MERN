import './App.css';
import { useState, useCallback } from 'react'
import Header from './Components/Header';

function App() {

  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('siri');

  let changeName = useCallback(() => {
    setName('raju');
  }, [name]);

  return (
    <div className="App">
      <div>
        <Header data={changeName} name={name} />
      </div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(++counter)}>increment</button>
    </div>
  );
}

export default App;
