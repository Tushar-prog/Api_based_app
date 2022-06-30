import React,{useEffect,useState,useRef} from 'react';
import searchicon from '../../images/search-icon.svg';
import { Wrapper,Content } from './Search.styles';
import PropTypes from 'prop-types';
const SearchBar=({setSearchTerm})=>{
    const [state,setState]= useState('')
    const intial =useRef(true);

    useEffect(()=>{
        if(intial.current){
            intial.current=false;
            return;
        }
        const timer =setTimeout(()=>{
            setSearchTerm(state);
        },500)

        return ()=>clearTimeout(timer)
    },[setSearchTerm,state])
    return (
       
        <Wrapper>
            <Content>
                <img src = {searchicon} alt ='search-icon'/>
                <input
                type='text'
                placeholder ='Search Movie'
                onChange = {event =>setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
        
      
    );
};
SearchBar.propTypes = {
    callback: PropTypes.func
  };
  
export default SearchBar;