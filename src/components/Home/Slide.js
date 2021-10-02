import { Box, makeStyles,Typography,Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { products } from '../../constants/data';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const useStyles=makeStyles(theme=>({
    image:{
        height:150,
    },
    component:{
        backgroundColor:'white',
        marginTop:12
    },
    deal:{
        padding:'15px 20px',
        display:'flex'
    },
    dealText:{
        fontWeight:600,
        fontSize:22,
        lineHeight:'32px',
        marginRight:25
    },
    timer:{
        color:'#7f7f7f',
        marginLeft:10,
        display:'flex',
        alignItems:'center'
    },
    button:{
        marginLeft:'auto',
        color:'white',
        fontSize:13
    },
    text:{
        fontSize:14,
        marginTop:5
    },
    wrapper:{
        padding:'26px 15px'
    },
    timer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slide = ({timer,title,products}) => {
    const classes=useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        
          // Render a countdown
          return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left!</span>;
        
      };

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
            <Typography style={{fontWeight:700}}>{title}</Typography>
            {
                timer && 
                <Box className={classes.timer}>
                <img src={timerURL} alt="" style={{width:'24px'}} />
               <Countdown date={Date.now() + 4.32e+7} renderer={renderer} className={classes.dealText} />
               </Box>
             }
               <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            
               
            
            </Box>
            <Divider />
        <Carousel responsive={responsive} infinite={true} draggable={false} swipeable={false}
        centerMode={true} autoPlay={true} autoPlaySpeed={10000} keyBoardControl={true}
        // removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
           {
               products.map(pd=>(
                   <Link to={`product/${pd.id}`}>
                   <Box textAlign="center" className={classes.wrapper}>
                       <img src={pd.url} className={classes.image} alt="" />
                       <Typography className={classes.text} style={{fontWeight:600,color:'#212121'}} >{pd.title.shortTitle} </Typography>
                       <Typography  className={classes.text} style={{color:'green'}} >{pd.discount}</Typography>
                       <Typography  className={classes.text} style={{color:'#212121',opacity:'0.6'}}>{pd.tagline}</Typography>
                   </Box>
                   </Link>
               ))
           }
        </Carousel>
        </Box>
    );
};

export default Slide;