import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";

class counter extends Component {



  state = {
    count: 0
    };

   incNum = () => {

    this.setState({count: this.state.count+1})
  };
  render() { 

    
    return (
<>

<span className={this.getClasses()}>{
  this.formatcount()
} </span>
<button  onClick={this.incNum} className='btn btn-secondary'> increment</button>
 
</>
);
  }

  formatcount () {
const { count } = this.state;
    return count === 724 ? "zero " : count;
  }
  getClasses(){
    let Classes = "btn btn-";
    Classes += this.state.count === 0 ? "success m-4 p-2  " : "primary m-4 p-3" 
    return Classes;
  }

  

}
 
export default counter;