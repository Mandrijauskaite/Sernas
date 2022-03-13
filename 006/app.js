console.log('1.PAVYZDYS------------------PRADZIA');
console.log('1.PAVYZDYS------------------PABAIGA');
console.log('SVARBU------------------PRADZIA');
console.log('SVARBU------------------PABAIGA');

// JavaScript skirtas html stumdymui
// FrontEnd yra ta dalis kuri matosi narsykleje
// BackEnd yra ta dalis kuri nesimato narsykleje
// FrontEnd + Nodejs = Foll Stack (pats populiariausias: php + reactá - sukure facebook )


console.log('1.PAVYZDYS------------------PRADZIA');
// isvedimas i ataskaita - skaiciaus formatavimas
console.log('---1-----jei nereikia formatavimo----------');
let suma = 0;

suma = 0.1 + 0.2; // 0.300000000000004 gaunasi toks rezultatas

suma = suma + 5; // 5.3 gaunasi
console.log('---1-----jei nereikia formatavimo----------');

console.log('---2-----jei reikia formatavimo----------');
console.log(suma.toFixed(5)); // 1 budas skaiciuoti. Pavertimas i stringa su fiksuotu kiekiu po kablelio pvz. 5 (suma.toFixed(5))

console.log(suma.toPrecision(5)); // 2 budas skaiciuoti. Parodo bendra 5 skaiciu kieki (ne po kablelio)
console.log('---2-----jei reikia formatavimo----------');
console.log('1.PAVYZDYS------------------PABAIGA');


console.log('2.PAVYZDYS--------streem naudosime narsykleje (console>>applicasion LocalStorage) saugosim info----------PRADZIA');
const O = { bla: 'bla-bla' }; // O - objektas turi savybe bla

console.log('SVARBU-------tai vienintelis budas padaryti dep kopija-----------PRADZIA');
console.log(O); // turime objekta
const J = JSON.stringify(O); // paverciam is js  i JSON stringa
console.log(J); // viskas atvirksciai
const OB = JSON.parse(J);
console.log(OB);
console.log('SVARBU-------tai vienintelis budas padaryti dep kopija-----------PABAIGA');
console.log('2.PAVYZDYS--------streem naudosime narsykles (console>>applicasion LocalStorage) saugosim info----------PABAIGA');


console.log('3.PAVYZDYS------------------PRADZIA');
// localStorage.setItem('Lentyna5', 78.55); // setItem - ant kurios lentynos padeti. Skaiciams tinka. Lentyna liks atmintyje jei nenueisime i internet. puslapi ir ten istrinsime
// localStorage.setItem('manoLentyna', JSON.stringify(77)); // cia tinka objektams
// localStorage.setItem('manoLentyna44', JSON.stringify(['bl,ue', 'red', '75', 75])); // cia tinka masyvams


// console.log(parseFloat(localStorage.getItem('Lentyna5'))); // 
// console.log(JSON.parse(localStorage.getItem('manoLentyna'))); //
// console.log(JSON.parse(localStorage.getItem('manoLentyna44'))); // 

// console.log(localStorage.getItem('Lentyna5') === null); // null - reiskia objekto nebuvima
console.log('3.PAVYZDYS------------------PABAIGA');


console.log('4.PAVYZDYS------------------PRADZIA');
// const zebrai = { // turim du zebrus 
//     z1: 'Maša',
//     z2: 'Griša'
// };

// localStorage.setItem('zebras', JSON.stringify(zebrai)); // zebrai atsiranda vienoje lentynoje, tai vienintelis budas i lentyna ideti 2 ir daugiau objektus
console.log('4.PAVYZDYS------------------PABAIGA');


console.log('5.PAVYZDYS------------------PRADZIA');
console.log('1.-------rezultato fiksavimas SAVE-----------');
let gameCounter = localStorage.getItem('gameSave'); //  tikriname ar yra save
if (gameCounter === null) { // jei nera save, pirma karta atejai
    localStorage.setItem('gameSave', 0); // isirasome save
    gameCounter = 0; // sakome, kad yra nulis
}
console.log('1.-------rezultato fiksavimas SAVE-----------');

console.log('-------mygtuko ir skaiciaus suradimas, paspaudimu kurimas-----------');
let counter = 0; // skaitiklis
const button = document.querySelector('button'); // surandam buton
const h1 = document.querySelector('h1'); // surandam skaiciu

h1.innerText = gameCounter; // paspaudeme 0 kartu

button.addEventListener('click', () => {
    gameCounter++; // gameCounter padideja per vieneta
    h1.innerText = gameCounter; // padidejas gameCounter o, 1, 2, ir t.t
console.log('-------mygtuko ir skaiciaus suradimas, paspaudimu kurimas-----------');   
console.log('2.-------rezultato fiksavimas SAVE-----------');
    localStorage.setItem('gameSave', gameCounter); // reikalingas duomenu issaugojimui
console.log('2.-------rezultato fiksavimas SAVE-----------');
});
console.log('5.PAVYZDYS------------------PABAIGA');


// for (const i in localStorage) {
//     console.log(i);
// }

// const items = {...localStorage };
// console.log(items);


console.log('1.UZDAVINYS------------------PRADZIA');
// Sukurti masyvą iš 33 elementų, 
// kurie yra random skaičiai nuo 1 iki 33. 
// Masyvą įrašyti į localStorage DONE!

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr33 = []; // Sukurti masyvą iš 33 elementų

for (let i = 0; i < 33; i++) {
    arr33.push(rand(1, 33));
}
console.log(arr33);

localStorage.setItem('hi', (arr33));
console.log(parseFloat(localStorage.getItem('Lentyna5')));
console.log('1.UZDAVINYS------------------PABAIGA');