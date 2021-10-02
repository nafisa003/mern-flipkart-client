import React from 'react';
import { Box,Button, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoginDialog from '../Login/Login';
import { useState } from 'react';
import { useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const useStyle=makeStyles(theme=>({
    login:{
        backgroundColor:'white',
        color:'#2874f0',
        textTransform:'unset',
        fontWeight:600,
        borderRadius:2,
        padding:'5px 40px',
        boxShadow:'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }  
    },
    wrapper:{
        margin:'0 5% 0 auto',
        display:'flex',
        '& > *':{
            marginRight:50,
            fontSize:12,
            alignItems:'center',
            textDecoration:'none',
            color:'white',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                display:'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 10
            },   
        
        }, 
       
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }     
  },
  container:{
            display:'flex',
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            }
        },
    
}));
const HeaderButtons = () => {
    const classes=useStyle();
    const [open,setOpen]=useState(false);
    const [account,setAccount]=useContext(LoginContext)
    const openLoginDialog=()=>{
        setOpen(true);
    }
   const {cartItems}=useSelector(state=>state.cart)
    return (
       <Box className={classes.wrapper}>
           {
           account?<Profile account={account} setAccount={setAccount}></Profile>
           :<Link to="">
               <Button onClick={()=>openLoginDialog()} variant="contained" className={classes.login}>Login</Button>
               </Link>
           
           
           }
           <Link to=""> <Typography style={{marginTop:5}}>More</Typography></Link>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart></ShoppingCart>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}></LoginDialog>
       </Box>
    );
};

export default HeaderButtons;