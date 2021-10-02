import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';
import { Toolbar,Typography,Box,IconButton,Drawer, List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Menu } from '@material-ui/icons';


///components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles=makeStyles(theme=>({
    header:{
        backgroundColor:'#2874f0',
        height:55
    },
    logo:{
        width:'75px'
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex', 
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'white'
    },
    subHeading:{
        fontStyle:'italic',
        fontSize:10
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }

}));

const ToolBar=withStyles({
    root:{
    minHeight:55
    }
})(Toolbar);
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes=useStyles();

    const [open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    };
    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                   <HeaderButtons></HeaderButtons>
                </listItem>
            </List>
        </Box>
    );
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton color="inherit"
                className={classes.menuButton}
                onClick={handleOpen}>
                    <Menu></Menu>
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to="/" className={classes.component}>
                    <img className={classes.logo} src={logoURL} alt="" />
                    <Box className={classes.container}>
                    <Typography className={classes.subHeading}>Explore <span style={{color:'#ffe500'}}>Plus</span> </Typography>
                    <img className={classes.subURL} src={subURL} alt="" />
                    </Box>
                </Link>
                <SearchBar></SearchBar>
               <span  className={classes.customButtons}><HeaderButtons></HeaderButtons> </span> 
               
            </ToolBar>
           


            
        </AppBar>
    );
};

export default Header;