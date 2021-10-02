import { Box, makeStyles,Grid } from '@material-ui/core';
import React from 'react';
import { imageURL } from '../../constants/data';
import clsx from 'clsx';
const useStyles=makeStyles(theme=>({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}))
const MidSection = () => {
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    const classes=useStyles();
    return (
        <>
         <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={coronaURL} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} />
       
        </>
    );
};

export default MidSection;