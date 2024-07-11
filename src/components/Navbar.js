import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Add_to_cart from '../pages/Add_to_cart';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
        

    };
     countProducts();
        async function countProducts(){
     const re = await fetch("http://localhost/projects/count_cart_products.php");
     const data = await re.json();
     console.log(data['total_product']);
     document.getElementById("cauntItems").innerHTML = data['total_product'];     

    }

    setInterval(() => {
        countProducts();
    }, 1000);



    return (
        <div className='navbar'>
            <div className='leftside' id={openLinks ? 'open' : 'close'}>
                <img src={Logo} />
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className='rightside'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <span id='cauntItems' className='cartCount'>1</span>
                <button onClick={toggleNavbar}>
                    {/* <MenuIcon /> */}
                   
                   <a href="/Add_to_cart"> <FontAwesomeIcon icon={faCartShopping} /> </a>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
