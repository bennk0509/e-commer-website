import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction';
import Feedback from './components/Feedback';
import Footer from './components/Footer'

function App() {
    return(
        <div className="pt-[5%]">
            <Navbar/>
            <Hero/>
            <Introduction/>
            <Feedback/>
            <Footer/>
        </div>
    );
}

export default App
