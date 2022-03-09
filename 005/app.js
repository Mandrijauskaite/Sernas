
// Reikia sukurti masyvą iš 7 elementų. 
// Masyvo elementas yra objektas. 
// Tas objektas turi savybę number kuri yra 
// atsitiktinis skaičius nuo 1 iki 6 DONE!

// Reikia sukurti masyvą iš 7 elementų. 
// Masyvo elementas yra objektas. 
//  Tas objektas turi savybę numbers 
// kuri yra masyvas iš 5 atsitiktinių 
// skaičių nuo 1 iki 6
// const arr1 = [];
// for (let i = 0; i < 7; i++) {
//     const masyvas = [];
//     for (let k = 0; k < 5; k++) {
//        const random = rand(1, 6);
//        masyvas.push(random)
//     }
//     const random = rand(1, 6);
//     const obj = {};
//     obj.numbers = masyvas;
//     arr.push(obj);
// }
// console.log(arr1);


// Parašyti kodą, kuris gražina random katino vardą DONE!
//       console.log(cats[random(0, cats.length - 1)]);

// Reikia sukurti cat objektą. 
// Objektas turi turėti dvi savybes. name ir pills. 
// Name yra random iš cats masyvo. Pills yra objektas. 
// Pills objektas turi dvi savybes blue ir red. 
// Tų savybių reikšmės yra rand true arba false DONE!

const cats = ['Murka', 'Juodis', 'Kakalius', 'Meilutė', 'Pifas'];
const pills = ['blu', 'red'];
for (let i = 0; i < cats.length; i++) {

    for (let k = 0; k < pills.length; k++) {

        console.log(pills[i]); // i -> 0, 1, 2... 9, 10

    }

}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const g = ['Vytas', 'Lina', 'Bebras'];

const savybe = 'gyventojai';

const namas1 = {}; //objektas
namas1.kaminai = 2;
namas1[savybe] = g; // => namas.gyventojai
namas1.adresas = 'Guobų g. 13';

const namas2 = {
    kaminai: 5,
    gyventojai: ['Simas', 'Rimas'],
    adresas: 'Guobų g. 13A'
}


console.log(namas1.kaminai);

// namas1.gyventojai.forEach((g) => {
//     console.log(g);
// });

for (let i = 0; i < namas1.gyventojai.length; i++) {
    console.log(namas1.gyventojai[i]);
}

namas1.gyventojai.forEach(g => console.log(g));

const arr = [];

for (let i = 0; i < 7; i++) {
    // vienas
    const random = rand(1, 6);
    //
    const obj = {};
    obj.number = random;
    arr.push(obj);
}

const arr1 = [];

for (let i = 0; i < 7; i++) {
    // masyvu rand
    const masyvas = [];
    for (let k = 0; k < 5; k++) {
        const random = rand(1, 6);
        masyvas.push(random);
    }
    //
    const obj = {};
    obj.numbers = masyvas;
    arr1.push(obj);
}

console.log(arr1);

const cats = ['Murka', 'Juodis', 'Kakalius', 'Meilutė', 'Pifas', 'Rainius'];

console.log(cats[rand(0, cats.length - 1)]);


const ft = !rand(0, 1);

// gamina katino objekta
const cat = {};
cat.name = 'Murka';
cat.pills = {};
cat.pills.blue = !rand(0, 1);
cat.pills.red = !rand(0, 1);
//

const cat2 = cat;

cat2.name = 'Rainius';

console.log(cat);
console.log(cat2);

const vetClinic = [];
for (let i = 0; i < 20; i++) {
    // gamina katino objekta
    const cat = {};
    cat.name = cats[rand(0, cats.length - 1)];
    cat.pills = {};
    cat.pills.blue = !rand(0, 1);
    cat.pills.red = !rand(0, 1);
    //
    vetClinic.push(cat);
}

let murkos = 0;
vetClinic.forEach(cat => murkos = cat.name == 'Murka' ? murkos + 1 : murkos);

console.log(vetClinic);
console.log(murkos);