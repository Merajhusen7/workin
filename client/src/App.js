import logo from './logo.svg';
import './App.css';
import {React} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MVP from './Pages/MVP';
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MVP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
