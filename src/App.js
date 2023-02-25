import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import backGround from './img/lotus.jpg';
import Toggle from './components/sidebar/Toggle';
import { useState } from 'react';

function App() {
  
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="App" 
    style={{ 
      backgroundImage: `url(${backGround})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: '100% 100%'
      }}>
      <Sidebar /> 
      <Toggle />
    </div>
  );
}

export default App;
