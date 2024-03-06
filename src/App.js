import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StateDemo from './components/state/StateDemo';

function App() {
  let [name,setName] = useState('')
  let [country,setCountry]  =useState('India')

  function putInConsole(event){
    let value = event.target.value
    setName(value)

    
  }

  function putCountry(event){
    setCountry(event.target.value)
  }
  return (
    <div className="App">
         {/* <StateDemo /> */}
         <h1>{country}</h1>
         <form>
          <input type='text' name='name' value={name} onChange={putInConsole} />
          <select name='country' value={country} onChange={putCountry}>
            <option value={''}>Selecct</option>
            <option value={'India'}>India</option>
            <option value={'Germany'}>Germany</option>
          </select>
         </form>
    </div>
  );
}

export default App;
