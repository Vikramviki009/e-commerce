import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT US
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>sign out</div> 
                :
                <Link className='option' to='signin'>sign in</Link>
            }
        </div>
    </div>
);

export default Header;