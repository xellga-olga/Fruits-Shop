import BannerImage from '../../assets/banner3_bg.jpg';
import {motion} from "framer-motion";
import {FadeAnimationLeft} from "../../utility/animation.jsx";

const bgStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const Banner = () => {
    return (
        <section className='container mb-12'>
            <div style={bgStyle} className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
                <div></div>
                <div className='flex justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeAnimationLeft(0.5)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                            className='text-3xl lg:text-6xl font-bold uppercase'>
                            {" "}
                            Fuel Your Day with Freshness
                        </motion.h1>
                        <motion.p
                            variants={FadeAnimationLeft(0.7)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                        >
                            Eating fresh has never been easier. Shop our wide variety of handpicked fruits and boost your health every day!
                        </motion.p>
                        <motion.div
                            animate='visible'
                            variants={FadeAnimationLeft(0.9)}
                            initial='hidden'
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;