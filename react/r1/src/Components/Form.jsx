import { useState } from "react";

function Form() { 

    const [text1, setText1] = useState(''); {/* jei '', tai laukas bus tuščias, jei bus tekst., lauke atsiras tekstas */}
    const [volume, setVolume] = useState(0); {/* VOLUME reguliatorius */}
    const [color, setColor] = useState('#ff0000');
    const [ta, setTa] = useState('---------');
    const [select, setSelect] = useState('nezinau');
    const [selectT, setSelectT] = useState('');

    const [dont, setDont] = useState(true);

    const [checkbox, setCheckbox] = useState('');
    const [radio, setRadio] = useState('');

    const changeText1 = e => {  {/* e-eventas (įvestis) e-turi target */}
        if (e.target.value.length > 10) {    {/* padeda apriboti ivedamu simboliu kieki iki 10 vnt */}
            return;
        }
        if (dont) {
            setText1(e.target.value); {/* e-turi target, target-value */}
        }
        
    }

    const changeDont = () => { {/*  */}
        setDont(d => !d);
    }


    const changeVolume = e => { {/*  */}
        setVolume(e.target.value);
    }

    const changeColor = e => { {/*  */}
        setColor(e.target.value);
    }

    const changeTa = e => { {/*  */}
        setTa(e.target.value);
    }

    const changeSelect = e => { {/*  */}
        setSelect(e.target.value);
        setSelectT(e.target.querySelector('[value=' + e.target.value + ']').innerText);
    }

    const changeCheckbox = e => { 
        setCheckbox(e.target.checked ? e.target.value : ''); {/*jei e.target.checked (yra pažymėtas), tai ? e.target.value, jeigu ne  : tai niekam t.y. jei kvadratas pažymėtas varnele, tai tai rodys užrašą -Pirmyn-, jei ne - jokio užrašo nebus  */}
    }

    const changeRadio = e => { {/*  */}
        setRadio(e.target.value);
    }

    const changeRadio1 = e => { {/*  */}
        e.target.setAttribute('checked', true);
        console.log(e.target.value);
    }



    return ( // return - grąžinti 
        <>
            <input type="text" placeholder="bla" onChange={changeText1} value={text1}/>
            
            <button onClick={changeDont}>DONT!</button>
            
            <div>
            <input type="range" id="volume" name="volume" onChange={changeVolume} {/* pasidaro volume eilute */}
                    min="0" max="11" value={volume}/>
            <label htmlFor="volume">Volume {volume}</label> {/* įrašius {volume} atsiranda vaizdas, kuris padeda rodyti kiek nueita skaičių iki 11. */}
            </div>
            <input type="color" onChange={changeColor} value={color} />
            <div style={{
                width: '100px',
                height: '100px',
                background: color,
                margin: '100px'
            }}></div>
            <textarea value={ta} onChange={changeTa}></textarea>
        
            <select value={select} onChange={changeSelect}>
                <option value="jo">Jo</option>
                <option value="ne">Ne</option>
                <option value="nezinau">Nežinau</option>
            </select>
            <h2>{selectT}</h2> {/* kad galetume matyti ta pati zodi kuris yra laukelyje- matysime zodi ne laukelyje */}

            <input type="checkbox" onChange={changeCheckbox} value="Pirmyn" />

            <h3>-{checkbox}-</h3>

            {/* <div onChange={changeRadio}> */}
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Jo" />Jo
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Ne" defaultChecked/>Ne
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Nesakysiu" />Nesakysiu
            {/* </div> */}

            <h3>-{radio}-</h3>
        </>
        
    )
}

export default Form;