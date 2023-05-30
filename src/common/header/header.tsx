import logo from '../../utils/images/logo1.png';
import cartIcon from '../../utils/images/cart.png';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AppContext } from '../../App';
import Menu from './menu/menu';

import './header.css';

const Header = () => {
    const{ isMenuToggled, handleMenuToggle, cartItems} = useContext(AppContext);
    const navigateTo = useNavigate();
    const[isInputFocus, setInputFocus] = useState(false);
    const[imgUrl, setImgUrl] = useState('');

    
    
    const{data:country, status} = useQuery(['location'], async ()=>{
        const res = await axios.get("http://ip-api.com/json/");
        return res.data;
    });

    useEffect(() => {
        getImage()
    }, [country])

    const handleFocus =() => {
        setInputFocus(true);
        console.log("FOCUSED")
    };
    const handleBlur = () =>{
        setInputFocus(false);
        console.log("BLUR")
    }

    const getImage = async () => {
        if(!country) return;
        const req = await fetch(`https://countryflagsapi.com/png/${country?.country}`)
        const reqData = await req.blob();
        const url = URL.createObjectURL(reqData);
        setImgUrl(url);
    }
    
    const handleClick: React.MouseEventHandler<HTMLLIElement> = event =>  handleMenuToggle(); 

   

    return (
        <div className="header">
            {isMenuToggled && <Menu/>}

            <div className="topHeader">
                <div className="logo" onClick={() => navigateTo('/')}>
                    <img src={logo} alt="logo"/>
                </div>

                <div className="location">
                    <p> <span>Deliver to </span><br/> <i className="fa fa-map-marker"></i> {country?.country}</p>
                </div>

                <div className={isInputFocus ? 'search focus' : 'search'}>
                    <div className="departmentsDropdown" >
                        <p>All</p>
                        <span>&#9662;</span>
                    </div>

                    <input type='search' placeholder='Search Amazon' onFocus={handleFocus} onBlur={handleBlur} />
                    <button className='fa fa-search searchBtn'></button>
                </div>

                <div className="language">
                    <img src={imgUrl} alt="Nigeria Flag"/>
                    <p> {country?.countryCode}</p>   
                </div>

                <div className="account">
                    <p><span>Hello, sign in </span><br/>Account & lists</p>
                </div>

                <div className="orders">
                    <p><span>Returns</span><br/> & Orders</p>
                </div>

                <div className="cart" onClick={() =>navigateTo('/cart')}>
                    <img src={cartIcon}/>
                    <p className="quantity">{cartItems.length}</p>
                    <p className="txt"> Cart</p>
                </div>
            </div>

            {/* Navs (Bottom header) */}

            <div className="navs">
                <ul>
                    <li onClick={handleClick}><i className="fa fa-bars"></i> All</li>
                    <li>Today's Deals</li>
                    <li>Customer Service</li>
                    <li>Registry</li>
                    <li>Registry</li>
                    <li>Gift Cards</li>
                    <li>Sells</li>
                </ul>

                <p>Shop deals in electronics</p>
            </div>

        </div>
    );
}
 
export default Header;