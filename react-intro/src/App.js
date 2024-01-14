import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className='container'>
     
     <Navbar />
     <hr/>
     <User
      name="asli"
      department="died"
     />

<User
      name="koray"
      department="llived"
     />
    </div>
  );
}

export default App;
