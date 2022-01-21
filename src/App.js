import Navbar from './Navbar'
import Greeter from './Greeter';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Greeter name = "Apu" age="27" excitement={4}/>
      <h1>Hello from App</h1>
    </div>
  );
}

export default App;
