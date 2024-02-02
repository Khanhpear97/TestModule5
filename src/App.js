import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
            <Route path='/read/:id' element={<Read/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
