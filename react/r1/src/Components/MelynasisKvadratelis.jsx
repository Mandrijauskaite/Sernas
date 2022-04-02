// PADARYTI komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus, dar atsirastų ir t.t.
import { useState } from "react"

function MelynasisKvadratelis() {

    const [kv, setKv] = useState([]);

    const add = () => {
        setKv(items => [...items, items.length + 1]);
    } //

    return (
        <>
        {
            kv.map((k, i) => <div className="BS" key={i}>{k}</div>)
        }
        <button onClick={add}>ADD</button>
        </>
    )
}

export default MelynasisKvadratelis;