import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home';

function App() {
  const handleLogin = () => {
    console.log("User logged in!");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
