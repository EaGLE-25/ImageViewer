import {useState} from "react";
import {Route,Switch,useHistory} from "react-router-dom";


import Login from "../../screens/login/Login";


function Controller(){
    const history = useHistory();

    const [isLoggedIn] = useState(()=>{
        const accessToken = sessionStorage.getItem("access-token");

        return (!accessToken)?false:true;
    });

    return(
        <Switch>
            <Route exact path="/">
                <Login isLoggedIn={isLoggedIn} history={history}/>
            </Route>
            <Route exact path="/home">
                HOME
            </Route>
        </Switch>
    )
}

export default Controller;