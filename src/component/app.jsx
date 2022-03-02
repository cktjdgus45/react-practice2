import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from './authentication/forgotPassword';
import UpdateProfile from './authentication/updateProfile';
import PrivateRoute from './authentication/privateRoute';
import { AuthProvider } from '../contexts/authContext';
import Signup from './authentication/signup';
import Login from './authentication/login';
import Profile from './authentication/profile';
import Dashboard from './dashboard';
import '../app.css';


function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Drive */}
          <Route exact path="/" element={Dashboard} />
          {/* Profile */}
          <Route path="/user" element={
            <PrivateRoute component={Profile} />
          } />
          <Route path="/update-profile" element={
            <PrivateRoute component={UpdateProfile} />
          } />
          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>

  );
}
export default App;
