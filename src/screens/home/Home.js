import { Container, Grid } from "@material-ui/core";
import {useEffect, useState} from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import Header from "../../common/header/Header";
import Post from "./post/Post";

function Home(props){
    const history = useHistory();
    const location = useLocation();
    const profilePicURL = "data:image/png;base64,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";
    
    const [userData,setUserData] = useState([]);
    // immutable
    const [userDataCopy,setUserDataCopy] = useState(()=>[]);

    const onSearchHandler =(pattern)=>{
        if(pattern === ""){
            setUserData(userDataCopy);
        }

        const searchResults = userDataCopy.filter(post=>{
            if(post.caption !== undefined && post.caption.includes(pattern)){
                return post;
            }
            return false;
        });

        setUserData(searchResults);
    }


    useEffect(()=>{
        if(userData.length === 0){
            const baseURL = "https://graph.instagram.com/";
            const getMediaIDsURL = `me/media?fields=id,caption&access_token=${sessionStorage.getItem("access-token")}`;
            const URL = `${baseURL}${getMediaIDsURL}`;
    
            fetch(URL).then(res=>res.json()).then(resJSON=>{
                const userPosts = resJSON.data;
    
                userPosts.forEach((post)=>{
                    const getFullPostByIdURL = `${post.id}?fields=id,media_type,media_url,username,timestamp&access_token=${sessionStorage.getItem("access-token")}`;
                    const URL = `${baseURL}${getFullPostByIdURL}`;
    
                    fetch(URL).then(res=>res.json()).then(resJSON=>{
                        const fullPost = {...post,...resJSON};
                        setUserData(prevData=>{
                           return [...prevData,fullPost];
                        });
                        setUserDataCopy(prevData=>{
                            return [...prevData,fullPost];
                         });
                    })
    
                });
            })
        }
    },[])

    return( 
        (!sessionStorage.getItem("access-token")) ? <Redirect to="/"></Redirect> :
        <>
        <Header {...props} location={location} history={history} onSearchHandler={onSearchHandler} profilePicURL={profilePicURL}></Header>
        {
            userData.length && 
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {
                        userData.map(post=>{
                            return(
                                <Grid item sm={6} key={post.id}>
                                    <Post {...post} profilePicURL = {profilePicURL} location={location}></Post>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        }
        </>
    )
}

export default Home;