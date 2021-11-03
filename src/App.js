import {useEffect, useState} from "react";
import './App.css';
import PrivateRoute from "./components/privateroute/PrivateRoute";
import {
    Switch,
    Route,
} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import axios from "axios";
import Movies from "./pages/movies/Movies";
import Signin from "./pages/login/Signin";
import Signup from "./pages/signup/Signup";
import AddMovie from "./pages/addmovie/AddMovie";
import Profile from "./pages/profile/Profile";


function App() {
    const [searchvalue, setSearchvalue] = useState(null);

    return (
        <div className="App">
            <header>
                <Nav searchvalue={searchvalue} setSearchvalue={setSearchvalue}/>
            </header>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Movies/>
                    </Route>
                    <Route path="/signin">
                        <Signin/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <PrivateRoute path="/addmovie">
                        <AddMovie/>
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <Profile/>
                    </PrivateRoute>
                </Switch>
            </main>


        </div>

    );
}

export default App;
