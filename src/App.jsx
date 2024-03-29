import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import VTCs from "./components/VTCs";
import Courses from "./components/Courses";
import Reports from "./components/Reports";
import CreateVTC from "./components/createVTC";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/vtcs" element={<VTCs />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/createvtc" element={<CreateVTC />}/>
          <Route path="/vtcs" element={<VTCs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
