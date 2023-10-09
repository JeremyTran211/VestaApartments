import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/pages/login';
import Register from './components/pages/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;