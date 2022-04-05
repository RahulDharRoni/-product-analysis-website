import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import HeroSection from './Component/Hero-Slider/HeroSection';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HeroSection></HeroSection>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>

  );
}

export default App;
