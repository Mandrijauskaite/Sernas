import './App.css';
import MelynasisKvadratelis from './Components/MelynasisKvadratelis';
import Pasaka from './Components/Pasaka';

function App() {
  // const [A, B] = ['Labas', 'Ate']; ['Labas', 'Ate']; // ['Labas', 'Ate'] - vienas masyvas su dviem reikšmėm
  // console.log(A, B); // į A atiduoda 'Labas', į B - 'Ate'

  // Tas pats tik kitas užrašymas
  // const M = ['Labas', 'Ate']; // tai tas pats kaip virsuje
  // const [A, B] = M;

  // Tas pats tik kitas užrašymas. SUTRUMPINTAS VARIANTAS KAIP PAIMTI IŠ MASYVO DU ELM. IR SUKURTI DVI ATSKIRAS KONSTANTAS
  // const A = M[0]; // M-masyvo 0 elementas
  // const B = M[1]; // M-masyvo 1 elementas

  return (
    <div className="App">
        <h1>HOOK</h1>
        <Pasaka></Pasaka>
        <MelynasisKvadratelis></MelynasisKvadratelis>
    </div>
  );
}

export default App;
