import React, {useContext} from 'react';
import {useNavigate, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateRoute({isAut, children, ...rest}){
    const {isAuth,isAdmin} = useContext(AuthContext);
    const navigate=useNavigate;

    return(
        <Route {...rest}>

            {isAuth && (isAdmin===false) ? children : navigate('/movies')}
        </Route>
    )
}

export default PrivateRoute;