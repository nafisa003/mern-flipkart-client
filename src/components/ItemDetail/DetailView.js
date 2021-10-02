
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import LocalOfferIcon  from '@material-ui/icons/LocalOffer';
import { Box, makeStyles,Table,Typography,TableBody,TableRow,TableCell,Grid } from '@material-ui/core';
import clsx from 'clsx';
import ActionItems from './ActionItems';
import ProductDetail from './ProductDetail';


const useStyles=makeStyles(theme=>({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign:'baseline',
        '& > *':{
        fontSize: 14,
        marginTop:10
        }
    },

    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badge:{
        fontSize:14,
        marginRight:10,
        color:'#00cc00'
    }
}))

const DetailView = ({match}) => {
//    console.log(match)
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const classes=useStyles();
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const productDetails=useSelector(state=>state.getProductDetails);
    
    const {product}=productDetails;
    const dispatch=useDispatch();

    useEffect(()=>{
         
        dispatch(getProductDetails(match.params.id))
    },[dispatch])
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <Box className={classes.component}>
    { product && Object.keys(product).length &&
        <Grid container className={classes.container}>
            <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product}></ActionItems>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                <Typography>{product.title.longTitle}</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                    8 ratings & 1 
                    <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                            <span className={classes.price}>${product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>${product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                   <ProductDetail product={product}></ProductDetail>
                   </Grid>
               
        </Grid>
    }
        </Box>
    );
};

export default DetailView;