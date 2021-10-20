import {useHistory, NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Button from "../buttons/Button";
import {useContext} from "react";
import {useForm} from 'react-hook-form';
import './Nav.css';
/*import fontAwesome/Material Design logo's' from react-icons library*/
import {FaSearch, FaPlus, FaUser, FaUserCheck,FaUserTimes,FaUserPlus} from 'react-icons/fa';
import {MdLocalMovies } from "react-icons/md";
/*import images*/
import moviestarslogo from '../../assets/img/moviestarslogo.png';


function Nav({setSearchvalue}) {
    const history = useHistory();
    const {isAuth, logout} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();


    function onFormSubmit(data){
        const{search}=data
      console.log(search);
      setSearchvalue(search)

    }


    return (
        /* nav-element holds all the navigation elements*/
        <nav className="navcontainer">
            {/* nav-beam created for the shape of the beam */}
            <div className="navbeam">
                <img src={moviestarslogo} alt="logo" className="logonav"/>
            </div>
            {/*  holds all the navigation forms and buttons*/}
            <div className="navigation">

                {/* search form*/}
                <div id="search-sort-container">
                    <form id="searchcontainer" onSubmit={handleSubmit(onFormSubmit)}>
                        <label htmlFor="search">
                            <input type="text"
                                   id="searchmovie-input"
                                   name="search"
                                   placeholder="search movietitle"
                                   {...register("search")}
                            />
                        </label>
                        <Button name="searchbutton" className="navbutton searchbutton" type="submit" id="searchbutton">
                                   <span>
                                    <FaSearch className="icon search"/>
                                    <span className="buttontext-span">search</span>
                                       </span>
                        </Button>
                    </form>
                </div>

                {/*buttons with navlinks*/}
                <div id="navbuttons">
                    {!isAuth &&
                    <NavLink className="navlink" to="/login">
                        <Button
                            name="login"
                            className="navbutton loginbutton">
                            <FaUser className="icon login"/>
                            <span className="buttontext-span logintext">Login</span>
                        </Button>
                    </NavLink>}
                    {!isAuth &&
                    <NavLink className="navlink" to="/signup">
                        <Button
                            name="signup"
                            className="navbutton signupbutton">
                            <FaUserPlus className="icon signup"/>
                            <span className="buttontext-span signuptext">signup</span>
                        </Button>
                    </NavLink>}
                    {isAuth &&
                    <NavLink className="navlink" to="/addmovie">
                        <Button
                            name="add-movie"
                            className="navbutton addmoviebutton">
                            <FaPlus className="icon search"/>
                            <span className="buttontext-span addmovietext">Add Movie</span>
                        </Button>
                    </NavLink>}
                    {isAuth &&
                    <NavLink className="navlink" to="/profile">
                        <Button
                            name="myprofile"
                            className="navbutton myprofilebutton">
                            <FaUserCheck className="icon myprofile"/>
                            <span className="buttontext-span myprofiletext">My Profile</span>
                        </Button>
                    </NavLink>}
                    {isAuth &&
                    <NavLink className="navlink" exact to="/">
                        <Button
                            name="logout"
                            className="navbutton logoutbutton">
                            <FaUserTimes className="icon logout"/>
                            <span className="buttontext-span logouttext">logout</span>
                        </Button>
                    </NavLink>}
                </div>
            </div>
        </nav>)
}

export default Nav;