import {useState} from 'react';

function KVraudonas() {

    const [text1, setText1] = useState(''); {/* 1 forma – 1 STATE, Tuščias stringas */}

    return ( // return - grąžinti
        <>
        <input type="text"></input> {/* susidaro laukelis */}
        <button>Click</button>
        </>
    )

}
export default KVraudonas