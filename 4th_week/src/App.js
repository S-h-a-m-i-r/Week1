
import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

const[name, setName] = useState(" write your name Here!");
const[email, setEmail] = useState(" write your mail Here!");
const[desc, setDesc] = useState(" write about your-self");
const handleSubmit = (e)=>{
  e.preventDefault()
  const storage = {name , email, desc}
console.log(storage)

}
  return (
   <>
   <div className='form'>
   <h1>form submission and subscription</h1>
   <form onSubmit={handleSubmit} >
    <label>
    Name:
    <input type = "text" value={name}
    onChange ={(e)=> setName(e.target.value)  }
    />
    
    </label>
    <label>
    Email:
    <input type = "text" value={email}
    onChange= {(e)=>setEmail(e.target.value)}
    />

    </label>
    <label>
    description:
    <textarea type = "text" value={desc}
    onChange = {(e)=>setDesc(e.target.value)}
    />
    </label>
    <label>
    upload file:
    <input type = "file" />
    </label>
    <select  >
      <option value="Male" > Male</option>
      <option value="Female "> Female</option>
    </select>
<button className='btn btn-danger'> Add Another Response</button>
   </form>
   {name} <br/>
   {email}
   <p>{desc }</p>
   </div>

   </>
  );
}

export default App;
