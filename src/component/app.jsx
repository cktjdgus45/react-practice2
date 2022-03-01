import '../app.css';
<<<<<<< HEAD
import { AuthProvider } from '../contexts/authContext';
import Signup from './signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './dashboard';
import Login from './login';
import PrivateRoute from './privateRoute';
import ForgotPassword from './forgotPassword';
=======
>>>>>>> 28a4b010c8fa4935d0f4aa63822fdce8d4699cdb

function App() {

  return (
<<<<<<< HEAD
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={
                <PrivateRoute component={Dashboard} />
              } />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
=======
    <>
      clean
    </>
>>>>>>> 28a4b010c8fa4935d0f4aa63822fdce8d4699cdb
  );
}
export default App;
