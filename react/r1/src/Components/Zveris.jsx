// sukurti komponentą žveris ir miške paleisti tris skirtingus zveris

function Zveris({type, msg}) { // type - trys skirtingi žvėrys, 
    return (
        <h2>{type} {msg || ''}</h2> // msg - perduotas iš misko ir atspaudintas
    )
}

export default Zveris;