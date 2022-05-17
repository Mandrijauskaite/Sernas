
import { useEffect, useState } from 'react';
import axios from 'axios';
import './bootstrap.css';
import './App.css';
import Create from './Components/Create';


function App() {

  const [trees, setTrees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/trees-manager')
      .then(res => {
        console.log(res.data);
        setTrees(res.data);
      })
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create></Create>
        </div>
        <div className="col-8">
          <div className="card m-2">
            <div className="card-header">
              <h2>Tree List</h2>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  trees.filter(t => t.name !== 'Agrastas').map(t => <li className="list-group-item" key={t.id}>{t.name}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;