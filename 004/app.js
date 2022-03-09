function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas1 = ['Vytas', 'Aiste', 'Bebras'];

// console.log('Bebras:', namas1[2]);

const namas2 = [
    ['Vytas', 'Lina'],
    ['Aiste', 'Alina'],
    ['Bebras', 'Žirafa']
];

// Sukurti naują masyvą,
//  11 aukštų, kurio elementai atsitiktiniai 
// skaičiai nuo 5 iki 25 DONE!

// console.log('Bebras:', namas2[2][0]);

// console.table(namas2);
// console.log('namo aukštis: ', namas2.length);


const hause1 = [];
for (let i = 0; i < 11; i++) {
    hause1.push(rand(5, 25));
}


const hause2 = [];
for (let i = 0; i < 11; i++) {

    // aukstas
    const floor = [];
    for (let k = 0; k < 2; k++) {
        floor.push(rand(5, 25));
    }
    // aukstas

    hause2.push(floor);
}

console.table(hause1);
console.table(hause2);

// Imame vokišką hause1 ir naudodami for 
// o poto forEach nuskaitome, 
// kiekvieną narį atskirai išspauszdindami consolėje

for (let i = 0; i < hause1.length; i++) {
    console.log(hause1[i]); // i -> 0, 1, 2... 9, 10
}

// hause1.forEach();
// hause1.forEach((el) => {});
// hause1.forEach((el) => {

// });
console.table('-------------------------------');
// hause1.forEach(el => console.log(el));
hause1.forEach(el => {
    console.log(el);
});

console.table('-------------------------------');
for (let i = 0; i < hause2.length; i++) {

    for (let k = 0; k < hause2[i].length; k++) {

        console.log(hause2[i][k]); // i -> 0, 1, 2... 9, 10

    }

}
console.table('-------------------------------');

// lipame per aukstus
hause2.forEach(floor => {
    // gauname auksta
    // tada lipame per aukstus
    floor.forEach(flat => {
        // gauname butus
        console.log(flat);
    });

});
console.log('1.---------------');
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

console.log('2.a.---------------');
// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

console.log('2.b.---------------');
// Raskite didžiausią masyvo reikšmę ir jos indeksą;

console.log('2.c.---------------');
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

console.log('2.d.---------------');
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

console.log('2.e.---------------');
// Papildykite masyvą papildomais 10 elementų 
// su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

console.log('2.f.---------------');
// Iš masyvo elementų sukurkite du naujus masyvus. 
// Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
// o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

console.log('2.g.---------------');
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

console.log('2.h.---------------');
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

console.log('3.---------------');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, 
// o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

console.log('4.---------------');
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

console.log('5.---------------');
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
// Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

console.log('6.---------------');
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
// kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.

console.log('7.---------------');
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.

console.log('8.---------------');
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.

console.log('8.---------------');
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: 
// Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
// Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. 
// Penktas trečio ir ketvirto suma ir t.t.
