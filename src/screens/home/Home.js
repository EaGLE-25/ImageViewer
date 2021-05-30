import {useEffect, useState} from "react";

function Home(){

    const [userData,setUserData] = useState([]);

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
                        })
                    })
    
                });
            })
        }
    },[])

    return(
        userData.length > 0 && <ul>
            {
                userData.map(post=>{
                    return(
                        <ul style={{border:"1px solid black"}}>
                            <li>{post.id}</li>
                            <li>{post.caption}</li>
                            <li>{post.media_url}</li>
                        </ul>
                    )
                })
            }
        </ul>
    )
}

export default Home;