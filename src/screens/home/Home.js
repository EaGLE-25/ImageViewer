import {useEffect, useState} from "react";

function Home(){
    // state
    const [userData,setUserData] = useState(null);

    const baseURL = 'https://graph.instagram.com';
    const accessToken = sessionStorage.getItem("access-token");

    const relativeResourceURL = `/me/media?fields=id,caption&access_token=${accessToken}`;
    const absoluteURL = `${baseURL}${relativeResourceURL}`;

    useEffect(()=>{
        if(!userData){
            (async()=>{
                let response = await fetch(absoluteURL);
                let responseJSON = await response.json();
        
                let userPosts = responseJSON.data;

                userPosts.forEach(async(userPost,index)=>{
                    let userSpecificPostURL = `/${userPost.id}?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`;
                    let URL = `${baseURL}${userSpecificPostURL}`;

                    let response = await fetch(URL);
                    let responseJSON = await response.json();

                    userPosts[index] = {...userPost,...responseJSON};
                });
                setUserData(userPosts);           
            })();
        }
    },[]);

    return (
        userData && 
        userData.map((post)=>{
            return(
            <span key={post.id}>
                {post.caption}
            </span>
            )
        })
    )
    
}

export default Home;