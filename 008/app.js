// JS tobulinamas, kad būtų galima dirbti su ja visomis programomis
// console.log([]); // ([]) - tuščias Array. Array yra objekto tipas.


console.log('1.UZDAVINYS------------------PRADZIA');
// Sukurti objektą, kuris turi savybę cat
// Sukurti objektą, kuris turi savybę cat2
// Prie katinų pridėti svorį, uodegos ilgį, šeimininko vardą
// Sukurti objektą šunį su tomis pačiomis savybėmis
// reikia nunulinti rezultatą
// prašo pakeisti vardą į Petrą


console.log('SVARBU----------klasės kūrimas--------PRADŽIA');
class Cat { // klasė turi turėti vardą Katinas - tai PLANO PAVADINIMAS

    constructor(name, svoris, t, seimininkas) { // rašome planą vienai katei, bet tiks visoms katėms
        this.name = name;                // į constructor skliaustelius rašyti išeilės SVARBU
        this.weight = svoris;            //
        this.tail = t;                   //
        this.ownerName = seimininkas     //
    }

}
const cat3 = new Cat('Ryžas', 5, 12, 'Saulėnas'); // ši informacija esanti skliaustuose, atsiranda constructor()
const cat4 = new Cat('Baltuoklis', 7, 20, 'Birutė'); // kaip cat3; constructor(name, svoris, t, seimininkas)

console.table(cat3); // table rašome, kai norime, kad atspausdintu stulpeliu
console.table(cat4);
console.log('SVARBU----------klasės kūrimas--------PABAIGA');


const cat = { name: 'Murka', weight: 5, tail: 22, ownerName: 'Marytė' }; // Sukurti objektą, kuris turi savybę Cat, svorį, uodegos ilgį, šeimininko vardą
const cat2 = { name: 'Rainys', weight: 7, tail: 27, ownerName: 'Marytės teta' }; // Sukurti objektą, kuris turi savybę cat2, svorį, uodegos ilgį, šeimininko vardą

console.log(cat.name); // atspausdiname objektą
console.log(cat2.name); // atspausdiname objektą


console.table(cat);
console.table(cat2);


const dog = { name: 'Bobikas', weight: 17, tail: 0, ownerName: 'Marytės dėdė' }; // Sukurti objektą šunį su tomis pačiomis savybėmis
// console.table(dog); // atspausdiname objektą
console.log('1.UZDAVINYS------------------PABAIGA');


console.log('2.UZDAVINYS------------------PRADZIA');
// Sukurti objektą Kauliuko metimas
// jis turi savybę rezultatas
// turi savybę vardas (pasirinktas)
// random nuo 1 iki 6
// žaidėjas meta dar kartą kauliuką

class KauliukoMetimas { // Sukurti objektą Kauliuko metimas

    constructor(name) {
        this.vardas = name; // turi savybę vardas (pasirinktas)
        this.rezultatas = this.rand(1, 6); // jis turi savybę rezultatas; // random nuo 1 iki 6
    }

    rand(min, max) { // function rand(min, max) įkeliame į f-ją todėl ištriname function ir paliekam rand(min, max)
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    metaKauliuka() { // žaidėjas meta dar kartą kauliuką
        this.rezultatas = this.rand(1, 6);
    }

    nunulinti() {  // reikia nunulinti rezultatą
        this.rezultatas = 0;
    }

    pakeistiVarda(naujas) { // prašo pakeisti vardą Petras
        this.vardas = naujas;
    }
}

const zaidejas1 = new KauliukoMetimas('Jonas'); // vardas (pasirinktas)
console.table(zaidejas1);

zaidejas1.metaKauliuka(); // žaidėjas meta dar kartą kauliuką
console.table(zaidejas1);

zaidejas1.nunulinti(); // reikia nunulinti rezultatą
console.table(zaidejas1);

zaidejas1.pakeistiVarda('Petras'); // prašo pakeisti vardą Petras
console.table(zaidejas1);
console.log('2.UZDAVINYS------------------PABAIGA');