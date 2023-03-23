import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const AdminRoute = () => {
    
    const user = useSelector(state => state.user.userProfile);
    // let auth = {'token':false};
    return(
        user.role === 'admin' ? <Outlet/> : <Navigate to="/404"/>
    );
}

export default AdminRoute;