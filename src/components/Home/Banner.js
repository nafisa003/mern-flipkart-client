import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, makeStyles } from '@material-ui/core'
import { bannerData } from '../../constants/data';


const useStyles=makeStyles(theme=>({
    image:{
        width:'100%',
        height:280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    },
    carousel:{
        marginTop:10
    }
}))
const Banner = () => {
    const classes=useStyles();
    return (
        <div>
            <Carousel
                autoPlay={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style:{
                        backgroundColor:'white',
                        color:'#494949',
                        margin:0,
                        borderRadius:0
                    }
                }
                }
                className={classes.carousel}
                >
            {
                bannerData.map( el=><img src={el} alt="" className={classes.image}/>  )
            }
          </Carousel>
        </div>
    );
};

export default Banner;