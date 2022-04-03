import { useState } from "react"

function Select() {

    const [tekstas, setTekstas] = useState('');
    const [color, setColor] = useState('Black');
    const [size, setSize] = useState('12px');
    const [font, setFont] = useState('Arial');


    const changeTekstas = e => { {/*  */}
        setTekstas(e.target.value);
    }

    const changeColor = (c) => { {/* c-argumentas */}
        setColor(c);
    }

    const changeSize = (s) => { {/*  */}
        setSize(s);
    }

    const changeFont = (f) => { {/*  */}
    setFont(f);
}

    return (
        <>
            <form>  {/*https://reactjs.org/docs/forms.html The select Tag. Sukelia visu selectus į vieną bloką*/}
                <label>{' '}
                    <select value={color} onChange={(e) => changeColor(e.target.value)}>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="lime">Lime</option>          
                    </select>
                </label>
                <label>{''}
                    <select value={size} onChange={(e) => changeSize(e.target.value)}>
                        <option value="12px">12px</option>
                        <option value="26px">26pxt</option>
                        <option value="30px">30px</option>
                        <option value="14px">14px</option>
                        <option value="40px">40px</option>          
                    </select>
                </label>
                <label>{' '}
                    <select value={font} onChange={(e) => changeFont(e.target.value)}>
                        <option value="arial">Arial</option>
                        <option value="impact">Impact</option>
                        <option value="comicsansms">Comic Sans MS</option>
                        <option value="georgia">Georgia</option>
                        <option value="consolas">Consolas</option>          
                    </select>
                </label>
            <input type="tekstas" onChange={changeTekstas}></input> {/* mygtukas*/}
            <h1 style={{ color: color, size: size, font: font }}>{tekstas}</h1> {/* kad galetume matyti ta pati zodi kuris yra laukelyje- matysime zodi ne laukelyje */}
            </form>
        </>
    )
}
export default Select;