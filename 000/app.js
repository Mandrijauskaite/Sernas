// 
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Apskritimukai TASK

// Reikalavimui JS kodui:
// turi būti sukurtas masyvas balls.
// Reikalavimui HTML:
// turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; 
// vieta, kurioje bus atvaizduojami sukurti apskritimukai;
// du mygtukai- “sukurti naują” ir “ištrinti seniausią”.
// Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. 
// Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.

const balls = []; // masyvas balls



console.log('---------');
// Susisikurt tuščią masyvą. Į tą masyvą įrašyti 10 elementų. 
// Elementai yra su random funkcija generuoti skaičiai nuo 1 iki 6 (mesti kauliuką).
// Masyvą atspausdinti konsolėje DONE!

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //Maksimalus yra imtinai, o minimumas yra įskaitytas
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

console.log('#1, 1.-----------------');
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

    const kauliukasA = getRandomIntInclusive(1, 6);
    console.log(kauliukasA);
    const kauliukasB = getRandomIntInclusive(1, 6);
    console.log(kauliukasB);
    const kauliukuSuma = kauliukasA + kauliukasB;
    console.log(kauliukuSuma);

    for (let index = 0; index < 6; index++) {
        const random = getRandomIntInclusive(1, 6)
        kauliukuSuma[index]=random
    }
    console.log(kauliukuSuma);

    if (kauliukuSuma > 8) {
        console.log(`Kauliukų suma: ${kauliukuSuma} - Jūs LAIMĖJOTE`);
        } else {
        console.log(`Kauliukų suma: ${kauliukuSuma} - Jūs PRALOŠĖTE`);
        }

console.log('#1, 2.--------------');
// Gyveno du katinukai, Pilkis ir Murklys. +
// Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. +
// Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. 
// Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. 
// Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.

    const Pilkis = getRandomIntInclusive(3, 6);
    console.log(Pilkis);

    const Murklys = getRandomIntInclusive(3, 6);
    console.log(Murklys);

    if (Pilkis > Murklys) {
        console.log('Pilkis sunkesnis už Murklį');
    } else if (Pilkis < Murklys) {
        console.log('Pilkis lengvesnis už Murklį');
    } else {
        console.log('Pilkis ir Murklys vienodų svorių');
    }
console.log('#1, 3.--------------');
// Nojus pasiruošė potvyniui ir nusipirko dvi valtis. 
// Vienoje telpa 15 katinukų, kitoje 15 karvių 
// (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) 
// Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų 
// ir toks pats atsitiktinis skaičius karvių. 
// Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. 
// Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. 
// Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

    const katinukai = getRandomIntInclusive(0, 30);
    console.log(katinukai);
    const karves = getRandomIntInclusive(0, 30);
    console.log(karves);

    if (katinukai <= 15 && karves <= 15) {
        console.log('Telpa');
    } else {
        console.log('Netelpa');
    }

console.log('#1, 4.--------------');
// Antanas nusipirko naują butą ir pinigų jam liko nedaug.
// Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
// Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir
// jeigu iškris 1 arba 5 pirkti televizorių, 
// jeigu 3 arba 4 pirkti skalbimo mašiną ir 
// jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. 
// Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

    const pirkinys = getRandomIntInclusive(1, 6);
    console.log(pirkinys);
    if (pirkinys === 1 || pirkinys === 5) {
        console.log(`Pirkti - televizorių`);
        } else if (pirkinys === 3 || pirkinys === 4) {
            console.log(`Pirkti - skalbimo mašiną`);
            } else if (pirkinys === 2 || pirkinys === 6) {
             console.log(`Pirkti - šaldytuvą`);
            } else {
            console.log('netinka salyga nei viena');
            }

console.log('#1, 5.--------------');
// Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. 
// Skaičius atspausdinkite nuo mažiausio iki didžiausio. 
// Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;

    let atsitiktiniaiSkaiciai = [];
    for (let index = 0; index < 3; index++) {
        const random = getRandomIntInclusive(1, 7)
        atsitiktiniaiSkaiciai.push(random)
    }
    // console(atsitiktiniaiSkaiciai);
    atsitiktiniaiSkaiciai.sort(function(a, b){
        return a -b
    });
    console.log(atsitiktiniaiSkaiciai);

console.log('#2, 1.--------------');
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir 
// kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. 
// Paskutinis skaičius turėtų būti 1. 
// Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

const ratai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseRatai = [];
    for (let index = 0; index < 10; index++) {
        const random = getRandomIntInclusive(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        skaiciai[index]=random
    }
    console.log(ratai);

for (let i = 0; i < ratai.length; i++) {
    const likoRatu = ratai[ratai.length - 1 - i];
    console.log(likoRatu);
    reverseRatai = reverseRatai + likoRatu;
}
console.log('#2, 2.--------------');
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
// Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. 
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, 
// rand() funkcija generuokite atsitiktinį automobilio greitį 
// o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.

// const ratai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let reverseRatai = [];
//     for (let index = 0; index < 10; index++) {
//         const random = getRandomIntInclusive(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//         skaiciai[index]=random
//     }
//     console.log(ratai);

// for (let i = 0; i < ratai.length; i++) {
//     const likoRatu = ratai[ratai.length - 1 - i];
//     console.log(likoRatu);
//     reverseRatai = reverseRatai + likoRatu;
// }



console.log('#2, 3.--------------');
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
// Jo kuro bake liko 44 litrai kuro. Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų. 
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, 
// o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų. 
// Kurui pasibaigus ciklą nutraukite anksčiau laiko. 

console.log('#2, 4.--------------');
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). 
// Kiekviename žiede yra 5 posūkiai, kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. 
// Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) ir 
// ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.

// let minGreitis = 120;
// let greitis;
// for (let index = ciklas; index >= 10; --index) {
//     for (let j = 0; j < 5; j++) {
//         greitis = getRandomIntInclusive(20, 120)
//         console.log(greitis)
//         if(greitis < minGreitis) {
//             minGreitis = greitis;
//         }
//     }
// }
// console.log();
    
// }

console.log('#2, 5.--------------');
// (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. 
// Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai: 
// netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - 
// spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. 
// Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. 
// Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. 
// Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, 
// vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite. 
// Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

const arr = [5, 4, 3, 2, 1];
arr.forEach((x,y) => {
    console.log(y)
});
console.log(suma);
