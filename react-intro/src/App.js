import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className='container'>
     <h1 style={{color:'blue',fontSize:"20px"}}>App Component</h1>
     <h4 className='header'>Kullanici Bilgileri</h4>
     <User/>
     <Navbar/>
    </div>
  );
}

export default App;
