import { Navigate } from "react-router-dom";
import { useAuth } from '../../contexts/authContext';


const PrivateRoute = ({ component: Component }) => {
    const { currentUser } = useAuth();

    return (
        currentUser ? <Component /> : <Navigate to="/login" replace></Navigate>
    )
}

export default PrivateRoute;