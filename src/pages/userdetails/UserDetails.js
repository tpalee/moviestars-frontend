import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ShadowContainer from "../../components/shadowcontainer/ShadowContainer";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

function UserDetails(props) {
    const {isAdmin} = useContext(AuthContext);
    const {userId}=useParams();
    const token = localStorage.getItem('token');
    const [loading,toggleLoading]=useState(false);
    const [error,toggleError]=useState(false);
    const [userInfo,setUserInfo]=useState({});
    const [movieData,setMovieData]=useState([]);
    const [reviewData,setReviewData]=useState([]);


    useEffect(()=>{
        toggleLoading(true);
        async function fetchUserData(){
console.log(userId)
            try {
                const result= await axios(`http://localhost:8080/users/${userId}`,{
                    headers: {
                        'Content-Type': "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })

setUserInfo(result.data);
            }

            catch(e){
                console.error("no userData fetched" + e)
                toggleError(true);
            }

        }
        fetchUserData()
        toggleLoading(false)
    },[])



    useEffect(()=>{
        toggleLoading(true);
        async function fetchMovieData(){

            try {
                const result= await axios(`http://localhost:8080/users/${userId}/movies`,{
                    headers: {
                        'Content-Type': "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(result.data);
                setMovieData(result.data)
            }
            catch(e){
                console.error("no userData fetched" + e)
                toggleError(true);
            }
        }
        fetchMovieData()
        toggleLoading(false)
    },[])


    return (
        <section className="position-cont-col">
            {loading && <span>loading</span>}
            {error && <span>something went wrong, data not loaded</span>}
            {isAdmin ? <h1>userdetails: {userId}</h1> : <h1>Welcome {userId}</h1>}
        <ShadowContainer>
        <p>{userInfo.username}</p>
        </ShadowContainer>
        </section>
    );
}

export default UserDetails;