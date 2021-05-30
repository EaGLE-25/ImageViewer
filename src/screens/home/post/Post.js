import {useState} from "react";
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton,Typography, makeStyles} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
})

function Post(props){
    console.log(props);
    const classes = useStyles();
    return(
    <Card>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={props.post.profilepicURL}>  
          </Avatar>
        }
        title={props.post.username}
      />
      <CardMedia
        className={classes.media}
        image={props.post.media_url}
       />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {props.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
       </CardActions>
    </Card>
    );
}

export default Post;