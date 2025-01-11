import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./pages/auth/Welcome"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Contacts from "./pages/Contacts"
import AddContact from "./pages/AddContact"
import Calendar from "./pages/Calendar"
import AddFriend from "./pages/friends/AddFriend"
import FriendRequests from "./pages/friends/FriendRequests"
import ImportContacts from "./pages/friends/ImportContacts"
import ManageGroups from "./pages/friends/ManageGroups"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/welcome" element={<Welcome />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/friends/add" element={<AddFriend />} />
        <Route path="/friends/requests" element={<FriendRequests />} />
        <Route path="/friends/import" element={<ImportContacts />} />
        <Route path="/friends/groups" element={<ManageGroups />} />
      </Routes>
    </Router>
  )
}

export default App