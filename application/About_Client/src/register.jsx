import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './src/login';
import Register from './src/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;