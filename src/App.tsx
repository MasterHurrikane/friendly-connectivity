import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./pages/auth/Welcome"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/welcome" element={<Welcome />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App