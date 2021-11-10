import React, {useContext} from 'react';
import {useNavigate, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateRoute({isAut, children, ...rest}){
    const {isAuth} = useContext(AuthContext);
    const navigate=useNavigate;


    return(
        <Route {...rest}>
            {isAuth ? children : navigate('/movies')}
        </Route>
    )
}

export default PrivateRoute;