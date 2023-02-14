import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import backGround from './img/lotus.jpg';

function App() {
  return (
    <div className="App" 
    style={{ 
      backgroundImage: `url(${backGround})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: '100% 100%'
      }}>
      <Sidebar /> 
    </div>
  );
}

export default App;
