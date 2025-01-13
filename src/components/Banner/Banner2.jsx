import BannerImage from '../../assets/banner2.png';
import {motion} from "framer-motion";
import {FadeAnimationUp} from "../../utility/animation.jsx";


const Banner = () => {
    return (
        <section className=''>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>

                <div className='flex justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeAnimationUp(0.5)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                            className='text-3xl lg:text-6xl font-bold uppercase'>
                            {" "}
                            Discover Nature’s Best
                        </motion.h1>
                        <motion.p
                            variants={FadeAnimationUp(0.7)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                        >
                            Enjoy the taste of nature with our handpicked, organic fruits. Fresh from the farm to your table.
                        </motion.p>
                        <motion.p
                            variants={FadeAnimationUp(0.7)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}
                            }>
                            Order today and experience the difference in quality and freshness. We guarantee you'll love every bite!
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

                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{opacity: 0,x: 200, rotate: 75}}
                        whileInView={{opacity: 1, x: 0, rotate: 0}}
                        transition={{duration: 1, delay: 0.2}}
                        viewport={{once: true}}
                        className='h-full object-cover  md:max-w-[400px] drop-shadow-2xl' src={BannerImage} alt='Banner'/>
                </div>

            </div>
        </section>
    );
};

export default Banner;