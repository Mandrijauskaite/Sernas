function Zuikis({color}) { // vietoj color parašyti props arba išvardinti visus tago Zebrai ir Bebrai props'us pvz. forest, big

    // {console.log(props);}

    return (
        <div>

            {/* <h1 className="zuikiukas">LABAS, ZUIKI!</h1> */} {/* spalvos gavimas per App.css*/}
            <h1 style={{color: 'pink'}}>LABAS, ZUIKI!</h1>
            
            <h1 style={{fontSize: big = '20px'}}>Vieni kursai keitė kitus: visą dieną praleisdavau prie kompiuterio. Kartais tai užtrukdavo net iki 10 valandų...</h1>

            {/* <h1 style={{
                color:props.forest, // props'ą išmesti, kai kai į function Zuikis({forest, big})
                fontSize: props.big == '1' ? '20px' : '10px' 
                }}>Zebrai ir Bebrai</h1> */}

            <h1 style={{color:'blue'}}>Zebrai ir Bebrai</h1>
            <h1 style={{color:'red'}}>Zebrai ir Bebrai</h1>
            <h1></h1>
            <h2></h2>

        </div>
    )
}

export default Zuikis;