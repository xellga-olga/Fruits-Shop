import {FaLeaf} from "react-icons/fa";

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
        title: 'Services',
        link: '/services',
    },
    {
        id: 4,
        title: 'Portfolio',
        link: '/portfolio',
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
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
            <div className='container'>
                {/*LOGO SECTION*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className="text-green-500" />
                </div>
                {/*MENU SECTION*/}
                <div>
                    <ul>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;