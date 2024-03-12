import './App.css';
import Navbar from './components/Navbar';
import Utilities from './components/Utilities';
import Sections from './components/Sections';
import Home from './components/Home';
import Categories from './components/Categories';
import Selections from './components/Selections';
import Packs from './components/Packs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Utilities />
      <Navbar />
      <Sections />
      <Home />
      <Categories />
      <Selections/>
      <Packs />
      <Footer />
    </div>
  );
}

export default App;
