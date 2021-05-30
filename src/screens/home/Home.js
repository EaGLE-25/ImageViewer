
import {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router";
import Post from "./post/Post";
import Header from "../../common/header/Header.js";

function Home(props){
    const history = useHistory();
    const location = useLocation();

    const baseURL = 'https://graph.instagram.com';
    const accessToken = sessionStorage.getItem("access-token");

    // state
    const [userData,setUserData] = useState(()=>[]);
    const [userDataCopy,setUserDataCopy] = useState(()=>userData);

    // functions
    const onSearchHandler = (pattern)=>{
        const searchResult = userDataCopy.filter((post)=>{
            if(post.caption !== undefined && post.caption.includes(pattern)){
                return post;
            }
        });


        if(pattern === ""){
            // reset to default
            setUserData(userDataCopy);
        }else{
            setUserData(searchResult);
        }
    }

    useEffect(()=>{
        if(userData.length === 0){
            const getMediaIDsURL = `/me/media?fields=id,caption&access_token=${accessToken}`;
            const absoluteURL = `${baseURL}${getMediaIDsURL}`;

            (async()=>{
                let response = await fetch(absoluteURL);
                let responseJSON = await response.json();
        
                let userPosts = responseJSON.data;

                userPosts.forEach(async(userPost,index)=>{
                    let idSpecificPostURL = `/${userPost.id}?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`;
                    let URL = `${baseURL}${idSpecificPostURL}`;

                    let response = await fetch(URL);
                    let responseJSON = await response.json();

                    userPosts[index] = {...userPost,...responseJSON};
                });
                setUserData(userPosts);
                setUserDataCopy(userPosts);           
            })();
        }
    },[]);

    return (
        <>
            <Header location={location} history={history}  onSearchHandler = {onSearchHandler} {...props}></Header>

        {
            userData.map((post)=>{
                return(
                    <Post {...post} key={post.id}></Post>
                )
            })
        }
        </>
    )
    
}

export default Home;