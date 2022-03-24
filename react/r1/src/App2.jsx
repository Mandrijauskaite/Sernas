import './App.css';
import Miskas from './Components/Miskas';
import Upes from './Components/Upe';


function App() {
  return (
    <div className="App">
        <h1>PROPS</h1>
        <Miskas forest="blue" big={true} msg="Alio"></Miskas> // perduoda į Miskas spalvą ir žinutę
        <Miskas forest="red" big={false} msg="Super"></Miskas>
        {/* <Upe color="pink"></Upe> */}
        
    </div>
  );
}

export default App;