import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import SecondaryButton from './ButtonSecondary';

const Carousel = ({ children }) => {
    const [maxLeft, setMaxLeft] = useState(0);
    const [maxRight, setMaxRight] = useState(0);
    const [currentX, setCurrentX] = useState(0);

    useEffect(() => {
        setMaxRight(document.getElementById('carousel').scrollWidth * -1 + document.getElementById('carousel').getBoundingClientRect().width - 110);
    }, [])
    
    const control = useAnimation();

    const moveCarouselLeft = () => {
        control.start({
            x: currentX - 700 > maxRight ? currentX - 700 : maxRight,
            transition: {
                type: "spring",
                stiffness: 60
            }
        });

        // Update the state
        currentX - 700 > maxRight ? setCurrentX(currentX - 700) : setCurrentX(maxRight);
    }

    const moveCarouselRight = () => {
        control.start({
            x: currentX + 700 < maxLeft ? currentX + 700 : maxLeft,
            transition: {
                type: "spring",
                stiffness: 60
            }
        }) 

        currentX + 700 < maxLeft ? setCurrentX(currentX + 700) : setCurrentX(maxLeft)
    }



    return (
        <div>
            <motion.div 
                id="carousel"
                className='carousel'
                animate={control}
            >
                {children}
            </motion.div>
            <div className='carousel__btns'>
                {
                    // Only render the back button if the carousel is shifted to the right.
                    currentX !== maxLeft &&
                    <SecondaryButton
                        callbackFn={moveCarouselRight}
                        text='Previous' 
                        additionalClasses=' carousel__btns__previous'
                        arrowDirection='left'
                    ></SecondaryButton>
                }
                {
                    // Only render the forward button if the carousel is not shifted all the way to the left.
                    currentX !== maxRight &&
                    <SecondaryButton
                        callbackFn={moveCarouselLeft}
                        text='Next' 
                        additionalClasses=' carousel__btns__next'
                    ></SecondaryButton>
                }
            </div>
        </div>
    )
}

export default Carousel;