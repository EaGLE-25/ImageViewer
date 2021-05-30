import { makeStyles, Typography} from "@material-ui/core";

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
       },
       "search-profilepic-container":{
           width:"400px",
           display:"flex",
           justifyContent:"space-between",
           alignItems:"center"
       },
       "profile-pic":{
           border:"1px solid white"
       }
   });
   const classes = useStyles();

   return(
       <nav className={classes.nav}>
           <div>
                <Typography>
                    <span className={classes["logo-text"]}>Image Viewer</span>
                </Typography>
           </div>
           <LoggedInControls {...props}></LoggedInControls>
       </nav>
   )
}

export default Header;
