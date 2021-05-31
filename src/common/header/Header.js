import { makeStyles, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";

import LoggedInControls from "./loggedinControls/LoggedInControls";


function Header(props){    
   const useStyles = makeStyles({
       nav:{
           backgroundColor:"#263238",
           width:"100%",
           height:"50px",
           display:"flex",
           alignItems:"center",
           justifyContent:"space-between",
           padding:"2rem 2rem",
           marginBottom:"2rem",
       },
       "logo-text":{
            color:"white",
            fontSize:"18px",
            fontWeight:100
       }
   });
   const classes = useStyles();

   return(
       <nav className={classes.nav}>
           <div>
                <Typography>
                    <Link to="/home" style={{textDecoration:"none",color:"white"}}>
                        <span className={classes["logo-text"]}>Image Viewer</span>
                    </Link>
                </Typography>
           </div>
           <LoggedInControls {...props}></LoggedInControls>
       </nav>
   )
}

export default Header;
