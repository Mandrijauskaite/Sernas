import SuoColor from "./SuoColor";

export default function Suo({ aukstis, plotis, spalva, numeris, dog }) {
    console.log(dog[0]);

    return(
        <div>
          {dog.map((dog, i) => {
           
          })}
        </div>
    )
}

// https://coursework.vschool.io/mapping-components-in-react/

// return (
//     <div>
//         {turtles.map((turtle, index) =>
//         <div key={turtle.name + index}>
//             <h1>{turtle.name} ({turtle.nickName})</h1>
//             <p>Weapon of choice: {turtle.weapon}</p>
//             <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200"/>
//             <hr/>
//         </div>
//         )}
//     </div>
// )