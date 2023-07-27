import NavBar from './components/navBar/NavBar';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
