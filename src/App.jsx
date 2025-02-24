import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction';

function App() {
    return(
        <div className="pt-[5%]">
            <Navbar/>
            <Hero/>
            <Introduction/>
        </div>
    );
}

export default App
