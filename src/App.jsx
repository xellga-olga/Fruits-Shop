import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Banner from "./components/Banner/Banner.jsx";

const App = () => {
    return (
        <main className='overflow-x-hidden '>
            <Navbar/>
            <Hero />
            <Menu />
            <Banner />
        </main>
    );
};

export default App;