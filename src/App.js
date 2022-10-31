import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles"
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <a href="/" > <h1>NC NEWS</h1> </a>
      
        <Routes>
          <Route path="/" element={<Articles />}/>
        </Routes>
    </div>
  );
}

export default App;