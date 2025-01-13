import {FaFacebook, FaInstagram, FaLeaf} from "react-icons/fa";
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <footer className=' bg-primary/10 py-12 mt-12'>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.2}}
                className='container flex justify-between items-center'
            >
                {/*LOGO SECTION*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className="text-green-500"/>
                </div>
                {/*SOCIAL ICONS SECTION*/}
                <div className='flex items-center text-3xl text-gray-700 gap-4 mt-6'>
                    <a
                        href='https://facebook.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-blue-600 transition-colors duration-300'
                    >
                        <FaFacebook/>
                    </a>
                    <a
                        href='https://instagram.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-pink-600 transition-colors duration-300'
                    >
                        <FaInstagram/>
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;