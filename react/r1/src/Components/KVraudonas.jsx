import {useState} from 'react';
import rand from '../Common/rand';

function KVraudonas() {

    const [number, setNumber] = useState(''); {/* 1 forma – 1 STATE, Tuščias stringas */}
    const [raudonas, setRaudonas] = useState([]); {/* 1 forma – 1 STATE, Tuščias masyvas */}

    const changeNumber = e => { {/* ši f-ja atlieka tik pasinaudodama setNumber pakeičia 'non' į 'Įrašyti norimą skaičių' */}
    setNumber(e.target.value);
    }

    const goRaudonas = e => { 
    const kvadratelis = [];
    for (let i = 0; i < number; i++) {
        kvadratelis.push(rand(100, 200));
    }
    setRaudonas((raudonas) => [...raudonas, ...kvadratelis]);
    }

    return ( // return - grąžinti
        <>
        <input type="number" onChange={changeNumber} placeholder="Įrašyti norimą skaičių"></input> {/* susidaro laukelis,  */}
        <button onClick={goRaudonas}>ADD</button> {/* mygtuko kūrimas; onClick-paleisti metodą goRaudonas */}
        <div>
        {
            raudonas.map((k, i) => <div className="RS" key={i}>{k}</div>)
        }
        </div> 
        </>
    )

}
export default KVraudonas;