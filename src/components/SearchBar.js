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
          <TextField         placeholder="Search"         value={searchTerm}         onChange={handleSearchChange}         className={classes.input}         InputProps={{           endAdornment: (             <InputAdornment position="end">               {searchTerm && (                 <IconButton onClick={clearSearch}>                   </IconButton>               )}             </InputAdornment>           ),         }}       />       <IconButton>         <SearchIcon />       </IconButton>     </div>   ); }; export default PrimarySearchAppBar;
// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import InputBase from '@mui/material/InputBase';
//import SearchIcon from '@mui/icons-material/Search';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

//  function PrimarySearchAppBar() {
 
  
//   return (
//     <Box sx={{ flexGrow: 1 }}>
     
        
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
      
     
     
//     </Box>
//   );
// }
// export default PrimarySearchAppBar;
