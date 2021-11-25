import './App.css';
import Homepage from './pages/Homepage';
import {Routes, Route} from "react-router-dom"
import Library from './pages/Library';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/library" element={<Library/>}>
          </Route>
          </Routes>
      </div>
  );
}

export default App;
