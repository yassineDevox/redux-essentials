import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = () => {
  const { user } = useAuth();

  const handleRedirect = () => {
    if (!user) {
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
