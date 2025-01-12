import BannerImage from '../../assets/banner.png';
import {motion} from "framer-motion";
import {FadeAnimationUp} from "../../utility/animation.jsx";


const Banner = () => {
    return (
        <section className='bg-secondary/10'>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{type: 'spring', stiffness: 100, delay: 0.2}}
                        viewport={{once: true}}
                        className='h-full object-cover w-[300px] md:max-w-[400px]' src={BannerImage} alt='Banner'/>
                </div>

                <div className='flex justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeAnimationUp(0.5)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                            className='text-3xl lg:text-6xl font-bold'>
                            {" "}
                            BRAND INFO
                        </motion.h1>
                        <motion.p
                            variants={FadeAnimationUp(0.7)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                        >
                            Handpicked, organic, and bursting with flavor. Experience the best fruits delivered right to your door.
                        </motion.p>
                        <motion.p
                            variants={FadeAnimationUp(0.7)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}
                        }>
                            From apples to avocados, we bring nature’s best to your table. Shop now and taste the difference!
                        </motion.p>

                        <motion.div
                            animate='visible'
                            variants={FadeAnimationUp(1.1)}
                            initial='hidden'
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;