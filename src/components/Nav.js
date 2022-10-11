import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import CartContext from '../context/CartContext';
import PrimaryButton from './PrimaryButton';
import ItemCount from './ItemCount';

const Nav = () => {
    const activeClassName = 'nav__link nav__link--active';
    const inactiveClassName = 'nav__link nav__link--inactive';

    const { cartAnimationControl } = useContext(CartContext)

    return (
        <motion.div 
            className='nav'
            animate={cartAnimationControl}
        >
            <h1 className='nav__logo'>Planet (100)</h1>
            <ul className='nav__links'>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
                >Home</NavLink>
                <NavLink 
                    to='/sale'
                    className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
                >On Sale</NavLink>
                <NavLink 
                    to='/foundation'
                    className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
                >Foundation</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
                    style={{position: 'relative'}}
                    to='/wallet'
                ><ItemCount itemName='Wallet'/></NavLink>
                <PrimaryButton text='Sign Up Now'/>
            </ul>
        </motion.div>
    )
}

export default Nav;