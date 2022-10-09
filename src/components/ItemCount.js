import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ItemCount = ({ itemName }) => {
    const [count, setCount] = useState(0);

    const itemCountControl = useAnimation();

    return (
        <div className='item__count'>
            {
                count > 0 && 
                <motion.p 
                    className='item__count__number'
                    animate={itemCountControl}
                    onChange={itemCountControl.start({
                        y: ['-10px', '0px']
                    })}
                    onClick={() => setCount(count + 1)}
                >{count}
                </motion.p> 
            }
            <p className='item__count__name'>{itemName}</p>
        </div>
    )
}

export default ItemCount;