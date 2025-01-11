import {IoBagHandleOutline} from "react-icons/io5";
import HeroImg from '../../assets/hero.png'
import Leaf from '../../assets/leaf.png'
import {motion} from "framer-motion";
import {FadeAnimationRight} from '../../utility/animation.jsx';

const Hero = () => {
    return (
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                {/*Info*/}
                <div className='flex flex-col justify-center py-14 md:py-0  relative z-10'>
                    <div className='text-center md:text-left space-y-6 lg:w-[400px]'>
                        <motion.h1
                            animate='visible'
                            variants={FadeAnimationRight(0.6)}
                            initial='hidden'
                            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>Healthy
                            <br/>Fresh
                            <span className='text-secondary'>Fruits!</span>
                        </motion.h1>

                        <motion.p
                            animate='visible'
                            variants={FadeAnimationRight(0.9)}
                            initial='hidden'
                            className='text-2xl tracking-wide'>
                            Order Now For Fresh Healthy Life
                        </motion.p>
                        <motion.p
                            animate='visible'
                            variants={FadeAnimationRight(1.2)}
                            initial='hidden'
                            className='text-gray-400'>
                            Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order
                        </motion.p>

                        <motion.div
                            animate='visible'
                            variants={FadeAnimationRight(1.5)}
                            initial='hidden'
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2'>
                                <span>
                                  <IoBagHandleOutline />
                                </span>
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/*Hero Image*/}
                <div className='flex justify-center items-center'>
                    <motion.img
                        animate={{opacity: 1, x: 0, rotate: 0}}
                        initial={{opacity: 0, x: 200, rotate: 75}}
                        transition={{ duration: 1, delay: 1.5 }}
                        src={HeroImg} alt='hero_image'
                        className='w-[350px] md:w-[550px] drop-shadow'
                    />
                </div>

                {/*Leaf Image*/}
                <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
                    <motion.img
                        animate={{opacity: 1, x: 0, rotate: 0}}
                        initial={{opacity: 0, x: -200, rotate: 75}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='w-full md:max-w-[300px]' src={Leaf} alt='leaf'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;