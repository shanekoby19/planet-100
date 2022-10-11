import { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';

import CartContext from '../context/CartContext';

const ItemCount = ({ itemName }) => {
    const { cartItems } = useContext(CartContext);

    const itemCountControl = useAnimation();

    return (
        <div className='item__count'>
            {
                cartItems.length > 0 && 
                <motion.p 
                    className='item__count__number'
                    animate={itemCountControl}
                    onChange={() => {
                        itemCountControl.start({
                            y: ['-10px', '0px']
                        })
                    }}
                >{cartItems.length}
                </motion.p> 
            }
            <p className='item__count__name'>{itemName}</p>
        </div>
    )
}

export default ItemCount;