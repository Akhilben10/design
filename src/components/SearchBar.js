import React from 'react'; import { TextField, IconButton, InputAPrimarySearchAppBardornment, makeStyles } from '@material-ui/core'; 
//import SearchIcon from '@material-ui/icons/Search'; 
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
// import CloseIcon from '@material-ui/icons/Close'; 
const useStyles = makeStyles((theme) => ({  
   searchContainer: {   
    width:'400px',
    display: 'flex',
    marginLeft:'',  
       alignItems: 'center', 
           border: '1px solid #ccc',   
             borderRadius: '10px',  
                backgroundColor: '#fff', 
                    padding: theme.spacing(0, 2), 
                    underline:'false',
                    },  
   input: {     
    flex: 1,  
    borderBottom:'none',
    borderBottomWidth:'none',
          outline: 'none',  
         }, })); 
const PrimarySearchAppBar = ({ searchTerm, handleSearchChange, clearSearch }) => {  
   const classes = useStyles();  
    return (     <div className={classes.searchContainer}> 
          <TextField         placeholder="Search"         value={searchTerm}         onChange={handleSearchChange}         className={classes.input}         InputProps={{ underline: false,          endAdornment: (             <InputAdornment position="end">               {searchTerm && (                 <IconButton onClick={clearSearch}>                   </IconButton>               )}             </InputAdornment>           ),         }}       />       <IconButton>         <SearchIcon />       </IconButton>     </div>   ); }; export default PrimarySearchAppBar;
