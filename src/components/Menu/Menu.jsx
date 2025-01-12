import Fruit1 from '../../assets/apple.png'
import Fruit2 from '../../assets/banana.png'
import Fruit3 from '../../assets/orange.png'
import Fruit4 from '../../assets/strawberry.png'
import Fruit5 from '../../assets/avocado.png'
import Fruit6 from '../../assets/blueberries.png'
import Fruit7 from '../../assets/watermelon.png'
import Fruit8 from '../../assets/melon.png'

import { motion } from 'framer-motion'
import {FadeAnimationLeft} from "../../utility/animation.jsx";

const MenuData = [
    {
        id: 1,
        title: 'Fresh Apples',
        link: '/',
        price: '$2.00',
        img: Fruit1,
        delay: 0.9
    },
    {
        id: 2,
        title: 'Organic Bananas',
        link: '/',
        price: '$1.50',
        img: Fruit2,
        delay: 0.6
    },
    {
        id: 3,
        title: 'Juicy Oranges',
        link: '/',
        price: '$3.00',
        img: Fruit3,
        delay: 1.3
    },
    {
        id: 4,
        title: 'Strawberries',
        link: '/',
        price: '$4.00',
        img: Fruit4,
        delay: 1.5
    },
    {
        id: 5,
        title: 'Fresh Avocados',
        link: '/',
        price: '$2.50',
        img: Fruit5,
        delay: 0.5
    },
    {
        id: 6,
        title: 'Blueberries',
        link: '/',
        price: '$5.00',
        img: Fruit6,
        delay: 1
    },
    {
        id: 7,
        title: 'Watermelons',
        link: '/',
        price: '$7.00',
        img: Fruit7,
        delay: 0.4
    },
    {
        id: 8,
        title: 'Melons',
        link: '/',
        price: '$8.00',
        img: Fruit8,
        delay: 0.9
    }
];

const Menu = () => {
    return (
        <section>
            <div className='container'>
                <motion.h1
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                    className='text-2xl font-bold text-left pb-10'>OUR MENU
                </motion.h1>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
                    {MenuData.map((menu) => (
                        <motion.div
                            variants={FadeAnimationLeft(menu.delay)}
                            initial='hidden'
                            whileInView={'visible'}
                            key={menu.id}
                            className='bg-white rounded-3xl px-4 py-6 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col items-center justify-center'
                        >
                            <img
                                src={menu.img}
                                alt={menu.title}
                                className='w-[80px] h-[80px] mb-4'
                            />
                            <div className='text-center'>
                                <h2 className='text-lg font-semibold'>{menu.title}</h2>
                                <p className='text-secondary font-semibold text-lg'>{menu.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;