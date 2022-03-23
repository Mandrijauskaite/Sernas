import './App.css';
import Miskas from './Components/Miskas';
import Upe from './Components/Upe';

function App() {
  return (
    <div className="App">
        <h1>PROPS</h1>
        <Miskas forest="blue" big={true}></Miskas>
        <Miskas forest="red" big={false}></Miskas>
        <Upe forest="pink" big={false}></Upe>
    </div>
  );
}

export default App;