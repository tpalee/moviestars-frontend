import {useState} from "react";
import './App.css';
import PrivateRoute from "./components/privateroute/PrivateRoute";
import PrivateAdminRoute from "./components/privateroute/PrivateAdminRoute";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Nav from "./components/nav/Nav";

import Movies from "./pages/movies/Movies";
import Signin from "./pages/login/Signin";
import Signup from "./pages/signup/Signup";
import AddMovie from "./pages/addmovie/AddMovie";
import UserProfile from "./pages/profile/UserProfile";
import AdminProfile from "./pages/profile/AdminProfile";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import AddReview from "./pages/addReview/AddReview";
import UpdateReview from "./pages/updateReview/UpdateReview";



function App() {
    const [searchvalue, setSearchvalue] = useState(null);

    return (
        <div className="App">
            <header>
                <Nav searchvalue={searchvalue} setSearchvalue={setSearchvalue}/>
            </header>
            <main>
                <Routes>
                    <Route path="/movies" element= {<Movies/>}/>
                    <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                    <Route path="/signin" element= {<Signin/>}/>
                    <Route path="/signup" element= {<Signup/>}/>
                    <PrivateRoute path="/addmovie" element={<AddMovie/>}/>
                    <PrivateRoute path="/profile" element={<UserProfile/>}/>
                    <PrivateRoute path="/addreview" element={<AddReview/>}/>
                    <PrivateRoute path="/updatereview/:reviewId" element={<UpdateReview/>}/>
                    <PrivateRoute path="/user/profile" element={<UserProfile/>}/>
                    <PrivateAdminRoute path="/admin/profile" element={<AdminProfile/>}/>
                </Routes>
            </main>


        </div>

    );
}

export default App;
