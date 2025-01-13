import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Banner3 from "./components/Banner/Banner3.jsx";

const App = () => {
    return (
        <main className='overflow-x-hidden '>
            <Navbar/>
            <Hero />
            <Menu />
            <Banner />
            <Banner2 />
            <Banner3 />
        </main>
    );
};

export default App;