import React from 'react';
import { resetUserSession } from './service/AuthService';
// import SearchBar from "./components/SearchBar";
// import JSONDATA from './MOCK_DATA.json';
import Cards from './components/Cards';
import './App.css'
const BrowsePet = (props) => {
  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }
  return (
    <div className="App">
       <input type="button" value="Logout" onClick={logoutHandler} />
      {/* <SearchBar placeholder="Enter a Pet Breed" data={JSONDATA} /> */}
      <Cards/>
      
    </div>
    
  )
}

export default BrowsePet;