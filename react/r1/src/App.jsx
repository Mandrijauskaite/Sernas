import './App.css';
import Katinukas from './Components/Katinukas';
import KVraudonas from './Components/KVraudonas';
import Laukeliai from './Components/Laukeliai';
import Select from './Components/Select';

function App() {

  return (
    <div className="App">
        <h2>---------1. uždavinys--------</h2>
        <KVraudonas></KVraudonas>
        <h2>---------2. uždavinys--------</h2>
        <Katinukas></Katinukas>
        <h2>---------3. uždavinys--------</h2>
        <Laukeliai></Laukeliai>
        <h2>---------4. uždavinys--------</h2>
        <Select></Select>
    </div>
  );
}

export default App;