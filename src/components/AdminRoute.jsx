import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user || user.role !== 'admin') {
    // Not logged in, or logged in but not an admin — redirect away
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminRoute;