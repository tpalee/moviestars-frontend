import React, {createContext, useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate();

    // MOUNTING EFFECT
    useEffect(() => {
        // get JWT
        const token = localStorage.getItem('token');

        // if token, get userData
        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    },[]);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT, '/movies');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('user logged out!');
        navigate('/movies');
    }


    async function fetchUserData(id, token, redirectUrl) {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const authorities=result.data.authorities;
            authorities.map((authority)=>{
                if(authority.authority==='ROLE_ADMIN'){
                    setIsAdmin(true);
            }
                else{
                    setIsAdmin(false)
                }
            })

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                },
                status: 'done',
            });


            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        isAdmin:isAdmin,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;