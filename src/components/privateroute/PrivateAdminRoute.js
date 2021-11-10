import React, {useContext} from 'react';
import {useNavigate, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateAdminRoute({isAut, children, ...rest}){
    const {isAuth,isAdmin} = useContext(AuthContext);
    const navigate=useNavigate;


    return(
        <Route {...rest}>
            {isAuth && isAdmin ? children : navigate('/movies')}
        </Route>
    )
}

export default PrivateAdminRoute;