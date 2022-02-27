import { Container } from 'react-bootstrap';
import '../app.css';
import { AuthProvider } from '../contexts/authContext';
import Signup from './signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './dashboard';
import Login from './login';

function App() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
export default App;
