import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Modal = ({ children }) => {
    const control = useAnimation();
    const openModal = {
        display: 'flex',
        scale: [0, 0.66, 0.33, 1],
        opacity: [0, 0.33, 0.66, 1],
        borderRadius: ['100%', '20%', '13%', '0%'],
        rotate: ['-245', '45deg', '360deg', '0deg'],
        transition: {
            delay: 2,
            duration: 1,
            ease: "easeOut",
            when: 'beforeChildren'
        }
    }
    const closeModal = {
        x: [1, 0],
        opacity: [1, 0],
        display: 'none'
    }

    
    useEffect(() => {
        control.start(openModal);
        // eslint-disable-next-line
    }, [])

    return (
        <motion.div 
            className='modal'
            initial={{
                display: 'none',
            }}
            animate={control}
        >
            <motion.button 
                className='modal__btn'
                whileHover={{
                    cursor: 'pointer',
                    scale: 1.2
                }}
                whileTap={{
                    scale: 0.9
                }}
                onClick={() => {
                    control.start(closeModal)
                }}
            >
            X</motion.button>

            { children }

        </motion.div>
    )
}

export default Modal;