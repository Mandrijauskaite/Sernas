import { useEffect, useState } from 'react';
import getNewId from './Common/id';
import Create from './Components/crud/Create';
import Edit from './Components/crud/Edit';
import Read from './Components/crud/Read';
import './crud.scss';


function App() {

    const [zoo, setZoo] = useState([]);
    const [modal, setModal] = useState(0);

    useEffect(() => {
        let data = localStorage.getItem('zoo');
        if (null === data) {
            localStorage.setItem('zoo', JSON.stringify([]));
            setZoo([]);
        }
        else {
            setZoo(JSON.parse(data));
        }
    }, []);

    const cancel = () => {
        setModal(0);
    }

    const show = id => {
        setModal(id);
    }

    const getAnimal = () => {
        return zoo.filter(a => a.id === modal)[0];
    }

    const create = data => {
        const animal = {
            type: data.type,
            color: data.color,
            isalive: data.isalive,
            id: getNewId()
        }
        // localStorage logic
        const newData = [...zoo, animal];
        localStorage.setItem('zoo', JSON.stringify(newData));
        //

        setZoo(zoo => [...zoo, animal]);
    } 

    const edit = data => {
        // localStorage logic
            const zooCopy = [...zoo];
            zooCopy.forEach((z, i) => {
                if (z.id === modal) {
                    zooCopy[i].type = data.type;
                    zooCopy[i].color = data.color;
                    zooCopy[i].isalive = data.isalive;
                }
            });
            localStorage.setItem('zoo', JSON.stringify(zooCopy));
        // 
        setZoo(z1 => {
            z1.forEach((z, i) => {
                if (z.id === modal) {
                    z1[i].type = data.type;
                    z1[i].color = data.color;
                    z1[i].isalive = data.isalive;
                }
            });
            return z1;
        });
        cancel();
    } 

    const deleteA = id => {
        // localStorage logic
        const newData = zoo.filter(a => a.id !== id);
        localStorage.setItem('zoo', JSON.stringify(newData));
        //
        setZoo(zoo => zoo.filter(a => a.id !== id));
    }


 
  return (
    <div className="app">
            <div className="top">
            <h1>ZoO</h1>
            </div>
            <div className="content">
            <Create create={create}></Create>
            <Read zoo={zoo} deleteA={deleteA} show={show}></Read>
            </div>
            <div className="bottom">
        
            </div>
            {
                modal ? <Edit edit={edit} animal={getAnimal()} cancel={cancel}></Edit> : null
            }
    </div>
  );
}


export default App;