import {useState} from "react";
import {Route,Switch,useHistory, useLocation} from "react-router-dom";


import Login from "../../screens/login/Login";
import Home from "../../screens/home/Home";
import Header from "../header/Header";


function Controller(){
    const history = useHistory();
    const location = useLocation();

    const [isLoggedIn,setLoggedIn] = useState(()=>{
        return (sessionStorage.getItem("access-token")) ? true : false;
    });

    const changeLoggedInStatusHandler = (status)=>{
        setLoggedIn(status);
    }

    return(
        <div>
            <Header location={location} history={history} isLoggedIn={isLoggedIn} changeLoggedInStatusHandler={changeLoggedInStatusHandler}></Header>
            <Switch>
                <Route exact path="/">
                    <Login isLoggedIn={isLoggedIn} history={history} changeLoggedInStatusHandler={changeLoggedInStatusHandler} />
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
            </Switch>
        </div>
    )
}

export default Controller;