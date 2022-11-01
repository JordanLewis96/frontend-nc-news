import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

import Articles from "./components/Articles"


function App() {

  return (
    <div className="App">
      <a href="/" > <h1 className="Title">NC NEWS</h1> </a>
        <NavBar  /> 
        <Routes>
          <Route path="/" element={<Articles />}/>
          <Route path='/:topic' element={<Articles/>}></Route>
        </Routes>
    </div>
  );
}

export default App;