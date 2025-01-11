import {FaLeaf} from "react-icons/fa";
import {MdMenu, MdOutlineShoppingCart} from "react-icons/md";

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        title: 'Products',
        link: '/products',
    },
    {
        id: 4,
        title: 'Shop',
        link: '/shop',
    },
    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    }
];

function Navbar() {
    return (
        <nav>
            <div className='container flex justify-between items-center py-4 md:pt-4'>
                {/*LOGO SECTION*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className="text-green-500" />
                </div>
                {/*MENU SECTION*/}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id}>
                                <a className='inline-block py-1 px-3 hover:text-primary font-semibold hover:shadow-[0_3px_-1px_#ef4444]' href={menu.link}>{menu.title}</a>
                            </li>
                        ))}
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <MdOutlineShoppingCart />
                        </button>
                    </ul>
                </div>
                {/*Mobile Hamburger Menu*/}
                <div className='md:hidden '>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;