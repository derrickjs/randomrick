import './App.css';

import {
  BrowserRouter as R,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Ricks from './ricks';
import { useState } from 'react';

const RandomRick = () => {
  return(
    <h1 className="titleText">Welcome to the Rick Randomizer</h1>
  )
}






function App() {
  const [r, getR] = useState(Math.floor(Math.random() * 826)+1);

  const handleClick = () => {
    getR(Math.floor(Math.random() * 826)+1)
  }
  
  return (
    <R>
    <div className="App">
      <RandomRick />
     <Link to = {`/${r}`} onClick={handleClick} className="randomButton">Random Rick</Link>
    </div>
    <Routes>
      <Route path="/:c_id" element={<Ricks />} />
    </Routes>
    </R>
  );
}

export default App;