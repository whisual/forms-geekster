import { useState } from 'react';
import './App.css'

function App() {

  const [obj, setObj] = useState({})

  const eventHandler = (value, name) =>{
    let data = ({[name]: value});
    setObj({...obj, ...data})
  }
  console.log(obj);

  return (
    <div>
    <form action="submit">
      <input type="text" name='name' onChange={(e)=> eventHandler(e.target.value, e.target.name)}/>
      <input type="number" name='age' onChange={(e)=> eventHandler(e.target.value, e.target.name)}/>
      <input type="date" name='date' onChange={(e)=> eventHandler(e.target.value, e.target.name)}/>
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>

      </form>
    </div>
  )
}

export default App
