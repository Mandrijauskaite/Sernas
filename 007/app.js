// 3 būdai kaip į JS įkrenta duomenys
// 1 būdas duomenų įvedimas per formas
// 2 būdas duomenų įvedimas per localStorage (app.js 006)
// 3 būdas duomenų gavimas iš nuotolinio serverio (app.js 007)
// stringai nesikeicia, norint perduoti dokumenta reikia -> įdėti į objektą -> objektą paversti JSON -> 
// JSON persiųsti internetu -> tada galima pasiimt JSON -> iš JSON išsipakuoti objektą -> tada turime dokumentą

// Browser [Naršyklė] -> (Request [Užklausa] -> Server -> Response [Atsakymas] -> - yra stringai)
// Internetinis puslapis -> Network -> Type -> document (rodo, kad pagrindinis puslapio dokumentas t.y Request -> Server -> Response)
// Vienas stringas yra HEADER (sudaromas taip, kad nebūtų tuščių eilučių) ir BODY (pirma po header eilutė yra tuščia ji skiria nuo body)
// HEADER (informacija naršyklei)
// Pilnas KRUD'as (metodai): GET(nuskaityti)  - prašome informacijos; POST (įrašyti) - siunčiam kažką; PUT (redaguoti) - siunčia kažką paredaguoti; DELETE (ištrinti) - ištrina tą kažką
// Status Code - toks kodas įrašytas į HEADER atspindi serverio nuotaiką yra nuo 100 iki 500 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// Informaciniai atsakymai (100–199)
// Sėkmingi atsakymai (200–299) SVARBIAUSIAS - REIŠKIA VISKAS GERAI
// Peradresavimo pranešimai (300–399)
// Kliento klaidų atsakymai (400–499)
// Serverio klaidų atsakymai (500–599) 500 sakys, kad yra jūsų padaryta klaida su kodu, bet ne su serveriu

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// A -> A='Bū' ->  log A 
// A -> A=>Ser -> log A



// https://newbedev.com/javascript-fetch-http-example-com-movies-json-then-response-response-json-then-data-console-log-data
console.log('SVARBU---------FORMA, kurią REIKIA KOPIJUOTI---------PRADZIA');
fetch('https://example.com/movies.json') // GET metodas
    .then(response => response.json()) // then -> laukimas atsakymo
    .then(data => {                    // then kol bus apdorotas atsakymas. Laukimas yra tarp sklaistų
        console.log(data);
        // kodas. Viską kopijuojam, o šioje vietoje rašome savo kodą


    });
console.log('SVARBU----------FORMA, kurią REIKIA KOPIJUOTI--------PABAIGA');
// ne cia



console.log('1.UZDAVINYS------------------PRADZIA');
// 
fetch('https://jsonplaceholder.typicode.com/posts/1') 
    .then(response => response.json()) 
    .then(data => {            
        console.log('------>', data);
        

    });
console.log('1.UZDAVINYS------------------PABAIGA');



console.log('2.UZDAVINYS------------------PRADZIA');
// Gauti kokio nors posto informaciją
// Title parašyti į h1 tagą,
// o body turinį į p tagą

const h1 = document.querySelector('h1'); // surandame h1
const p = document.querySelector('p'); // surandame p

fetch('https://jsonplaceholder.typicode.com/posts/77') 
.then(response => response.json()) 
.then(data => {            
    console.log('------>', data);
    
    h1.innerText = data.title;
    p.innerText = data.body;  

});
console.log('2.UZDAVINYS------------------PABAIGA');


console.log('NAMŲ DARBAI------------------PRADZIA');
// https://in3.dev/knygos/ (gauna informaciją)
// https://in3.dev/knygos/types/ ()
// Reikia padaryti knygyno puslapį 
// gražiai išdėliojant viską html ir padaryti add to favorite mygtuką su localStorage
// naudojant abu url
// tipas 1 grožinė literatūra, tipas 2 populiarioji psichologija, yra viena knyga, kurios kaina keičiasi, 
console.log('NAMŲ DARBAI------------------PABAIGA');