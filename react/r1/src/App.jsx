import './App.css';
import Miskas from './Components/Miskas';
import Pasaka from './Components/Pasaka';

function App() {

    const M = ['Labas', 'Ate'];
    const [A, B] = M;

    // const A = M[0];
    // const B = M[1];

  return (
    <div className="App">
        
        <h1>HOOK</h1>
              <Pasaka></Pasaka>
    </div>
  );
}

export default App;