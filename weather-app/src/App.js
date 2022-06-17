import './App.css';
import {Location} from "./components/location" ;
import { Routes ,Route } from 'react-router-dom';
import Homepage from "./components/home" ;

function App() {

  return (
    <div className="App">
     
  
     <Routes>
         <Route path="/" element={<Location/>}></Route>
         <Route path="/homepage" element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
