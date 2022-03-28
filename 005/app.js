function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('1.PAVYZDYS------------------PRADZIA');
// const g = ['Vytas', 'Lina', 'Bebras'];

// const savybe = 'gyventojai';

console.log('SVARBU Nr.1.-------taip surasius viskas bus be tvarkos PROGRAMA PATI NUSPRES-----------PRADZIA');
const namas1 = {}; //objektas - turi savybes pvz. namas1.kaminai; savybes zymimos .
namas1.kaminai = 2; // objektas su savybe; ju yra 2 vnt.
namas1.gyventojai = ['Vytas', 'Lina', 'Bebras']; // objektas su savybe; ju yra 3 vnt.
// namas1.[savybe] = g; // galimas toks gyventoju uzrasymas. Reikia tureti const g = ['Vytas', 'Lina', 'Bebras']; ir const savybe = 'gyventojai';
namas1.adresas = 'Guobų g. 13A'; //  objektas su savybe; adresas.
console.log(namas1);
console.log('SVARBU Nr.1.-------taip surasius viskas bus be tvarkos PROGRAMA PATI NUSPRES-----------PABAIGA');

console.log('SVARBU Nr.2.-------taip surasius viskas bus be tvarkos-----------PRADZIA');
// namas1[savybe] = g; // => namas.gyventojai
const namas2 = { // surasyti savybes
    kaminai: 5,
    gyventojai: ['Simas', 'Rimas'],
    adresas: 'Guobų g. 13A'
}
console.log(namas2.kaminai); // jei norime gauti kaminus
console.log('SVARBU Nr.2.-------taip surasius viskas bus be tvarkos-----------PABAIGA');


console.log('1.UZDAVINYS------------------PRADZIA');
// Naudojant cikla isspausdinti visus namo gyventojus

console.log('--------1.-----yra daugiau argumentu (eiluciu)-----');
// namas1.gyventojai.forEach((g) => { // ilgoji versija apatines f-jos
//     console.log(g);
// }); 
console.log('--------1.----------');

console.log('--------2.-----yra vienas argumentas (eilute)-----');
namas1.gyventojai.forEach(g => console.log(g)); // g - gyventojai. Naudojama nes turime viena argumenta g ir viena eilute console.log(g)
console.log('--------2.----------');
console.log('1.UZDAVINYS------------------PABAIGA');


console.log('2.UZDAVINYS------------------PRADZIA');
// Reikia sukurti masyvą iš 7 elementų. 
// Masyvo elementas yra objektas. 
// Tas objektas turi savybę number kuri yra 
// atsitiktinis skaičius nuo 1 iki 6 DONE!

const arr = []; // masyvas tuscias

for (let i = 0; i < 7; i++) { //for nes neturime arr
    // vienas
    const random = rand(1, 6); // kuri desime i objekta, jis kartosis 7 kartus
    //
    const obj = {}; // tuscia objekta
    obj.number = random; // priskiriama savybe number, kuri lygi random
    arr.push(obj); 
}
console.log(arr);
console.log('2.UZDAVINYS------------------PABAIGA');


console.log('3.PAVYZDYS------------------PRADZIA');
// Reikia sukurti masyvą iš 7 elementų. 
// Masyvo elementas yra objektas. 
// Tas objektas turi savybę numbers 
// kuri yra masyvas iš 5 atsitiktinių 
// skaičių nuo 1 iki 6

const arr1 = [];
for (let i = 0; i < 7; i++) {
    const masyvas = [];
    for (let k = 0; k < 5; k++) {
       const random = rand(1, 6);
       masyvas.push(random)
    }
    const random = rand(1, 6);
    const obj = {};
    obj.numbers = masyvas;
    arr1.push(obj);
}
console.log(arr1);
console.log('3.PAVYZDYS------------------PABAIGA');


console.log('4.PAVYZDYS------------------PRADZIA');
// Parašyti kodą, kuris gražina random katino vardą DONE!

const cats = ['Murka', 'Juodis', 'Kakalius', 'Meilutė', 'Pifas', 'Rainius'];
    console.log(cats[rand(0, cats.length - 1)]); // jei norima, kad keistusi vardai rasom random, tada cats.length kaciu eile iki galo - 1 nes yra dar nulis 
console.log('4.PAVYZDYS------------------PABAIGA');


console.log('5.PAVYZDYS------------------PRADZIA');
// Reikia sukurti cat objektą. 
// Objektas turi turėti dvi savybes: name ir pills. 
// Name yra random iš cats masyvo. Pills yra objektas. 
// Pills objektas turi dvi savybes blue ir red. 
// Tų savybių reikšmės yra rand true arba false DONE!

console.log('--------true arba false----------');
const ft = !rand(0, 1); // ft - false true; rand sugeneruoja arba 0 arba 1 ! - logine neigimo operacija, ji gali buti tik su tru arba false 0 pakeicia i falce
console.log('--------true arba false----------');

// gamina katino objekta
const cat = {}; // objektas
cat.name = cats[rand(0, cats.length - 1)]; // savybe
cat.pills = {}; // objektas
cat.pills.blue = !rand(0, 1); // turi savybe blue 
cat.pills.red = !rand(0, 1);
//
console.log(cat);
console.log('5.PAVYZDYS------------------PABAIGA');


console.log('6.PAVYZDYS------------------PRADZIA');
// Parašyti masyvą su 20 katinų

console.log('--------for kodo forma----------');
// const vetClinic = [];
// for (let i = 0; i < 20; i++) {
//     vetClinic.push('miau');
// }
// console.log(vetClinic);
console.log('--------for kodo forma----------');



console.log('6.PAVYZDYS------------------PABAIGA');


console.log('7.PAVYZDYS------------------PRADZIA');
// kiek klinikoje yra Murku

let murkos = 0;
vetClinic.forEach(cat => murkos = cat.name == 'Murka' ? murkos + 1 : murkos); // jei cat vardas yra Murka
// tai musu murkos yra + 1, jei ne Murkas paliekame ramybeje; tada atsispausdiname Murkas
console.log(vetClinic);
console.log(murkos);
console.log('7.PAVYZDYS------------------PABAIGA');