import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = () => {
  const { user: connectedUser } = useAuth();

  const handleRedirect = () => {
    if (!connectedUser) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <>
      {handleRedirect()}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
