import "./Events.css";
import React, {useState} from 'react';

const Event = () =>{
    
const [toggle, updateToggle] = useState(false);

const [counter, setCounter] = useState(0);

const tapped = ()=>{
    updateToggle(!toggle)
}
const setcount = ( step)=>{
setCounter((counter)=> counter+step)
}

   return(
    <>
    <div>
<button onClick={tapped} className = { "toggle_button " + (toggle ? "toggle-close ": "") }>
    {toggle ? "Closed": "Opened"}
</button>
<p className="disc">click to close</p>
        
    </div>

<p className="txt"> {counter}</p>
<button onClick={()=>setcount(1)} className = "incnum" > icrement number by 1  </button>
<button onDoubleClick={()=>setcount(2)} className = "dbincnum" > on double click icrement number by 2  </button>
    </>
   )

}

  export default Event;