import {useHistory, NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Button from "../buttons/Button";
import {useContext} from "react";
import {useForm} from 'react-hook-form';
import styles from'./Nav.module.css';
/*import fontAwesome/Material Design logo's' from react-icons library*/
import {FaSearch, FaPlus, FaUser, FaUserCheck,FaUserTimes,FaUserPlus} from 'react-icons/fa';
import {MdLocalMovies } from "react-icons/md";
/*import images*/
import moviestarslogo from '../../assets/img/moviestarslogo.png';


function Nav({setSearchvalue}) {
    const history = useHistory();
    const {isAuth, logout,login,user} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    console.log(isAuth,user);


    function onFormSubmit(data){
        const{search}=data
      console.log(search);
      setSearchvalue(search)

    }


    return (
        /* nav-element holds all the navigation elements*/
        <nav className={styles.navcontainer}>
            {/* nav-beam created for the shape of the beam */}
            <div className={styles.navbeam}>
                <img src={moviestarslogo} alt="logo" className={styles.logonav}/>
            </div>
            {/*  holds all the navigation forms and buttons*/}
            <div className={styles.navigation}>

                {/* search form*/}
                <div id={styles['search-sort-container']}>
                    <form id={styles.searchcontainer} onSubmit={handleSubmit(onFormSubmit)}>
                        <label htmlFor="search">
                            <input type="text"
                                   id={styles.searchmovieinput}
                                   name="search"
                                   placeholder="search movietitle"
                                   {...register("search")}
                            />
                        </label>
                        <Button name="searchbutton" className={`${styles.navbutton} ${styles.searchbutton}`} type="submit">
                                    <FaSearch className={`${styles.icon} ${styles.search}`}/>
                                    <span className={styles.buttontextspan}>search</span>
                        </Button>
                    </form>
                </div>

                {/*buttons with navlinks*/}
                <div id={styles.navbuttons}>
                    {!isAuth ?
                        <>
                        <button
                            type="button"
                            onClick={() => history.push('/signin')}
                            name="login"
                            className={`${styles.navbutton} ${styles.loginbutton}`}>
                            <FaUser className={`${styles.icon} ${styles.login}`}/>
                            <span className={`${styles.buttontextspan} ${styles.logintext}`}>Login</span>
                        </button>
                        <button
                            name="signup"
                            onClick={() => history.push('/signup')}
                            className={`${styles.navbutton} ${styles.signupbutton}`}>
                            <FaUserPlus className={`${styles.icon} ${styles.signup}`}/>
                            <span className={`${styles.buttontextspan} ${styles.signuptext}`}>signup</span>
                        </button>
                    </>
                    :
                    <>
                        <button
                            name="add-movie"
                            onClick={() => history.push('/addmovie')}
                            className={`${styles.navbutton} ${styles.addmoviebutton}`}>
                            <FaPlus className={`${styles.icon} ${styles.search}`}/>
                            <span className={`${styles.buttontextspan} ${styles.addmovietext}`}>Add Movie</span>
                        </button>
                        <button
                            name="myprofile"
                            className={`${styles.navbutton} ${styles.myprofilebutton}`}>
                            <FaUserCheck className={`${styles.icon} ${styles.myprofile}`}/>
                            <span className={`${styles.buttontextspan} ${styles.myprofiletext}`}>My Profile</span>
                        </button>
                        <button
                            onClick={logout}
                            name="logout"
                            className={`${styles.navbutton} ${styles.logoutbutton}`}>
                            <FaUserTimes className={`${styles.icon} ${styles.logout}`}/>
                            <span className={`${styles.buttontextspan} ${styles.logouttext}`}>logout</span>
                        </button>
                        </>
                    }
                </div>
            </div>
        </nav>)
}

export default Nav;