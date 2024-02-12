import { Navigate,Outlet,useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
const RequireAuth = () => { 
  const {auth} = useAuth();
  const location = useLocation();
  const user = {token:localStorage.getItem("token")??auth.token};
  return(
    user.token ? <Outlet/> : <Navigate to="/login" state={{from : location}} replace/>
  )
}
export default RequireAuth;