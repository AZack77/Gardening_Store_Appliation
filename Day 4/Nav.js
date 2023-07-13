import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './nav.css'
import {NavLink,Link} from 'react-router-dom';
import im from '../images/leaf211-removebg-preview.png'

const Nav = ()=>
{
    return(
        <div className='navbar'>
          
                {/* <img className='im' src={im}></img> */}
                <NavLink to='/home' className='name'><h4>Urban Eden</h4></NavLink>
            {/* <ul>
                <NavLink to="/plants"> <li>Plants</li></NavLink>
                <NavLink to="/decor"><li>Garden Decor</li></NavLink>
                <NavLink to="/tools"><li>Tools</li></NavLink> 
                <NavLink to="/grocery"><li>Grocery</li></NavLink>    
            </ul> */}
            <div className='search'>
            <input  type='text' className='search-bar' name='search' placeholder='Search'></input>
          <i class="bi bi-search"></i>
            </div>
           <NavLink to='/account'  className='  '><i class="bi bi-person-fill ac-ic"></i></NavLink>
            
            <NavLink to='/cart' className='icons-link'><i class="bi bi-cart cart-im"></i></NavLink>
            <NavLink to='/wishlist' className='icons-link'><i class="bi bi-heart wishlist-im"></i> </NavLink>
            <NavLink to='/sell' className='sell-p'>Sell your product</NavLink>
        </div>
    )
}

export default Nav;