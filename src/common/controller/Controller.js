import {useState} from "react";
import {Route,Switch,useHistory, useLocation} from "react-router-dom";


import Login from "../../screens/login/Login";
import Home from "../../screens/home/Home";



function Controller(){

    const [isLoggedIn,setLoggedIn] = useState(()=>{
        return (sessionStorage.getItem("access-token")) ? true : false;
    });

    const changeLoggedInStatusHandler = (status)=>{
        setLoggedIn(status);
    }

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Login isLoggedIn={isLoggedIn} changeLoggedInStatusHandler={changeLoggedInStatusHandler} />
                </Route>
                <Route exact path="/home">
                    <Home isLoggedIn={isLoggedIn} changeLoggedInStatusHandler={changeLoggedInStatusHandler}></Home>
                </Route>
            </Switch>
        </div>
    )
}

export default Controller;