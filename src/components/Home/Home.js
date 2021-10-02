import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import { Box, makeStyles} from '@material-ui/core';
import Slide from './Slide';
import MidSection from './MidSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts  as listProducts} from '../../redux/actions/productActions';
// import { products } from '../../constants/data';
const useStyles=makeStyles(theme=>({
     component:{
         padding:10,
         backgroundColor:'#f2f2f2'
     },
     rightWrapper:{
        padding:5,
        backgroundColor:'white',
        margin:'12px 0 0 10px',
        width:'17%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
     },
     leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
}))

const Home = () => {
    const classes=useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const dispatch=useDispatch();
    const {products}=useSelector(state=>state.getProducts)
  
    
    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])
   

    return (
        <div>
           <NavBar></NavBar> 
           <Box className={classes.component}>
           <Banner></Banner>
           <Box style={{display:'flex'}}>
               <Box className={classes.leftComponent}>
               <Slide timer={true} title="Deal of the Day!" products={products}></Slide>
               </Box>
               <Box className={classes.rightWrapper}>
                   <img src={adURL} style={{width:200}} alt="" />
               </Box>
           </Box>
           <MidSection></MidSection>
           <Slide timer={false} title="Discounts for You!" products={products}></Slide>
           <Slide timer={false} title="Suggested Items!" products={products}></Slide>
           <Slide timer={false} title="Recommendations!" products={products}></Slide>
           <Slide timer={false} title="Top Selection!" products={products}></Slide>
           <Slide timer={false} title="BestSellers!" products={products}></Slide>
           
           </Box>
           
        </div>
    );
};

export default Home;