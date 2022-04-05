import './App.css';
import GanyklaMygtukas from './Components/GanyklaMygtukas';
import { useState } from "react"
import Ganykla from './Components/Ganykla';


function App() { {/* */}

    const [sk, setSk] = useState(0);
    const [kv, setKv] = useState([]);

    const add = () => {
        setSk(s => ++s);
    }

    const addKv = () => {
        setKv(k => [...k, 'bū']);
    }

  return (
    <div className="App">
      <h1>STaTE UPLiFTINg</h1>
        <GanyklaMygtukas add={add} addKv={addKv}></GanyklaMygtukas>
        <Ganykla sk={sk} kv={kv}></Ganykla>

    </div>
  );
}

export default App;

{/* REACT useState & useEffect PROJECT (MyLittleFarm)

Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.

Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą. */}
