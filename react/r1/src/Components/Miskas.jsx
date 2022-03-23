import Zveris from "./Zveris";

function Miskas({big, forest, msg}) {

    const getBig = big => big ? '40px' : '20px';
        
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
