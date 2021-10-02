import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';

const useStyles=makeStyles({
    component:{
        marginTop:40
    },
    logout:{
        marginLeft:20,
        fontSize:14
    }
})
const Profile = ({account,setAccount}) => {
    const classes=useStyles();
const [open,setOpen]=useState(false);

const handleClose=()=>{
    setOpen(false);
}
const handleClick=(event)=>{
    setOpen(event.currentTarget)
}
const logout=()=>{
    setAccount("");
}
    return (
        <div>
           <Link><Typography style={{marginTop:4, color:'salmon'}} onClick={handleClick} >{account}</Typography></Link> 
            <Menu
               
                anchorEl={open}
                className={classes.component}
                open={Boolean(open)}
                onClose={handleClose}
                >
                <MenuItem onClick={()=>{handleClose();logout();}}>
                    <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon><Typography className={classes.logout}>Logout</Typography> 
                </MenuItem>
               
            </Menu>
        </div>
    );
};

export default Profile;