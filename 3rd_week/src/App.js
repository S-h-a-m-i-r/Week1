import React from 'react';
import Keys from "./components/keys.jsx" 
import Event from "./components/Events.jsx"
import "./components/Events.css"

const App = ()=>{
const number = [1, 2, 3, 4, 5];
const dbNumber = number.map((numbers) => numbers*2)

const items = number.map((item)=> <li> {item}</li>)
const dbitems = dbNumber.map((dbitem)=> <li>{dbitem}</li>)


  return(
    <>


<h4 className='heading'> Event And Systhetic Handlers And Passing The Arguemnts Practice </h4>
<Event/>
<h4 className='heading'> Keys And List Practice </h4>
{dbNumber} <br/>
{number}
<ul> {items}</ul> 
<ul> {dbitems}</ul>
</>


)

}

export default App;