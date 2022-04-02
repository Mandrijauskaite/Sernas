// STATE https://reactjs-org.translate.goog/docs/hooks-state.html?_x_tr_sl=en&_x_tr_tl=lt&_x_tr_hl=lt&_x_tr_pto=wapp
// Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!
import {useState} from 'react';

function Pasaka() {

    const [title, setTitle] = useState('non'); // title - pavadinimas, kad veiktų reikia set - tai anonimine f-ja, kuri tą title pavadinimą keis useState yra hukas; 'non'-pradinė state reikšmė
    const [color, setColor] = useState('pink'); // STATE useState importuoti is import {useState} from 'react'

    const goBebrai = () => { // ši f-ja atlieka tik pasinaudodama setTitle pakeičia 'non' į 'Apie Bebrus'
        setTitle('Apie Bebrus'); 
    }

    const goTrysBroliai = () => {
        setTitle('3 Broliai'); // įrašymas
    }

    const goColor = c => { // c-argumentas
        setColor(c);
    }

    const changeColor = () => {
        // const newColor = color == 'blue' ? 'pink' : 'blue'; // taip nerašyti
        // setColor(newColor); //  taip nerašyti
        setColor(oldColor => oldColor == 'blue' ? 'pink' : 'blue'); // (oldColor) pasiimam seną color'ą, tada lyginam seną cor'ą (jei buvo blue, tai pink ir atvirkščiai). Tai yra update, kuris įdėtas į setColo vidų
    }



    return (
        <div>
            <h2 style={{color:color}}>PASAKA {title}</h2> // kai įdedame goColor <button></button> dedame style={{color:color}}; {{color:color}} yra const [color, setColor]
            <button onClick={goBebrai}>Apie Bebrus</button> {/* mygtuko kūrimas; onClick-paleisti metodą goBebrai*/}
            <button onClick={goTrysBroliai}>3 Broliai</button>
            <button onClick={() => goColor('pink')}>Pink</button> // {goPink} keičiame į {() => goColor('pink')} argumentas 'pink'
            <button onClick={() => goColor('blue')}>Blue</button>
            <button onClick={changeColor}>Change</button> 
            // mygtukas pasikartojančiai keičiantis iš 'pink' į 'blue' -><-
        </div> 
    );
    
}

export default Pasaka;