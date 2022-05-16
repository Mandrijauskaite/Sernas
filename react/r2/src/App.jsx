import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [trees, setTrees] = useState([]);  // steitas, pradžioje medžių neturime

  useEffect(() => { // kreipiamės į savo serverį ir iš jo gausime visus medžius
    axios.get('http://localhost:3003/trees-manager') // prašome gauti (getinti) iš adreso http://localhost:3003/trees-manager
      .then(res => { // tada, kada gažką gauname 
        console.log(res.data); // pasižiūrime ką turime; palaukiame kol gausime responsą ir..
        setTrees(res.data); // .. ir responso duomenis išsispausdiname (jei šios eilutės nėra sąrašo ant ekrano nematysime)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>LABAS</h1>
        {
          trees.map(t => <div key={t.id}>{t.name}</div>) // steitą išsimapiname. Imame medį t ir iš medžio padarome divą. Kad react nepyktų pasidarome key (jis yra medžių Eglė ir pan. id) ir įsirašome patį medį t. ir jo vardą (name žr. 0: {id: 1, name: "Eglė", height: 4, type: 2})
        }
      </header>
    </div>
  );
}

export default App;
