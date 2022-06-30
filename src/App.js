import React from 'react';
//components
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//styles
import {GlobalStyles} from './GlobalStyles';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App =()=>
    <Router>
      <Header/>
  <Routes>
    <Route path='/'exact element={<Home/>} />
    <Route path='/:movieId' exact element ={<Movie/>}/>
    <Route path='/*' exact element ={<NotFound/>}/>
  </Routes>
      
    
      <GlobalStyles/>
      </Router>
 

export default App;
