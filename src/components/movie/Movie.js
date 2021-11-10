import React from 'react';
import'./Movie.css'
import {Link} from 'react-router-dom';
import defaultImage from '../../assets/img/defaultmovie.jpg'

function Movie({movieTitle, movieRating, movieImage, movieId}) {



    return (
        <Link className="movielink" key={movieId} to={'/movies/'+ movieId}>
        <article className="moviecontainer" >
            {movieImage==null ?
                <img className="movieImage" src={defaultImage} alt="movieimage"/>:
                <img className="movieImage" src={defaultImage} alt="movieimage"/>
           /*     <img src="data:image/jpeg;base64, http://localhost:8080/movies/1/images/1" alt="movieimage"/>*/
              /*  <img src={`"data:image/jpeg;base64,${movieImage.file}`}/>*/
            }

            <h2>{movieTitle}</h2>
            <p>rating:{movieRating}</p>
        </article>
        </Link>
    );
}

export default Movie;