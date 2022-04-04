import { useState } from "react"

function Select() {

    const [tekstas, setTekstas] = useState('');
    const [spalva, setSpalva] = useState('Blue');
    const [dydis, setDydis] = useState('45px');
    const [stilius, setStilius] = useState('Bold');


    const changeTekstas = e => { {/*  */}
        setTekstas(e.target.value);
    }

    const changeSpalva = (c) => { {/* c-argumentas */}
        // console.log(c); {/* patikrinti ar veikia pirmas pasirinkimas po pirmo paspaudimo */}
        setSpalva(c);
    }

    const changeDydis = (s) => { {/*  */}
        setDydis(s);
    }

    const changeStilius = (f) => { {/*  */}
        setStilius(f);
    }

    return (
        <>
            <form>  {/*https://reactjs.org/docs/forms.html The select Tag. Sukelia visu selectus į vieną bloką*/}
                <label>
                    <select value={spalva} onChange={(e) => changeSpalva(e.target.value)}>
                        <option selected>--</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="lime">Lime</option>          
                    </select>
                </label>
                <label>
                    <select value={dydis} onChange={(e) => changeDydis(e.target.value)}>
                        <option selected>--</option>
                        <option value="35px">35px</option>
                        <option value="26px">26pxt</option>
                        <option value="30px">30px</option>
                        <option value="16px">16px</option>
                        <option value="40px">40px</option>          
                    </select>
                </label>
                <label>
                    <select value={stilius} onChange={(e) => changeStilius(e.target.value)}>
                        <option selected>--</option>
                        <option value="arial">Arial</option>
                        <option value="impact">Impact</option>
                        <option value="comicsansms">Comic Sans MS</option>
                        <option value="georgia">Georgia</option>
                        <option value="consolas">Consolas</option>          
                    </select>
                </label>
            <input type="tekstas" onChange={changeTekstas}></input> {/* mygtukas*/}
            <h1 style={{ color: spalva, fontSize: dydis, fontFamily: stilius }}>{tekstas}</h1> {/* kad galetume matyti ta pati zodi kuris yra laukelyje- matysime zodi ne laukelyje */}
            </form>
        </>
    )
}
export default Select;