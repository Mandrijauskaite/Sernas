import Zvuvis from "./Zuvis";

function Upe({big, forest}) {

    const getBig = big => big ? '20px' : '10px';
    
    return (
        <div>
            <h3 style={{
                color:forest,
                fontSize: getBig(big)
                }}>Miškas</h3>

                <Upe type="Menkė"></Upe>
                <Upe type="Lydeka"></Upe>
                <Upe type="Karšis"></Upe>
        </div>
    )
}

export default Upe;