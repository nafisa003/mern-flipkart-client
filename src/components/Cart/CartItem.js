import React from 'react';
import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
// import { addEllipsis } from '../../utils/util';
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyles=makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
            margin: 20, 
            display: 'flex',
            flexDirection: 'column'
        },
       
    
    rightComponent:{
        margin: 20, 
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 110,
        width: 110
    },
    remove: {
        marginTop: 20,
        fontSize: 16
    },



})
const CartItem = ({item,removeItemFromCart}) => {
    const classes=useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    
    

   
   
    return (
        <Box>
       
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
              
              <img src={item.url} alt="" className={classes.image} />
               <GroupButton></GroupButton>
            </Box>
            
            <Box className={classes.rightComponent}>
                <Typography> {item.title.longTitle}</Typography>
                
                <Typography  className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop:10}}>Seller: SuperComnet
                <span><img src={fassured} alt="" style={{marginLeft:10,width:50}} /></span>
                
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>${item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>${item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography>
                <Button  className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>



        </Card>
        
        </Box>
    );
};

export default CartItem;