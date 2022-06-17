import './App.css';
import Navbar from './components/Navbar';
import Carousal from './components/Carousal';
import Slider from './components/Slider';
import BottomSection from './components/BottomSection';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <Slider/>
      <BottomSection/>
    </div>
  );
}

export default App;
