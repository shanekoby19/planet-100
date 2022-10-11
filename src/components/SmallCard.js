import { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import CartContext from '../context/CartContext';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './ButtonSecondary';

const SmallCard = ({
    img=<img alt='nothing'></img>,
    title='Default',
    text='',
    author='Unknown',
    link='',
}) => {
    const [showCartButton, setShowCartButton] = useState(false);
    const { 
        cartItems, 
        setCartItems, 
        cartAnimationControl
    } = useContext(CartContext);
    
    const bringNavDown = {
        y: window.pageYOffset,
        transition: {
            type: 'spring',
            damping: 20,
        }
    }

    const bringNavUp = {
        y: 0,
        transition: {
            type: 'spring',
            damping: 100,
        }
    }

    const animateNav = () => {
        // Bring the nav down to the user.
        cartAnimationControl.start(bringNavDown);

        // Pull the nav back up after 3 seconds.
        setTimeout(() => {
            cartAnimationControl.start(bringNavUp)
        }, 3000);
    }

    /**
     * Determines if an item is in the cart based on it's name.
     * @param {*} cartItems - The context store for the cartItems array.
     * @param {*} title - The title of the item you want to check.
     * @returns Boolean
     */
    const itemIsInCart = (cartItems, title) => cartItems.some(item => item.title === title)

    /**
     * Adds an item to the cart. 
     * @param {*} title - The title of the item you want to add.
     */
    const addItemToCart = (title) => {
        setCartItems([...cartItems, { id: cartItems.length + 1, title }]);
        animateNav();
    }

    /**
     * Removes an item from the cart. 
     * @param {*} title - The title of the item you want to remove.
     */
    const removeItemFromCart = (title) => {
        setCartItems(cartItems.filter(cartItem => cartItem.title !== title));
        animateNav();
    }

    return (
        <motion.div 
            className='small__card'
            onMouseEnter={() => setShowCartButton(true)}
            onMouseLeave={() => setShowCartButton(false)}
        >
            <div className='small__card__image__container'>
                {img}
            </div>
            <a className='small__card__link' href={link} target="_blank" rel="noreferrer">
                <p className='small__card__author'>{author}</p>
            </a>

            <h2 className='small__card__header'>{title}</h2>
            <p className='small__card__text'>{text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
            <div className='small__card__btns'>
                { showCartButton && <PrimaryButton text={itemIsInCart(cartItems, title) ? 'Remove' : 'Add'} additionalClasses=' small__card__btn__buy' onClick={() => itemIsInCart(cartItems, title) ? removeItemFromCart(title) : addItemToCart(title) }></PrimaryButton> }
                <SecondaryButton text='View More' additionalClasses=' small__card__btn'></SecondaryButton>
            </div>
        </motion.div>
    )
}

export default SmallCard;