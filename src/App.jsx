import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
