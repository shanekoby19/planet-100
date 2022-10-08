import SecondaryButton from './ButtonSecondary';
import { motion } from 'framer-motion';

const SmallCard = ({
    img=<img alt='nothing'></img>,
    title='Default',
    text='',
    author='Unknown',
    link='',
}) => {
    return (
        <motion.div 
            className='small__card'
            whileHover={{
                y: "-20px",
                boxShadow: "0px 20px 40px 2px rgba(0, 0, 0, 0.4)"
            }}
        >
            <div className='small__card__image__container'>
                {img}
            </div>
            <a className='small__card__link' href={link} target="_blank" rel="noreferrer">
                <p className='small__card__author'>{author}</p>
            </a>

            <h2 className='small__card__header'>{title}</h2>
            <p className='small__card__text'>{text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
            <SecondaryButton text='View More' additionalClasses=' small__card__btn'></SecondaryButton>
        </motion.div>
    )
}

export default SmallCard;