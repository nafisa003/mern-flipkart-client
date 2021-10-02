import { Box,makeStyles,Typography } from '@material-ui/core';
import React from 'react';
import { navData } from '../../constants/data';


const useStyles=makeStyles(theme=>({
     component:{
         display:'flex',
         margin:'55px 130px 0 130px',
         justifyContent:'space-between',
         overflowX:'overlay',
         [theme.breakpoints.down('md')]: {
            margin: 0
        }

     },
     container:{
         textAlign:'center'
     },
     image:{
         width:'64px'
     },
     text:{
         fontSize:14,
         fontWeight:600
     }
}));
const NavBar = () => {
    const classes=useStyles();
    return (
        
        <Box className={classes.component}>
            {
            navData.map(data=>(
                <Box className={classes.container}>
                 <img src={data.url} alt="" className={classes.image} />
                 <Typography className={classes.text}>{data.text} </Typography>
                </Box>
            ))
            }
            
        </Box>
    );
};

export default NavBar;