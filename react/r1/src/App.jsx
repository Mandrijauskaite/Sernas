import './App.css';
import Garazas from './Components/Garazas';

function App() {
  return (
    <div className="App">
      <h1>LIST</h1>
      <Garazas autos={['Opel', 'Vilvo', ]}></Garazas>
    </div>
  );
}

export default App;