import SearchIcon from "@material-ui/icons/Search";
import { makeStyles,Input,InputAdornment} from "@material-ui/core";

function SearchBar(props){
    const useStyles = makeStyles({
        "search-bar":{
            width:"300px",
            backgroundColor:"#c0c0c0",
            borderRadius:"4px",
            padding:".3rem",
            visibility:props.visibility
        }
    });

    const classes = useStyles(); 
    return(
        <Input className={classes["search-bar"]} type="search" placeholder='Search...' startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>} disableUnderline />
    )
}

export default SearchBar;