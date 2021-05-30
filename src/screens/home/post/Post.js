import {useState} from "react";
import {Divider,Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton,Typography, makeStyles, Container, TextField, Button} from "@material-ui/core";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import "./Post.css";

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundSize:"contain"
    },
    card:{
      height:"45rem"
    }
})

function Post(props){
    const [numberOfLikes,setNumberOfLikes] = useState(0);
    const [isLiked,setIsLiked] = useState(false);

    const [commentArray,setCommentArray] = useState([]);
    const [comment,setComment] = useState(null);
    
    const likeHandler = ()=>{
      if(isLiked === false){
        setNumberOfLikes(prevLike=>prevLike+1);
        setIsLiked(true);
      }else{
        setNumberOfLikes(prevLike=>prevLike-1);
        setIsLiked(false);
      }
    }

    const addCommentHandler=(e)=>{
      if(!comment) return;
      setCommentArray(prevArray=>{
          setComment(" ");
          return [...prevArray,comment];
      })
    }

    const classes = useStyles();
    const date = new Date(props.timestamp).toLocaleDateString();
    return(
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={props.profilePicURL}>  
          </Avatar>
        }
        title={props.username}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={props.media_url}
       />
      <Divider style={{marginTop:".5rem",marginBottom:".5rem"}}/>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p" noWrap="true" title={props.caption}>
          {props.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={likeHandler}>
          {(isLiked) ? <FavoriteIcon style={{color:"red"}}/> : <FavoriteBorder />}
        </IconButton>
        <Typography>
          <span>{numberOfLikes} Likes</span>
        </Typography>
       </CardActions>
       <div style={{height:"6rem",width:"100%",padding:"1rem",overflow:"hidden",overflowY: "scroll"}}>
          {
            commentArray.map(comment=>{
               return (
                 <Typography>
                 <span>
                   <Typography variant="p" style={{fontWeight:600}}>{props.username}: </Typography>
                   <span>{comment}</span>
                 </span>
                 </Typography>
               )
            })
          }  
        </div>
        <div style={{width:"100%",padding:"1rem",display:"flex",alignItems:"center"}}>
          <TextField value={comment} label="Add Comment" style={{width:"80%"}} onChange={(e)=>setComment(e.currentTarget.value)} />
          <Button variant="contained" color="primary" onClick={addCommentHandler}>Add</Button>
        </div>
    </Card>
    );
}

export default Post;