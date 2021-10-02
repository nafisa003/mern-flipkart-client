import { Box,makeStyles, Typography,Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';


const useStyles=makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
        '& > *':{
            marginTop:10,
            fontSize:14
        }
    },
    button:{
        marginTop:20,
        padding:'12px 70px',
        borderRadius:2,
        fontSize:14,
        backgroundColor:'#2874f0',
        color:'white'
    }
})
const EmptyCart = () => {
    const classes=useStyles()
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const history=useHistory();
    const addItem=()=>{
       history.push('/')
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptycarturl} className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <span>Add items to it now.</span>
                <br />
                <Button variant="contained" className={classes.button} onClick={()=>addItem() }>Shop Now</Button>
                
            </Box>
            
        </Box>
    )
};

export default EmptyCart;