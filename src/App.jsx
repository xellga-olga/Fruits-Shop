import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Menu from "./components/Menu/Menu.jsx";

const App = () => {
    return (
        <main className='overflow-x-hidden '>
            <Navbar/>
            <Hero />
            <Menu />
        </main>
    );
};

export default App;