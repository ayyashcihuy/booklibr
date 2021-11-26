import './App.css';
import Homepage from './pages/Homepage';
import {Routes, Route} from "react-router-dom"
import Library from './pages/Library';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import LearnMore from "./components/LearnMore"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/library" element={<Library/>}>
          </Route>
          <Route path="/detail/:id" element={<LearnMore/>}>
          </Route>
          </Routes>
      </div>
  );
}

export default App;
