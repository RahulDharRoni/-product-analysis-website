import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import HeroSection from './Component/Hero-Slider/HeroSection';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HeroSection></HeroSection>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <h1>This is a full landing page website!!</h1>

    </div>

  );
}

export default App;
