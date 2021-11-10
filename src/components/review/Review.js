import React, {useContext, useEffect, useState} from 'react';
import ShadowContainer from "../shadowcontainer/ShadowContainer";
import Button from "../buttons/Button";
import {AuthContext} from '../../context/AuthContext';
import '../review/Review.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Review({review, reviewRating, badLanguage, reviewer, reviewId}) {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    let color="grey";
    const [reviewInfo, setReviewInfo] = useState(
        {
            review,
            reviewRating,
            badLanguage,
            reviewer,
            reviewId,
        });
    const id=reviewId;


    async function badLanguageHandler() {
        try {
            const result = await axios.patch(`http://localhost:8080/reviews/${id}/badlanguage`, {
                    badLanguage: !badLanguage,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )

        } catch (e) {
            console.error(e);
        }
        navigate(`/movies`)
    }

    if((badLanguage)){
        color="red"
    }
    else{
        color="grey"
    }


    return (
        <ShadowContainer className={`review-cont-${color}`}>
            <p>{review}</p>
            <p>{reviewRating}</p>
            <p>{reviewer}</p>
            {user !== null && reviewer === user.username &&
            <Button
                className="green-btn"
                handleClick={() => {
                    navigate(`/updatereview/${reviewId}`, {state: reviewInfo})
                }}>update Review</Button>}
            <Button
                className="green-btn"
                handleClick={badLanguageHandler}>report harmful content</Button>
        </ShadowContainer>
    );
}

export default Review;