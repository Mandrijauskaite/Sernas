import { useState } from "react"

function Range() {

    const [kvadratas, setKvadratas] = useState([]); {/*  */}
    const [aukstis, setAukstis] = useState('100px'); 
    const [plotis, setPlotis] = useState('100px'); 
    const [color, setColor] = useState('#000000');
    const [save, setSave] = useState([]);

    const changeKvadratas = e => { 
        setKvadratas(e.target.value);
    }

    const changeAukstis = e => { 
        setAukstis(e.target.value);
    }

    const changePlotis = e => { 
        setPlotis(e.target.value);
    }

    const changeColor = e => { 
        setColor(e.target.value);
    }

    const changeSave = e => { 
        setSave(e.target.value);
    }


    return (
        <>    
            <div className="kvadratas" onChange={changeKvadratas}>
                <label htmlFor="aukstis"> </label>
            </div>
            <input type="color" onChange={changeColor} value={color} />
        </>
        
    )

}
export default Range;