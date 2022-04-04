import { useState } from "react"

function Laukeliai() {

    const [skaicius1, setSkaicius1] = useState('100'); {/* jei '', tai laukas bus tuščias, jei bus tekst., lauke atsiras tekstas */}
    const [skaicius2, setSkaicius2] = useState('50'); {/* */}


    const changeSkaicius1 = e => {  {/* e-eventas (įvestis) e-turi target */}
        setSkaicius1(e.target.value); {/* e-turi target, target-value */}
        setSkaicius2(e.target.value / 2);
    }

    const changeSkaicius2 = e => {
        setSkaicius2(e.target.value);
    }


    return (
        <>
        <input type="text" placeholder="1 skaičius" onChange={changeSkaicius1} value={skaicius1}/> {/* susidaro laukelis.placeholder-įrašo tekstą laukelyje; */}
        <input type="text" placeholder="2 skaičius" onChange={changeSkaicius2} value={skaicius2}/> {/*  */}
        <button>ADD</button>  {/*   */}
        </> 
    )
  
}
export default Laukeliai;