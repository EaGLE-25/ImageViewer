import "./Login.css";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardContent, FormControl, InputLabel,Input,FormHelperText, makeStyles, Button } from '@material-ui/core';
import {useEffect, useState} from "react";
import { useHistory } from "react-router";
import Header from "../../common/header/Header";

const useStyles = makeStyles({
  loginContainer:{
    display:"flex",
    justifyContent:"center",
    height:"70vh",
    alignItems:"center"
  },
  loginCard:{
    padding:"2rem",
    width:"50%"
  },
  title:{
    padding:"1rem"
  },
  formControl:{
    width:"100%",
    marginBottom:"2rem"
  },
  formHelper:{
    color:"red",
  },
  hide:{
    display:"none"
  }
})

function Login(props){
  const history = useHistory();

  const classes = useStyles();

  let [username,setUsername] = useState(null);
  let [password,setPassword] = useState(null);

  let [usernameHelperVisibility,setUsernameHelperVisibility] = useState("hide");
  let [passwordHelperVisibility,setPasswordHelperVisibility] = useState("hide");

  let [incorrectCredsHelperVisibility,setIncorrectCredsHelperVisibility] = useState("hide");
  

  useEffect(()=>{
    if(username){
      updateUsernameHelper();
    }
  },[username]);

  useEffect(()=>{
    if(password){
      updatePasswordHelper();
    }
  },[password]);


  function onLogin(e){
    if(!username){
      updateUsernameHelper();
    }
    if(!password){
      updatePasswordHelper();
    }

    const mockUsername = "saidarshan";
    const mockPassword = "R@mb02501";
    const accessToken = "IGQVJYbnFvOFdnWWYzZAk92cTVGRE9VaU1aZA2twR2d3V094bTJVNXhpOWNaSlBIZAXZAwTGp1ZA1RqbDR1a1poNmx1dE12YW55YkRJOUFpMXRUMG1qOXBtTFdWWEhkQlgzRnAydy11eXBWX2VWVGVxdW9EQQZDZD";
    // const accessToken = "IGQVJVNFZAnZAldVYUVIVXRzVXZAtZAGlBUWNoYkJRSzJYUG5DbDkwWExJNzNUYUlTZAEdzSGxlMTlYSzVYSDJNTklfVFFIYnNwTk9wOHl3TFJBVFoxZA3RmWWs3X3FwTVFLU2ZAoa3VmT1lqY3JkY1VsRURJawZDZD";

    if((username && password)){
      if(username === mockUsername && password === mockPassword){
        sessionStorage.setItem("access-token",accessToken);
        props.changeLoggedInStatusHandler(true);
        history.push("/home");
      }else{
        setIncorrectCredsHelperVisibility("show");
      } 
    }
  }

  function updateUsernameHelper(){
    if(!username){
      setUsernameHelperVisibility("show");
    }else{
      setUsernameHelperVisibility("hide");
    }
  }

  function updatePasswordHelper(){
    if(!password){
      setPasswordHelperVisibility("show");
    }else{
      setPasswordHelperVisibility("hide");
    }
  }

  return (
    <>
      <Header {...props}></Header>
      <Container className={classes.loginContainer}>
      <Card className={classes.loginCard}>
          <Typography component="header" className={classes.title}>
            LOGIN
          </Typography>
          <CardContent>
            <FormControl className={classes.formControl} requried="true">
              <InputLabel htmlFor="username">Username *</InputLabel>
              <Input id="username" onChange={(e)=>setUsername(e.target.value)} type="text" />
              <FormHelperText className={`${classes.formHelper} ${usernameHelperVisibility}`}>
                <span>required</span>
              </FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} requried="true">
              <InputLabel htmlFor="password">Password *</InputLabel>
              <Input id="password" onChange={(e)=>setPassword(e.target.value)} type="password"/>
              <FormHelperText className={`${classes.formHelper} ${passwordHelperVisibility}`}>
                <span>required</span>
              </FormHelperText>
            </FormControl>
            <FormHelperText className={`${classes.formHelper} ${incorrectCredsHelperVisibility}`} style={{marginBottom:"1rem"}}>Incorrect username or password</FormHelperText>
            <Button variant="contained" color="primary" onClick={onLogin}>
              LOGIN
            </Button>
          </CardContent>
      </Card>
    </Container>
    </>
  );
}

export default Login;
