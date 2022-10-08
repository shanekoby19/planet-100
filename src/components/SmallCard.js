import { useState } from 'react';
import { motion } from 'framer-motion';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './ButtonSecondary';

const SmallCard = ({
    img=<img alt='nothing'></img>,
    title='Default',
    text='',
    author='Unknown',
    link='',
}) => {
    const [showBuyButton, setShowBuyButton] = useState(false);

    return (
        <motion.div 
            className='small__card'
            whileHover={{
                y: "-20px",
                boxShadow: "0px 20px 40px 2px rgba(0, 0, 0, 0.4)"
            }}
            onMouseEnter={() => setShowBuyButton(true)}
            onMouseLeave={() => setShowBuyButton(false)}
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
                { showBuyButton && <PrimaryButton text='Buy Now' additionalClasses=' small__card__btn__buy'></PrimaryButton> }
                <SecondaryButton text='View More' additionalClasses=' small__card__btn'></SecondaryButton>
            </div>
        </motion.div>
    )
}

export default SmallCard;