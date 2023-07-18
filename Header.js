import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className = 'header'> 
    
    <img
         className = "header_logo" 
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png"
         onclick="location.href = 'https://www.honeywell.com/us/en';"
         alt=""
    ></img>


    
    
    <div className='header_search'>
    <input className='header_searchInput' type='text'></input>
    <SearchIcon
    className='header_searchIcon'/>
    </div>

    <nav>
        <ul>
            <li><a href="https://www.honeywell.com/us/en"><b>Home </b></a></li>
            <li class="dropdown">
                <a href="#"><b>About</b></a>
                <ul class="dropdown-menu">
                    <li><a href="#" color='white'><b>Careers</b></a></li>
                    <li><a href="#"><b>Company</b></a></li>
                </ul>
            </li>
            <li><a href="#"><b>Contact</b></a></li>
        </ul>
    </nav>

    <div className='header_nav'> 

    {/* <div className= 'header_option'>
      <span className='header_optionLineOne'>Hello Guest</span>
      <span className='header_optionLineTwo'>Sign in</span>
    </div> */}

    </div>

    </div>
  );
}

export default Header
