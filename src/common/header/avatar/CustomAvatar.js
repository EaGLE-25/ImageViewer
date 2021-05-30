import { Fragment,useState} from "react";
import {IconButton,Avatar,Menu,MenuItem,makeStyles} from "@material-ui/core";


function CustomAvatar(props){
    const useStyles = makeStyles({
        "profile-pic":{
            border:"1px solid white"
        }
    });
    const classes = useStyles();

    const [anchorEl,setAnchorEl] = useState(null);

    const onProfilepicClick=(e)=>{
        setAnchorEl(e.currentTarget);
    }
 
    const handleClose = () => {
         setAnchorEl(null);
   };

   const onLogout = ()=>{
    sessionStorage.removeItem("access-token");
    props.changeLoggedInStatusHandler(false);  
    props.history.push("/");
  }
    return(
        <Fragment>
            <IconButton onClick={onProfilepicClick}>
                   <Avatar className={classes["profile-pic"]} variant="circle" alt="profile picture"  src={props.profilePicURL}/>
               </IconButton>
               <Menu
                   anchorEl={anchorEl}
                   onClose={handleClose}
                   keepMounted
                   open={Boolean(anchorEl)}
                   getContentAnchorEl={null}
                   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                   transformOrigin={{ vertical: "top", horizontal: "center" }}
               >
                   <MenuItem onClick={handleClose}>My account</MenuItem>
                   <MenuItem onClick={onLogout}>Logout</MenuItem>
               </Menu>
        </Fragment>
    )
}

export default CustomAvatar;