import { makeStyles, Typography ,Input,InputAdornment,IconButton,Avatar,Menu,MenuItem} from "@material-ui/core";
import {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";

function Header(props){
    console.log(props);
    const [anchorEl,setAnchorEl] = useState(null);

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
       "search-bar":{
           width:"300px",
           backgroundColor:"#c0c0c0",
           borderRadius:"4px",
           padding:".3rem"
       },
       "profile-pic":{
           border:"1px solid white"
       }
   });
   const classes = useStyles();

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
       <nav className={classes.nav}>
           <div>
                <Typography>
                    <span className={classes["logo-text"]}>Image Viewer</span>
                </Typography>
           </div>
           {
               (props.isLoggedIn === false || props.location.pathname === "/") ? null :
               <div className={classes["search-profilepic-container"]}>
               <Input className={classes["search-bar"]} type="search" placeholder='Search...' startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>} disableUnderline />
               <IconButton onClick={onProfilepicClick}>
                   <Avatar className={classes["profile-pic"]} variant="circle" alt="profile picture"  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"  />
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
          </div>
        }
       </nav>
   )
}

export default Header;
