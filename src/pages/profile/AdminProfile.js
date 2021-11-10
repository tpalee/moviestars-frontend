import React, {useContext} from 'react';
import ShadowContainer from "../../components/shadowcontainer/ShadowContainer";
import {AuthContext} from '../../context/AuthContext';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Button from "../../components/buttons/Button";

function AdminProfile(props) {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    return (
        <ShadowContainer>
            <h2>Welcome {user.username}</h2>
            <div className="info-cont">
                <p>username: {user.username}</p>
                <p>email:{user.email}</p>
                <Button>Update user</Button>
            </div>

        </ShadowContainer>
    );
}

export default AdminProfile;