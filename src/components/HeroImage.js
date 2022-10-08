import { motion } from 'framer-motion';

const HeroImage = () => {
    return (
        <div className='hero'>
            <a className='hero__link' href='https://www.linkedin.com/in/jacobmolenick/' target="_blank" rel="noreferrer">
                <motion.section 
                    className='hero__user'
                    initial={{
                        y: '-1000vh'
                    }}
                    animate={{
                        y: 0,
                        transition: {
                            delay: 0,
                            duration: 4
                        }
                    }}
                >
                    <motion.img 
                        className='hero__user__image' 
                        src='img/jacob-olenick.jpeg'
                        whileHover={{
                            y: '-50px'
                        }}
                    >
                    </motion.img>
                    <h3 className='hero__user__title'>Jacob Olenick</h3>
                    <p className='hero__user__subtitle'>Designer</p>
                </motion.section>
            </a>

            <a className='hero__link' href='https://www.linkedin.com/in/shane-kobylecky/' target="_blank" rel="noreferrer">
                <motion.section 
                    className='hero__user'
                    initial={{
                        y: '1000vh'
                    }}
                    animate={{
                        y: 0,
                        transition: {
                            delay: 0,
                            duration: 4,
                        }
                    }}
                >
                    <motion.img 
                        className='hero__user__image' 
                        src='img/shane-kobylecky.jpeg'
                        whileHover={{
                            y: '-50px'
                        }}
                    ></motion.img>
                    <h3 className='hero__user__title'>Shane Kobylecky</h3>
                    <p className='hero__user__subtitle'>Developer</p>
                </motion.section>
            </a>
        </div>
    )
}

export default HeroImage;