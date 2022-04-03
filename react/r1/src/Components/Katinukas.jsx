import { useState } from "react"

function Katinukas() {
    const [vardas, setVardas] = useState(''); {/* Kiekvienas laukelis turi turėti savo STATE. 1 f-ma – 1 state */}
    const [svoris, setSvoris] = useState('');
    const [info, setInfo] = useState([]);


    const getVardas = e => { {/* */}
        setVardas(e.target.value);
    }

    const getSvoris = e => { {/* */}
        setSvoris(e.target.value);
    }

//     const getSarasas = e => { {/*rezultato fiksavimas SAVE. žr. f-lą nr. 006*/}
//         let gameCounter = localStorage.getItem('gameSave'); {/*  tikriname ar yra save */}

//         if (gameCounter === null) { {/* jei nera save, pirma karta atejai */}
//         localStorage.setItem('gameSave', 0); {/* isirasome save */}
//         gameCounter = 0; {/* sakome, kad yra nulis
// }
//     setInfo(e.target.value);
// }

    return (
        <>
        <input type="vardas" placeholder="Įrašyti vardą" onChange={getVardas}></input> {/* susidaro laukelis. */}
        <input type="svoris" placeholder="Įrašyti svorį" onChange={getSvoris}></input> {/*placeholder-įrašo tekstą laukelyje; onChange- */}
        <button>ADD</button> {/*  onClick={katinukuSarasas} ideti */}
        <h2>Katinukų sąrašas</h2> 
        <div>
        {
            info.map((sarasas, i) => <h2 key={i} > {i +1} {""} {sarasas.vardas} {""} {sarasas.svoris} {"-"}kg </h2>)
        }
        </div>
        </>
    )

}
export default Katinukas;