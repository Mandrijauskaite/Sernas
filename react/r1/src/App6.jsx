import './App.css';
import Kvadratas from './Components/Kvadratas';
import Medziai from './Components/Medziai';
import Myg from './Components/Myg';
import Mygtukas1 from './Components/Mygtukas1';
import Mygtukai from './Mygtukai';


function App() {
  return (
    <div className="App">
        <Mygtukas1 size="600px"></Mygtukas1>
        <Medziai color="black"></Medziai>
        {/* <Myg></Myg> */}
        <Mygtukai></Mygtukai>
        {/* <Kvadratas></Kvadratas> */}
    </div>
  );
}

export default App;
