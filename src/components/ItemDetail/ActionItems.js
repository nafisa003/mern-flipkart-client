
import React from 'react';
import { Box,Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import {ShoppingCart as Cart} from '@material-ui/icons';
import {FlashOn as Flash} from '@material-ui/icons';
import {addToCart} from '../../redux/actions/cartActions.js';
import { useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
const useStyles=makeStyles(theme=>({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF',
        marginRight:10
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}))
const ActionItems = ({product}) => {
    const classes=useStyles();

    const dispatch=useDispatch();
    const history=useHistory()
    const addItemToCart=()=>{
        dispatch(addToCart(product.id));
        history.push(`/cart`)
    };

    return (
       <Box className={classes.leftContainer}>
           <img src={product.detailUrl} alt="" className={classes.productImage} /><br />
           <Button  className={clsx(classes.button,classes.addToCart)} variant="contained" onClick={()=>addItemToCart()}><Cart></Cart>Add To Cart</Button>
         <Link to="/placeOrder" style={{textDecoration:'none'}}><Button className={clsx(classes.button,classes.buyNow)} variant="contained"><Flash></Flash>Buy Now!</Button>
         </Link>
       </Box>
    );
};

export default ActionItems;