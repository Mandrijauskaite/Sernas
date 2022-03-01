console.log('---------');
//   Susisikurt tuščią masyvą. Į tą masyvą įrašyti 10 elementų. 
//   Elementai yra su random funkcija generuoti skaičiai nuo 1 iki 6 (mesti kauliuką).
//    Masyvą atspausdinti konsolėje DONE!

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

const skaiciai = []
for (let index = 0; index < 10; index++) {
    // const element = array[index];
    // console.log(index);
    const random = getRandomIntInclusive(1, 6)
    // console.log(random);
    // skaiciai.push(random)
    skaiciai[index]=random
}
console.log(skaiciai);

console.log('-----------------');
// Programiškai ridenkite du žaidimo kauliukus- 
// sugeneruokite du atsitiktinius skaičius nuo 1 iki 6
// Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, 
// priešingu atveju pralošėte. 
// Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės 
// ir išvada laimėjote ar pralošėte.

// if (salyga / klausimas) {
//     ka daryti, jei tenkinama salyga
// } else {
//     ka daryti, jei NEtenkinama salyga
// }
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const kauliukasA = rand(1, 6);
console.log(kauliukasA);
const kauliukasB = rand(1, 6);
console.log(kauliukasB);
const kauliukuSuma = kauliukasA + kauliukasB;
console.log(`Kauliukų suma: $(kauliukuSuma}.`);

for (let index = 0; index < 6; index++) {
    const random = getRandomIntInclusive(1, 6)
    kauliukuSuma[index]=random
}
console.log(kauliukuSuma);

if (kauliukuSuma > 8) {
    console.log('Kauliukų suma ${kauliukuSuma}. Jūs LAIMĖJOTE');
    } else {
      console.log('Kauliukų suma ${kauliukuSuma}. Jūs PRALOŠĖTE');
    }

console.log('--------------');
    // Gyveno du katinukai, Pilkis ir Murklys. +
    // Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. +
    // Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. 
    // Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. 
    // Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.

    const Pilkis = rand(3, 6);
    console.log(Pilkis);

    const Murklys = rand(3, 6);
    console.log(Murklys);

    if (Pilkis > Murklys) {
        console.log('Pilkis sunkesnis už Murklį');
    } else if (Pilkis < Murklys) {
        console.log('Pilkis lengvesnis už Murklį');
    } else (Pilkis === Murklys) {
        console.log(`Pilkis ir Murklys vienodų svorių`);
    }

    // Antanas nusipirko naują butą ir pinigų jam liko nedaug.
    // Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
    // Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir
    // jeigu iškris 1 arba 5 pirkti televizorių, 
    // jeigu 3 arba 4 pirkti skalbimo mašiną ir 
    // jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. 
    // Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

    const pirkinys = rand(1, 6);
    console.log(pirkinys);
    if (pirkinys === 1 || pirkinys === 5) {
        console.log(`Pirkti - televizorių`);
        } else if (pirkinys === 3 || pirkinys === 4) {
            console.log(`Pirkti - skalbimo mašiną`);
            } else (pirkinys === 2 || pirkinys === 6) {
             console.log(`Pirkti - šaldytuvą`);
        }
        console.log('----------');
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir 
// kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. 
// Paskutinis skaičius turėtų būti 1. 
// Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

const ratai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseRatai = [];
    // for (let index = 0; index < 10; index++) {
    //     const random = getRandomIntInclusive(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //     skaiciai[index]=random
    // }
    // console.log(ratai);

for (let i = 0; i < ratai.length; i++) {
    const likoRatu = ratai[ratai.length - 1 - i];
    console.log(likoRatu);
    reverseRatai = reverseRatai + likoRatu;
}