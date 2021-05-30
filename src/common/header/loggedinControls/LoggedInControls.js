import { makeStyles} from "@material-ui/core";

import SearchBar from "../search/SearchBar";
import CustomAvatar from "../avatar/CustomAvatar";

function LoggedInControls(props){
    
    const useStyles = makeStyles({
        "search-profilepic-container":{
            width:"400px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }
    });
    const classes = useStyles();
    const loggedinControlsVisiblePaths = ["/home","/profile"];

    if(props.isLoggedIn && loggedinControlsVisiblePaths.includes(props.location.pathname)){
        return(
            <div className={classes["search-profilepic-container"]}>
                <SearchBar visibility = {()=>(props.location.pathname === "/home") ? "visible" :"hiden"} {...props}></SearchBar>
                <CustomAvatar history={props.history} changeLoggedInStatusHandler = {props.changeLoggedInStatusHandler}></CustomAvatar> 
            </div>
        )
    }else{
        return null;
    }
}

export default LoggedInControls;