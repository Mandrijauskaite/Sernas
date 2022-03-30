import Mygtukai from "../Mygtukai";

function Medziai({color}) {

    return (
        <>
                <Mygtukai color={color} type="ĄŽUOLAS"></Mygtukai>
                <Mygtukai color={color} type="BERŽAS"></Mygtukai>
                <Mygtukai color={color} type="UOSIS"></Mygtukai>
        </>
    )
}

export default Medziai;