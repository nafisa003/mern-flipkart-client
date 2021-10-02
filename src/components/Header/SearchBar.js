import React, { useState } from 'react';
import { makeStyles,fade } from '@material-ui/core/styles';
import {Search} from '@material-ui/icons';
import { InputBase,List,ListItem } from '@material-ui/core';
// import { fade } from '@material-ui/cor';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts  as listProducts} from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';


const useStyles=makeStyles((theme)=>({
    search: {
        borderRadius:theme.shape.borderRadius,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display:'flex',
        color:'black'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'gray'
      },
      inputRoot: {
       fontSize:'unset',
        width:'100%'
      },
      inputInput: {
        paddingLeft:20
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36
      }
}));
const SearchBar = () => {
    const classes=useStyles();

    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)
    const dispatch=useDispatch();
    const {products}=useSelector(state=>state.getProducts)
  
    
    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])

    const getText = (text) => {
      setText(text);
      setOpen(false);
  }
   
    return (
        <div className={classes.search}>
        
        <InputBase
          placeholder="Search for products,brands and more"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => getText(e.target.value)}
        />

        <div className={classes.searchIcon}>
          <Search />
        </div>
        {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
      </div>
    );
};

export default SearchBar;