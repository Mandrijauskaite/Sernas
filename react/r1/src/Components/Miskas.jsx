import Zveris from "./Zveris";

function Miskas({big, forest, msg}) { // miskas paima msg ir perduoda lapei

    const getBig = big => big ? '60px' : '40px';
        
    return (
        <div>
            <h3 style={{
                color:forest,
                fontSize: getBig(big)
                }}>Miškas</h3>

            <Zveris type="Lapė Zita" msg={msg}></Zveris>
            <Zveris type="Kiškis Antanas"></Zveris>
            <Zveris type="Bebras Vytas"></Zveris>
        </div>
    )
}

export default Miskas;
