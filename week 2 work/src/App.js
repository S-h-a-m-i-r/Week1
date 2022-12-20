import './App.css';
import DigitalClock from "./components/DigitalClock.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/Counter.jsx";
function App() {

  return (
   <>
   <div className='digiclock'>
   <DigitalClock/>
   </div>
<div className='counter'>
   <Counter/>
</div>
   </>
  );
}

export default App;
