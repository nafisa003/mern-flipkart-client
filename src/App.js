import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailView from './components/ItemDetail/DetailView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import  TemplateProvider  from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import { Box } from '@material-ui/core';
import ProcessPayment from './components/ProcessPayment/ProcessPayment';
function App() {

  return (
    
    <TemplateProvider>
      <ContextProvider>
       <Router>
         <Header></Header>
           <Box style={{marginTop:54}}>

         <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/cart">
            <Cart></Cart>
            </Route>
            <Route  path="/product/:id" component={DetailView}>
            
            </Route>
            <Route path='/placeOrder'>
                <ProcessPayment></ProcessPayment>
            </Route>

         </Switch>
         </Box>
       </Router>
       </ContextProvider>
       </TemplateProvider>
  );
}

export default App;
